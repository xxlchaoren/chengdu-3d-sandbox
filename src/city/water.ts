import * as THREE from 'three';
import { GU } from '../core/uniforms.ts';
import { LAKE_SHAPES, RIVER_PATHS, followTerrain } from './paths.ts';
import { makeRibbon } from './ribbon.ts';
import { unit } from './matkit.ts';
import { groundHeight } from './terrain.ts';

/**
 * 水系：府河／锦江／沙河等城内河道 + 湖泊。
 *
 * 成都因水而成市——二江相抱、三都路因河而兴，所以河面用流动法线 + 夜里倒映岸上灯，
 * 让「两江抱城」的格局在夜间卫星视角下也读得出来。
 */

export interface WaterLayer {
  group: THREE.Group;
  dispose(): void;
}

const waterGlsl = /* glsl */ `
  uniform float uTime;
  uniform float uNight;
  uniform float uRain;
  varying vec2 vUvW;

  float cdH(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float cdN(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(cdH(i), cdH(i + vec2(1.0, 0.0)), f.x), mix(cdH(i + vec2(0.0, 1.0)), cdH(i + vec2(1.0, 1.0)), f.x), f.y);
  }
`;

function riverMaterial(depth: number): THREE.MeshStandardMaterial {
  // 锦江及其支流是含沙量高的城郊河道，俯看偏浊绿；
  // 金属感一强就会映成一片天蓝，读起来像高速公路。
  const mat = new THREE.MeshStandardMaterial({
    color: depth > 40 ? '#42594c' : '#4f6149',
    roughness: 0.42,
    metalness: 0.12,
  });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = GU.uTime;
    shader.uniforms.uNight = GU.uNight;
    shader.uniforms.uRain = GU.uRain;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vUvW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n vUvW = uv;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${waterGlsl}`)
      .replace(
        '#include <normal_fragment_begin>',
        `#include <normal_fragment_begin>
         float flow = vUvW.y * 90.0 - uTime * 0.55;
         float n1 = cdN(vec2(vUvW.x * 7.0, flow));
         float n2 = cdN(vec2(vUvW.x * 21.0 + 4.0, flow * 1.7));
         float chop = (n1 * 0.65 + n2 * 0.35);
         normal = normalize(normal + vec3((chop - 0.5) * 0.55, 0.0, (n2 - 0.5) * 0.35));
         float ripple = uRain * cdN(vec2(vUvW.x * 40.0 + uTime * 2.0, vUvW.y * 400.0 - uTime * 3.0));
         normal = normalize(normal + vec3(ripple * 0.5));`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         float glimmer = pow(max(0.0, n2 - 0.45) * 2.0, 2.0);
         totalEmissiveRadiance += vec3(0.55, 0.72, 0.9) * glimmer * 0.06;
         totalEmissiveRadiance += vec3(1.0, 0.72, 0.36) * uNight * smoothstep(0.35, 0.95, n1) * 0.16;`,
      );
  };
  mat.customProgramCacheKey = () => 'cd-river';
  return mat;
}

function lakeMaterial(): THREE.MeshStandardMaterial {
  const mat = new THREE.MeshStandardMaterial({ color: '#3f5a52', roughness: 0.3, metalness: 0.16 });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = GU.uTime;
    shader.uniforms.uNight = GU.uNight;
    shader.uniforms.uRain = GU.uRain;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vUvW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n vUvW = uv;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${waterGlsl}`)
      .replace(
        '#include <normal_fragment_begin>',
        `#include <normal_fragment_begin>
         float w = cdN(vUvW * 60.0 + vec2(uTime * 0.08, uTime * 0.05));
         float w2 = cdN(vUvW * 240.0 - vec2(uTime * 0.12, 0.0));
         normal = normalize(normal + vec3((w - 0.5) * 0.3 + uRain * (w2 - 0.5) * 0.8, 0.0, (w2 - 0.5) * 0.25));`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         totalEmissiveRadiance += vec3(0.4, 0.6, 0.8) * uNight * pow(max(w - 0.5, 0.0), 2.0) * 0.5;`,
      );
  };
  mat.customProgramCacheKey = () => 'cd-lake';
  return mat;
}

export function buildWater(scene: THREE.Scene): WaterLayer {
  const group = new THREE.Group();
  group.name = 'water';
  const owned: Array<{ dispose(): void }> = [];

  const riverMat = riverMaterial(50);
  const smallMat = riverMaterial(24);
  owned.push(riverMat, smallMat);

  for (const path of RIVER_PATHS) {
    if (!path.pts.length) continue;
    const widthUnits = unit(path.widthM ?? 30);
    // 河面略微下切，避免与地面共面闪屏；丰水期（雨）时水面抬高一点。
    const geo = makeRibbon(path.pts, {
      widthAt: () => widthUnits,
      yAt: followTerrain(path, -0.012),
      closed: false,
      uvScale: 1,
    });
    const mesh = new THREE.Mesh(geo, (path.widthM ?? 30) >= 40 ? riverMat : smallMat);
    mesh.receiveShadow = true;
    mesh.name = `river-${path.name}`;
    group.add(mesh);
    owned.push(geo);
  }

  const lakeMat = lakeMaterial();
  owned.push(lakeMat);
  for (const lake of LAKE_SHAPES) {
    // 三角扇：中心 + 轮廓，顶点 y 贴自然地面，山区湖（三岔湖、鲁家滩）才不会被丘陵切掉。
    const ring = lake.ring;
    const steps = ring.length - 1;
    const count = steps + 1;
    const pos = new Float32Array(count * 3);
    const uv = new Float32Array(count * 2);
    const idx: number[] = [];
    const cx = lake.center.x;
    const cz = lake.center.z;
    pos[0] = cx;
    pos[1] = groundHeight(cx, cz) - 0.014;
    pos[2] = cz;
    uv[0] = 0.5;
    uv[1] = 0.5;
    for (let i = 0; i < steps; i++) {
      const p = ring[i];
      pos[i * 3 + 3] = p.x;
      pos[i * 3 + 4] = groundHeight(p.x, p.z) - 0.014;
      pos[i * 3 + 5] = p.z;
      uv[i * 2 + 2] = 0.5 + (p.x - cx) / (2 * lake.a);
      uv[i * 2 + 3] = 0.5 + (p.z - cz) / (2 * lake.b);
      // 环上点按 (x=cos, z=sin) 逆时针排列，反序才能让人朝 +Y。
      idx.push(0, i === steps - 1 ? 1 : i + 2, i + 1);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, lakeMat);
    mesh.receiveShadow = true;
    mesh.name = `lake-${lake.name}`;
    group.add(mesh);
    owned.push(geo);
  }

  scene.add(group);
  return {
    group,
    dispose() {
      scene.remove(group);
      for (const o of owned) o.dispose();
    },
  };
}
