import * as THREE from 'three';
import type { Planar } from '../geo/project.ts';
import { groundHeight } from './terrain.ts';

/**
 * 场景摆放约定：1 场景单位 = 100m，正北为 -Z，正东为 +X。
 * 地标一律在「米制局部空间」里建模，再由 landmarkRoot 放进世界，
 * 这样几何尺寸可读（218 就是 218m），不必到处乘 0.01。
 */

export function groundY(x: number, z: number): number {
  return groundHeight(x, z);
}

/** 返回一个把子节点按米制解释的组，已经落在自然地面上。 */
export function landmarkRoot(p: Planar, liftM = 0): THREE.Group {
  const g = new THREE.Group();
  g.position.set(p.x, groundY(p.x, p.z) + liftM / 100, p.z);
  g.scale.setScalar(0.01);
  return g;
}

/** 方位角（正北 0°，顺时针）→ 绕 Y 的旋转，使模型的 +Z 面向该方位。 */
export function bearingToRotY(bearingDeg: number): number {
  return (bearingDeg * Math.PI) / 180;
}

/** 让地标朝向来路（从城市中心看过去的方向），减少「全都朝北」的塑料感。 */
export function faceCenter(p: Planar): number {
  return Math.atan2(-p.x, p.z);
}
