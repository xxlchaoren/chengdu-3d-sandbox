import * as THREE from 'three';
import { GU } from '../core/uniforms.ts';

/**
 * 材质工具箱。
 *
 * 建筑立面共用同一段「窗格」着色逻辑：海量建筑走 InstancedMesh（尺寸来自实例属性 aDim/aWin），
 * 手工地标走单体 Mesh（尺寸来自 uniform uDim/uWin，米制几何体）。
 * 两条路径的昼夜、雾、亮窗比例完全一致，地标不会与周边建筑脱节。
 */

export const M_PER_UNIT = 100;

export const unit = (meters: number) => meters / M_PER_UNIT;
export const meters = (value: number) => value * M_PER_UNIT;

export const PAL = {
  plasterWarm: '#d8cfc0',
  plasterCool: '#c7cbd0',
  concrete: '#a9a6a0',
  brick: '#a8705a',
  oldRoof: '#4a4a52',
  glassDay: '#8fa6b8',
  glassCool: '#5c7f95',
  metal: '#8b9298',
  stone: '#b5ad9e',
  wood: '#8a6a45',
  roofSlab: '#6d6f6b',
  white: '#eae7e1',
  red: '#b23a2e',
  gold: '#c8a15a',
  green: '#3f6b4a',
};

const VARYINGS = /* glsl */ `
  varying vec3 vMeters;
  varying vec3 vFace;
  varying vec4 vDim;
  varying vec4 vWin;
  varying float vBand;
`;

/** 只有顶点着色器能声明 attribute；片元侧靠 varying 取尺寸。 */
const DECL_VERT = /* glsl */ `
  #ifdef CD_INSTANCED
    attribute vec4 aDim;
    attribute vec4 aWin;
    attribute float aBand;
  #else
    uniform vec4 uDim;
    uniform vec4 uWin;
  #endif
  ${VARYINGS}
`;

/** 实例化路径：几何是单位立方体，尺寸在 aDim 里；单体路径：几何本身是米制。 */
const WINDOW_VERT = /* glsl */ `
  #ifdef CD_INSTANCED
    vMeters = position * aDim.xyz;
    vDim = aDim;
    vWin = aWin;
    vBand = aBand;
  #else
    vMeters = position;
    vDim = uDim;
    vWin = uWin;
    // 地标不参与圈层对比的压暗，始终作为可读的参照物。
    vBand = -2.0;
  #endif
  vFace = normal;
`;

/**
 * 立面窗格：楼层高 3.2—4.6m、开间 3.1—6.2m，按体量尺寸推格数。
 * 结果写进三个全局量，diffuse 与 emissive 两处注入点共用（每像素只算一次）。
 */
const WINDOW_FRAG = /* glsl */ `
  uniform float uBandSel;
  uniform float uLitGain;
  vec3 cdDiffuse;
  vec3 cdEmissive;
  float cdEmissiveStrength;

  float cdHash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void cdFacade(vec3 baseColor, float time, float night, float rain, float litRatio, vec3 glassTint) {
    vec3 an = abs(vFace);
    float isWall = step(an.y, 0.5);
    float alongX = step(0.5, an.x);
    float span = mix(vMeters.z, vMeters.x, alongX);
    float width = max(mix(vDim.z, vDim.x, alongX), 0.001);
    float height = max(vDim.y, 0.001);
    float kind = vWin.z;

    float floorH = kind < 0.5 ? 3.2 : (kind < 1.5 ? 3.9 : (kind < 2.5 ? 3.4 : 4.6));
    float bayW = kind < 0.5 ? 3.6 : (kind < 1.5 ? 3.1 : (kind < 2.5 ? 4.4 : 6.2));
    float floors = max(1.0, height / floorH);
    float bays = max(1.0, width / bayW);

    vec2 cell = vec2((span / width) * bays, (vMeters.y / height + 0.5) * floors);
    vec2 fid = floor(cell);
    vec2 f = fract(cell);

    float edge = smoothstep(0.0, 0.1, f.x) * smoothstep(1.0, 0.9, f.x) * smoothstep(0.0, 0.16, f.y) * smoothstep(1.0, 0.82, f.y);
    float glass = isWall * smoothstep(0.3, 0.7, edge);
    if (kind > 2.5) {
      // 工业厂房：只有顶层一排高窗。
      glass *= step(floors - 1.8, fid.y) * 0.85;
    }
    float balcony = isWall * (1.0 - step(0.5, kind)) * smoothstep(0.0, 0.18, f.y) * smoothstep(0.95, 0.72, f.y);

    float seed = vWin.y * 91.7 + floor(width * 10.0);
    float r = cdHash21(fid + vec2(seed, kind * 13.0));
    float r2 = cdHash21(fid * 1.7 + vec2(seed + 5.0, 3.0));
    float lit = clamp(litRatio * uLitGain, 0.0, 1.0);
    float on = step(1.0 - lit * (0.5 + 0.5 * r), r2);
    float flicker = 0.85 + 0.15 * sin(time * 0.5 + r * 62.0);

    vec3 wall = baseColor * (0.8 + 0.32 * r2);
    vec3 glassCol = mix(baseColor * 0.42, glassTint, 0.7);
    cdDiffuse = mix(wall, glassCol, glass) * (1.0 - balcony * 0.22);

    vec3 warm = vec3(1.0, 0.76, 0.44);
    vec3 cool = vec3(0.62, 0.8, 1.0);
    cdEmissive = mix(warm, cool, step(0.66, r));
    cdEmissiveStrength = glass * on * flicker * night * (1.0 - rain * 0.2) * mix(0.5, 1.0, step(0.5, kind));

    // 圈层对比：把不属于选中分区的建筑压成灰底，选中圈层的天际线一眼可读。
    if (uBandSel >= 0.0 && vBand > -1.5 && abs(vBand - uBandSel) > 0.5) {
      float g = dot(cdDiffuse, vec3(0.33333)) * 0.38;
      cdDiffuse = vec3(g);
      cdEmissiveStrength *= 0.05;
    }
  }
`;

export type FacadeKind = 0 | 1 | 2 | 3;

export interface FacadeOpts {
  /** 立面基色。 */
  base: string;
  /** 夜间亮窗比例 0—1。 */
  litRatio?: number;
  glassTint?: string;
  /** 0 住宅（阳台）／1 办公幕墙／2 商业裙房／3 工业厂房。 */
  kind?: FacadeKind;
  roughness?: number;
  metalness?: number;
}

function createFacade(params: FacadeOpts, instanced: boolean, dim?: THREE.Vector4, win?: THREE.Vector4) {
  const litRatio = params.litRatio ?? 0.5;
  const kind = params.kind ?? 0;
  const glassTint = new THREE.Color(params.glassTint ?? PAL.glassDay);
  const mat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(params.base),
    roughness: params.roughness ?? 0.72,
    metalness: params.metalness ?? 0.05,
  });
  // @types/three 只在 ShaderMaterial 上声明了 defines，但运行时 WebGLPrograms 对所有材质都读它。
  if (instanced) (mat as unknown as { defines: Record<string, string> }).defines = { CD_INSTANCED: '' };

  // 单体路径把 uniform 对象建在闭包里，地标组装时可随时改写尺寸，不必等编译。
  const uDim = dim ?? new THREE.Vector4(20, 60, 20, 0);
  const uWin = win ?? new THREE.Vector4(0, kind, kind, 0);

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = GU.uTime;
    shader.uniforms.uNight = GU.uNight;
    shader.uniforms.uRain = GU.uRain;
    shader.uniforms.uBandSel = GU.uBandSel;
    shader.uniforms.uLitGain = GU.uLitGain;
    shader.uniforms.uLitRatio = { value: litRatio };
    shader.uniforms.uGlassTint = { value: glassTint };
    if (!instanced) {
      shader.uniforms.uDim = { value: uDim };
      shader.uniforms.uWin = { value: uWin };
    }
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${DECL_VERT}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>\n${WINDOW_VERT}`);
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>\nuniform float uTime;\nuniform float uNight;\nuniform float uRain;\nuniform float uLitRatio;\nuniform vec3 uGlassTint;\n${VARYINGS}\n${WINDOW_FRAG}`,
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>\n  cdFacade(diffuseColor.rgb, uTime, uNight, uRain, uLitRatio, uGlassTint);\n  diffuseColor.rgb = cdDiffuse;`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>\n  totalEmissiveRadiance += cdEmissive * cdEmissiveStrength;`,
      );
  };
  mat.customProgramCacheKey = () => `cd-facade-${instanced ? 'i' : 's'}-${kind}-${glassTint.getHexString()}-${(litRatio * 100) | 0}`;
  if (!instanced) {
    mat.userData.dim = uDim;
    mat.userData.win = uWin;
  }
  return mat;
}

/**
 * 单体立面材质（地标用）。返回的 mat.userData.dim 是可改写的 Vector4(w,h,d,0)：
 * 用 facadeBox() 生成盒子时会自动写入，手写几何体时可自己 set。
 */
export function facadeMaterial(params: FacadeOpts & { dims?: [number, number, number] }): THREE.MeshStandardMaterial {
  const dim = params.dims ? new THREE.Vector4(params.dims[0], params.dims[1], params.dims[2], 0) : undefined;
  return createFacade(params, false, dim);
}

/** 海量建筑用的实例化立面材质；配合 dimAttribute / winAttribute 使用。 */
export function instancedFacadeMaterial(params: FacadeOpts): THREE.MeshStandardMaterial {
  return createFacade(params, true);
}

/**
 * 米制盒子（地标用）。返回的 Mesh 处于「米制局部空间」，
 * 放进 landmarkRoot() 建的组里即可（组缩放 0.01 换算到场景单位）。
 */
export function facadeBox(
  w: number,
  h: number,
  d: number,
  params: FacadeOpts,
  opts: { y?: number; x?: number; z?: number; rotY?: number; castShadow?: boolean } = {},
): THREE.Mesh {
  const geo = new THREE.BoxGeometry(w, h, d);
  const mat = facadeMaterial({ ...params, dims: [w, h, d] });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(opts.x ?? 0, (opts.y ?? h / 2), opts.z ?? 0);
  mesh.rotation.y = opts.rotY ?? 0;
  mesh.castShadow = opts.castShadow ?? true;
  mesh.receiveShadow = true;
  return mesh;
}

/** 米制盒子 + 普通材质（裙房、基座、屋顶设备、构筑物）。 */
export function box(
  w: number,
  h: number,
  d: number,
  mat: THREE.Material,
  opts: { x?: number; y?: number; z?: number; rotY?: number; shadow?: boolean } = {},
): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(opts.x ?? 0, opts.y ?? h / 2, opts.z ?? 0);
  mesh.rotation.y = opts.rotY ?? 0;
  mesh.castShadow = opts.shadow ?? true;
  mesh.receiveShadow = true;
  return mesh;
}

export function cylinder(
  rTop: number,
  rBottom: number,
  h: number,
  seg: number,
  mat: THREE.Material,
  opts: { x?: number; y?: number; z?: number; shadow?: boolean } = {},
): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, Math.max(3, seg)), mat);
  mesh.position.set(opts.x ?? 0, opts.y ?? h / 2, opts.z ?? 0);
  mesh.castShadow = opts.shadow ?? true;
  mesh.receiveShadow = true;
  return mesh;
}

function instancedAttr(arr: Float32Array, size: number): THREE.InstancedBufferAttribute {
  const attr = new THREE.InstancedBufferAttribute(arr, size);
  attr.setUsage(THREE.DynamicDrawUsage);
  return attr;
}

export function dimAttribute(dims: Float32Array): THREE.InstancedBufferAttribute {
  return instancedAttr(dims, 4);
}

export function winAttribute(wins: Float32Array): THREE.InstancedBufferAttribute {
  return instancedAttr(wins, 4);
}

/** 逐实例的单个浮点属性（aBand、aUrban 这类）。 */
export function instanceFloatAttribute(values: Float32Array): THREE.InstancedBufferAttribute {
  return instancedAttr(values, 1);
}

/** aBand：每栋楼所属圈层分区下标，供「圈层对比」压暗用。 */
export function bandAttribute(bands: Float32Array): THREE.InstancedBufferAttribute {
  return instanceFloatAttribute(bands);
}

const paintCache = new Map<string, THREE.MeshStandardMaterial>();

/** 无窗格的普通材质（屋顶、石材、金属、绿化等），按颜色缓存。 */
export function paint(hex: string, roughness = 0.85, metalness = 0): THREE.MeshStandardMaterial {
  const key = `${hex}|${roughness}|${metalness}`;
  const hit = paintCache.get(key);
  if (hit) return hit;
  const mat = new THREE.MeshStandardMaterial({ color: hex, roughness, metalness });
  paintCache.set(key, mat);
  return mat;
}

/** 夜景自发光材质（灯箱、灯带、体育场照明、塔冠）。 */
export function emissive(hex: string, intensity = 1): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: hex,
    emissive: hex,
    emissiveIntensity: intensity,
    roughness: 0.6,
    metalness: 0,
  });
}

export const NIGHT_GLOW = '#ffcf8a';
