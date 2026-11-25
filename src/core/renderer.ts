import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { polar, UNIT_PER_KM, type Planar } from '../geo/project.ts';
import { GU } from './uniforms.ts';

export type ViewMode = 'sandbox' | 'panorama' | 'map';
export type Quality = 'high' | 'medium' | 'low';

export interface ViewPreset {
  distance: number;
  polarDeg: number;
  fov: number;
}

export const VIEW_PRESETS: Record<ViewMode, ViewPreset> = {
  sandbox: { distance: 340, polarDeg: 52, fov: 21 },
  panorama: { distance: 70, polarDeg: 81, fov: 52 },
  map: { distance: 470, polarDeg: 3, fov: 11 },
};

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

interface Tween {
  t: number;
  dur: number;
  fromPos: THREE.Vector3;
  toPos: THREE.Vector3;
  fromTarget: THREE.Vector3;
  toTarget: THREE.Vector3;
  fromFov: number;
  toFov: number;
}

export class Stage {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly controls: OrbitControls;
  readonly composer: EffectComposer;
  readonly bloom: UnrealBloomPass;
  sunLight: THREE.DirectionalLight | null = null;
  mode: ViewMode = 'sandbox';
  quality: Quality = 'high';
  private tween: Tween | null = null;
  private readonly tmpVec = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.info.autoReset = false;

    this.camera = new THREE.PerspectiveCamera(VIEW_PRESETS.sandbox.fov, 1, 0.6, 2600);
    this.camera.position.set(180, 250, -230);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.075;
    this.controls.target.set(0, 6, 30);
    this.controls.maxPolarAngle = 89.5 * THREE.MathUtils.DEG2RAD;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 950;
    this.controls.zoomSpeed = 0.9;
    this.controls.rotateSpeed = 0.62;
    this.controls.panSpeed = 0.85;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.45, 0.7, 0.8);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.applyMode('sandbox', true);
    this.resize();
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cap = this.quality === 'high' ? 2 : this.quality === 'medium' ? 1.5 : 1;
    const dpr = Math.min(window.devicePixelRatio || 1, cap);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  setQuality(q: Quality) {
    this.quality = q;
    this.renderer.shadowMap.enabled = q !== 'low';
    this.bloom.enabled = q !== 'low';
    if (this.sunLight) {
      const size = q === 'high' ? 2048 : 1024;
      if (this.sunLight.shadow.mapSize.width !== size) {
        this.sunLight.shadow.mapSize.set(size, size);
        this.sunLight.shadow.map?.dispose();
        this.sunLight.shadow.map = null;
      }
    }
    this.resize();
  }

  applyMode(mode: ViewMode, instant = false) {
    this.mode = mode;
    const preset = VIEW_PRESETS[mode];
    const target = this.controls.target.clone();
    const sph = new THREE.Spherical().setFromVector3(this.camera.position.clone().sub(target));
    sph.radius = preset.distance;
    sph.phi = THREE.MathUtils.clamp(preset.polarDeg * THREE.MathUtils.DEG2RAD, 0.02, Math.PI / 2 - 0.01);
    const pos = target.clone().add(new THREE.Vector3().setFromSpherical(sph));
    if (instant) {
      this.camera.position.copy(pos);
      this.camera.fov = preset.fov;
      this.camera.updateProjectionMatrix();
    } else {
      this.startTween(pos, target, preset.fov, 0.9);
    }
  }

  /** 飞到某个平面坐标上方，默认顺着城市放射方向接近，让中轴与环线在画面里可读。 */
  focusPlanar(p: Planar, radiusKm: number, lift = 0.5) {
    const preset = VIEW_PRESETS[this.mode];
    const distance = Math.max(10, Math.min(radiusKm * 10, this.mode === 'panorama' ? 120 : 520));
    const target = new THREE.Vector3(p.x, Math.min(16, distance * 0.1), p.z);
    const bearingOut = (Math.atan2(p.x, -p.z) * 180) / Math.PI;
    // polar() 收的是公里，distance 已经是场景单位（1 单位 = 100 m），这里必须换算回去。
    const off = polar(distance / UNIT_PER_KM, bearingOut + 210);
    const pos = new THREE.Vector3(p.x + off.x, distance * lift + 6, p.z + off.z);
    this.startTween(pos, target, preset.fov, 1.3);
  }

  resetView() {
    this.applyMode(this.mode);
  }

  private startTween(toPos: THREE.Vector3, toTarget: THREE.Vector3, toFov: number, dur: number) {
    this.tween = {
      t: 0,
      dur,
      fromPos: this.camera.position.clone(),
      toPos,
      fromTarget: this.controls.target.clone(),
      toTarget,
      fromFov: this.camera.fov,
      toFov,
    };
  }

  update(dt: number) {
    if (this.tween) {
      const tw = this.tween;
      tw.t = Math.min(1, tw.t + dt / tw.dur);
      const e = easeInOutCubic(tw.t);
      this.camera.position.lerpVectors(tw.fromPos, tw.toPos, e);
      this.controls.target.lerpVectors(tw.fromTarget, tw.toTarget, e);
      const fov = tw.fromFov + (tw.toFov - tw.fromFov) * e;
      if (Math.abs(this.camera.fov - fov) > 0.001) {
        this.camera.fov = fov;
        this.camera.updateProjectionMatrix();
      }
      if (tw.t >= 1) this.tween = null;
    }
    this.controls.update();

    if (this.sunLight) {
      const t = this.controls.target;
      this.sunLight.target.position.copy(t);
      const span = THREE.MathUtils.clamp(this.camera.position.distanceTo(t) * 0.7, 60, 380);
      const cam = this.sunLight.shadow.camera;
      if (Math.abs(cam.left + span) > 1) {
        cam.left = -span;
        cam.right = span;
        cam.top = span;
        cam.bottom = -span;
        cam.updateProjectionMatrix();
      }
    }

    const base = this.quality === 'low' ? 0 : this.quality === 'high' ? 0.3 : 0.24;
    const boost = this.quality === 'high' ? 0.62 : 0.44;
    this.bloom.strength = base + GU.uNight.value * boost;
  }

  render() {
    // composer 的每个 pass 都写同一份 renderer.info：自动重置时最后只剩一个
    // 全屏四边形，HUD 就永远显示「1 三角面」。按帧清零并关闭自动重置，
    // 统计才覆盖整帧真实开销（含阴影 pass）。
    this.renderer.info.reset();
    this.composer.render();
  }

  projectToScreen(v: THREE.Vector3): { x: number; y: number; visible: boolean } {
    this.tmpVec.copy(v).project(this.camera);
    return {
      x: (this.tmpVec.x * 0.5 + 0.5) * window.innerWidth,
      y: (-this.tmpVec.y * 0.5 + 0.5) * window.innerHeight,
      visible: this.tmpVec.z < 1 && Math.abs(this.tmpVec.x) < 1.05 && Math.abs(this.tmpVec.y) < 1.05,
    };
  }
}
