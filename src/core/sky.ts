import * as THREE from 'three';
import { GU } from './uniforms.ts';

export type Weather = 'clear' | 'mist' | 'rain' | 'snow';

const DEG = Math.PI / 180;
const CITY_LAT = 30.6577 * DEG;
/**
 * 成都位于 104.0657°E，比东经 120° 的北京时间基准晚约 1.06 小时。
 * UI 里的时钟是北京时间，太阳公式要的是地方真太阳时，所以先减掉经度差。
 * 忽略均时差（±15 分钟），对沙盘的天际线亮度没有可感知影响。
 */
const LONGITUDE_CORRECTION_H = (104.0657 - 120) / 15;

export interface SkyKey {
  elev: number;
  zenith: string;
  horizon: string;
  sun: string;
  ground: string;
}

/** 按太阳高度角给调色，保证日出/正午/黄昏/夜晚都是不同的成都。 */
const KEYS: SkyKey[] = [
  { elev: -22, zenith: '#04070f', horizon: '#0a1220', sun: '#16233c', ground: '#05080d' },
  { elev: -8, zenith: '#0a1428', horizon: '#22243a', sun: '#2a3252', ground: '#0b1018' },
  { elev: -1, zenith: '#1c3253', horizon: '#8a5f5a', sun: '#ff8a4a', ground: '#23201f' },
  { elev: 5, zenith: '#2f5f96', horizon: '#e6a06a', sun: '#ffb066', ground: '#3a3930' },
  { elev: 14, zenith: '#3c78bd', horizon: '#cdd9e6', sun: '#ffe0ad', ground: '#4a5340' },
  { elev: 40, zenith: '#3b82cd', horizon: '#cbe0f1', sun: '#fff4dd', ground: '#55613f' },
  { elev: 70, zenith: '#3f8ad6', horizon: '#d5e8f6', sun: '#ffffff', ground: '#5c6845' },
];

function mixHex(a: string, b: string, t: number, out: THREE.Color): THREE.Color {
  const ca = new THREE.Color(a);
  const cb = new THREE.Color(b);
  return out.copy(ca).lerp(cb, t);
}

function palette(elevDeg: number) {
  let i = 0;
  while (i < KEYS.length - 2 && elevDeg > KEYS[i + 1].elev) i++;
  const a = KEYS[i];
  const b = KEYS[i + 1];
  const t = THREE.MathUtils.clamp((elevDeg - a.elev) / (b.elev - a.elev), 0, 1);
  return {
    zenith: mixHex(a.zenith, b.zenith, t, new THREE.Color()),
    horizon: mixHex(a.horizon, b.horizon, t, new THREE.Color()),
    sun: mixHex(a.sun, b.sun, t, new THREE.Color()),
    ground: mixHex(a.ground, b.ground, t, new THREE.Color()),
  };
}

export class SkySystem {
  readonly dome: THREE.Mesh;
  readonly sun: THREE.DirectionalLight;
  readonly moon: THREE.DirectionalLight;
  readonly hemi: THREE.HemisphereLight;
  readonly ambient: THREE.AmbientLight;
  readonly mist: THREE.Group;
  private rain: THREE.Points;
  private rainVel: Float32Array;
  private readonly uniforms: Record<string, THREE.IUniform>;
  weather: Weather = 'clear';
  seasonDeg = 18;
  night = 0;
  elevationDeg = 40;
  readonly fog = new THREE.FogExp2(new THREE.Color('#cfe0ee').getHex(), 0.0016);

  constructor(scene: THREE.Scene) {
    this.uniforms = {
      uZenith: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() },
      uSunCol: GU.uSunColor,
      uSunDir: GU.uSunDir,
      uGround: { value: new THREE.Color() },
      uNight: GU.uNight,
      uMist: { value: 0 },
      uCloud: { value: 0 },
      uTime: GU.uTime,
    };

    const domeMat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vDir;
        uniform vec3 uZenith, uHorizon, uSunCol, uSunDir, uGround;
        uniform float uNight, uMist, uCloud, uTime;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          float grad = pow(clamp(h + 0.03, 0.0, 1.0), 0.44);
          vec3 col = mix(uHorizon, uZenith, grad);
          col = mix(col, uGround, smoothstep(0.005, -0.12, h));

          float sd = dot(d, normalize(uSunDir));
          float disc = smoothstep(0.9988, 0.9996, sd);
          float halo = pow(max(sd, 0.0), 7.0) * 0.30 + pow(max(sd, 0.0), 60.0) * 0.22;
          float cover = 1.0 - uCloud * 0.85;
          col += uSunCol * (disc * 5.0 + halo) * mix(1.0, cover, 0.8);

          vec3 md = -normalize(uSunDir);
          float mdf = dot(d, md);
          col += vec3(0.82, 0.88, 1.0) * (smoothstep(0.9990, 0.9997, mdf) * 2.4 + pow(max(mdf, 0.0), 55.0) * 0.05) * uNight;

          float starField = step(0.99918, hash(floor(d * 520.0))) * uNight;
          float twinkle = 0.72 + 0.28 * sin(uTime * 2.4 + hash(floor(d * 520.0)) * 40.0);
          col += vec3(starField) * twinkle * smoothstep(0.02, 0.32, h) * (1.0 - uMist) * (1.0 - uCloud);

          float glow = exp(-abs(h) * 8.5) * uNight;
          col += vec3(0.30, 0.19, 0.11) * glow * 0.85;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    this.dome = new THREE.Mesh(new THREE.SphereGeometry(1500, 40, 24), domeMat);
    this.dome.frustumCulled = false;
    this.dome.renderOrder = -10;
    scene.add(this.dome);
    scene.fog = this.fog;

    this.sun = new THREE.DirectionalLight('#fff2d8', 2.6);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.near = 40;
    sc.far = 900;
    sc.left = -160;
    sc.right = 160;
    sc.top = 160;
    sc.bottom = -160;
    this.sun.shadow.bias = -0.0008;
    this.sun.shadow.normalBias = 0.7;
    scene.add(this.sun);
    scene.add(this.sun.target);

    this.moon = new THREE.DirectionalLight('#a9c1ff', 0.0);
    scene.add(this.moon);

    this.hemi = new THREE.HemisphereLight('#cfe0ee', '#4a5340', 0.6);
    scene.add(this.hemi);

    this.ambient = new THREE.AmbientLight('#ffffff', 0.18);
    scene.add(this.ambient);

    this.mist = new THREE.Group();
    const mistMat = new THREE.MeshBasicMaterial({
      color: '#dfe9f2',
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
      fog: false,
    });
    for (let i = 0; i < 4; i++) {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(900, 900, 1, 1), mistMat.clone());
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = 3 + i * 9;
      plane.renderOrder = 5;
      this.mist.add(plane);
    }
    scene.add(this.mist);

    const drops = 2600;
    const pos = new Float32Array(drops * 3);
    this.rainVel = new Float32Array(drops);
    for (let i = 0; i < drops; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 220;
      pos[i * 3 + 1] = Math.random() * 90;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 220;
      this.rainVel[i] = 55 + Math.random() * 45;
    }
    const rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.rain = new THREE.Points(
      rainGeo,
      new THREE.PointsMaterial({
        color: '#b9d3e8',
        size: 1.1,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    this.rain.frustumCulled = false;
    scene.add(this.rain);
  }

  setWeather(w: Weather) {
    this.weather = w;
  }

  /** 太阳真实位置：纬度固定成都，赤纬当季节参数；入参是北京时间钟点。 */
  private solarTime(clockHour: number) {
    const H = (clockHour + LONGITUDE_CORRECTION_H - 12) * 15 * DEG;
    const dec = this.seasonDeg * DEG;
    const elev = Math.asin(
      Math.sin(CITY_LAT) * Math.sin(dec) + Math.cos(CITY_LAT) * Math.cos(dec) * Math.cos(H),
    );
    let azim = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(CITY_LAT) - Math.tan(dec) * Math.cos(CITY_LAT));
    azim = azim / DEG;
    if (azim < 0) azim += 360;
    return { elevDeg: elev / DEG, azimDeg: azim };
  }

  update(hour: number, cameraPos: THREE.Vector3, dt: number) {
    const { elevDeg, azimDeg } = this.solarTime(hour);
    this.elevationDeg = elevDeg;
    const rad = elevDeg * DEG;
    const az = (azimDeg + 180) * DEG;
    const dir = new THREE.Vector3(Math.sin(az) * Math.cos(rad), Math.sin(rad), -Math.cos(az) * Math.cos(rad)).normalize();
    GU.uSunDir.value.copy(dir);

    const p = palette(elevDeg);
    (this.uniforms.uZenith.value as THREE.Color).copy(p.zenith);
    (this.uniforms.uHorizon.value as THREE.Color).copy(p.horizon);
    (this.uniforms.uGround.value as THREE.Color).copy(p.ground);
    GU.uSkyZenith.value.copy(p.zenith);
    GU.uSkyHorizon.value.copy(p.horizon);
    GU.uGroundColor.value.copy(p.ground);
    GU.uSunColor.value.copy(p.sun);

    // 亮灯不是日落后才一次性开始：太阳落到 6° 以上就逐步接管，
    // 日落那一刻（+2°）路灯与窗光已经点亮约三分之一，黄昏画面才有「华灯初上」。
    const nightTarget = THREE.MathUtils.clamp((6 - elevDeg) / 12, 0, 1);
    this.night += (nightTarget - this.night) * Math.min(1, dt * 4);
    GU.uNight.value = this.night;

    const wMist = this.weather === 'mist' ? 0.75 : this.weather === 'rain' ? 0.35 : 0.12;
    const wCloud = this.weather === 'rain' ? 0.75 : this.weather === 'snow' ? 0.6 : this.weather === 'mist' ? 0.35 : 0.06;
    const wRain = this.weather === 'rain' ? 1 : 0;
    GU.uMist.value += (wMist - GU.uMist.value) * Math.min(1, dt * 2);
    GU.uRain.value += (wRain - GU.uRain.value) * Math.min(1, dt * 2);
    (this.uniforms.uMist as THREE.IUniform).value = GU.uMist.value;
    (this.uniforms.uCloud as THREE.IUniform).value = wCloud;

    const dayFactor = THREE.MathUtils.clamp(Math.sin(Math.max(rad, 0)) + 0.06, 0, 1);
    // 正午太阳压到 2.55：再高就把农田和屋顶一起推进 ACES 的高光肩区，
    // 整张图发白、失去成都平原该有的饱和度。
    const sunI = Math.pow(THREE.MathUtils.clamp(elevDeg / 22, 0, 1), 0.72) * 2.55 * (1 - wCloud * 0.72);
    this.sun.intensity = Math.max(0, sunI);
    this.sun.color.copy(p.sun);
    this.sun.position.copy(dir).multiplyScalar(420).add(cameraPos);
    this.sun.target.position.copy(cameraPos);
    this.sun.target.updateMatrixWorld();

    this.moon.intensity = this.night * 0.22 * (1 - wCloud * 0.6);
    this.moon.position.copy(dir).multiplyScalar(-420).add(cameraPos);

    this.hemi.color.copy(p.horizon);
    this.hemi.groundColor.copy(p.ground);
    // 夜里的地面亮度交给街区底板自己的光污染自发光，环境光只留薄薄一层：
    // 环境光抬得越高，夜景越像「白天关了灯」——农田和建成区一样亮，城乡边界就没了。
    // 白天同样要压：半球光的地面分量是植被反射的橄榄绿，抬高了整座城市会蒙成一张薄荷色纸板。
    this.hemi.intensity = 0.22 + dayFactor * 0.34 + this.night * 0.07;
    this.ambient.intensity = 0.06 + this.night * 0.1 + dayFactor * 0.06;
    // 夜间环境光偏暖：高层散射的是城市钠灯，不是月光。
    this.ambient.color.copy(p.horizon).lerp(new THREE.Color('#3a2c22'), this.night * 0.6);

    GU.uSunI.value = dayFactor;

    // 晴天只留薄雾，龙门山的雪线轮廓必须读得出来（「窗含西岭千秋雪」是成都的识别点）。
    const fogBase = 0.00038 + wMist * 0.0026 + wCloud * 0.0004 + this.night * 0.0002;
    // 雾色取天顶与地平线之间的偏冷中调：黄昏整片地面不该被涂成橘色，
    // 暖色只应留在天际线那一条带上。
    this.fog.color.copy(p.zenith).lerp(p.horizon, 0.42).lerp(new THREE.Color('#141a26'), this.night * 0.5);
    this.fog.density += (fogBase - this.fog.density) * Math.min(1, dt * 3);
    GU.uFogColor.value.copy(this.fog.color);
    GU.uFogDensity.value = this.fog.density;

    this.dome.position.copy(cameraPos);

    for (const child of this.mist.children as THREE.Mesh[]) {
      const mat = child.material as THREE.MeshBasicMaterial;
      const want = THREE.MathUtils.clamp(wMist - 0.1, 0, 0.7) * (1 - this.night * 0.45);
      mat.opacity += (want * 0.32 - mat.opacity) * Math.min(1, dt * 1.6);
      child.position.x = cameraPos.x;
      child.position.z = cameraPos.z;
      child.rotation.z += dt * 0.01;
    }

    const rainMat = this.rain.material as THREE.PointsMaterial;
    rainMat.opacity += (wRain * 0.55 - rainMat.opacity) * Math.min(1, dt * 2);
    if (rainMat.opacity > 0.01) {
      const arr = this.rain.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < arr.count; i++) {
        let y = arr.getY(i) - this.rainVel[i] * dt;
        if (y < -2) y = 92;
        arr.setY(i, y);
      }
      arr.needsUpdate = true;
      this.rain.position.set(cameraPos.x, cameraPos.y - 40, cameraPos.z);
    }
  }
}
