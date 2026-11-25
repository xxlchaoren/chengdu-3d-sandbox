import * as THREE from 'three';

export const GU = {
  uTime: { value: 0 },
  uNight: { value: 0 },
  uSunI: { value: 0 },
  uSunDir: { value: new THREE.Vector3(0, 1, 0) },
  uSunColor: { value: new THREE.Color('#ffdca8') },
  uSkyZenith: { value: new THREE.Color('#3f7fc4') },
  uSkyHorizon: { value: new THREE.Color('#cfe0ee') },
  uGroundColor: { value: new THREE.Color('#3c4436') },
  uFogColor: { value: new THREE.Color('#cfe0ee') },
  uFogDensity: { value: 0.0016 },
  uRain: { value: 0 },
  uMist: { value: 0 },
  uBloom: { value: 0.35 },
  /** 圈层对比：-1 表示不高亮；0—5 对应 bandOf 的分区下标。 */
  uBandSel: { value: -1 },
  /** 夜景亮窗比例的整体倍率（不同立面种类仍各有基准值）。 */
  uLitGain: { value: 1.1 },
};
