# 调研参考 · References

写提示词之前先做的功课：看别人做的 3D 城市沙盘/程序化城市，把它们的**共同优点**变成验收标准，把**共同通病**变成明确禁令。下列条目均为本项目实际参考过的来源。

## 一、性能与实例化（本项目 760 draw call / 230 万三角面的做法来源）

- [Procedural City Generation in Three.js — Grokipedia](https://grokipedia.com/page/Procedural_City_Generation_in_Threejs) — 系统性梳理"浏览器里数千到上万栋建筑"的核心矛盾：per-object 渲染导致 draw call 暴涨，`InstancedMesh` 是事实标准。**采用**：全部重复体量走实例化，材质逻辑集中在 shader 里而不是逐对象。
- [CodeCity: git repos as drivable 3D cities — InstancedMesh, baked shadows, synthesized engine (r/threejs)](https://www.reddit.com/r/threejs/comments/1v2lah7/codecity_git_repos_as_drivable_3d_cities/) — 两点直接抄了：① 城市体与街区底板 always `InstancedMesh`；② **窗户发光用两套实例材质（hot/cold）而不是 per-instance emissive**。同时印证"几何先离线烘焙、渲染器只读结果"的思路。**未采用**：baked shadow map——本沙盘的城市会随图层开关变化，改走法线/AO 近似。
- [AFK City: a city that builds itself while you watch (three.js r186, runs on phones)](https://discourse.threejs.org/t/afk-city-a-city-that-builds-itself-while-you-watch-three-js-r186-runs-on-phones/96910) — `BatchedMesh` 装建筑、`InstancedMesh` 装道具/车流/树；**代理盒**画阴影与水面反射；**从手机到桌面的品质分档**。**采用**：`quality: high/medium/low` 三档与低档裁剪策略（本项目的 `TIER_LIMIT` 与格网密度分档同源）。
- [Three.js高性能可视化实战：从基础架构到百万级物体渲染（腾讯云）](https://cloud.tencent.com/developer/article/2733178) — 10 万栋 `BoxGeometry` 实例 + `instanceColor` + `DynamicDrawUsage` 的完整范式。**采用**：实例色承载建筑色调差异，避免材质爆炸。
- [Three.js 进阶：深入渲染管线与性能优化实战（腾讯云）](https://cloud.tencent.com/developer/article/2731631) — 城市街区场景的优化组合拳：实例化 + `Points` 车流 + 单方向光阴影 + **单个 `UnrealBloomPass` 且调低强度、不叠多余 Pass**。**采用**：本项目的后处理链就是一条 Bloom + Output，没有多重泛光。
- [Three.js建筑白模可视化：从原理到海量渲染实战](https://m.blog.csdn.net/tomfish88/article/details/83766990) — 白模批量生成的入门路径，确认"体块 + 材质差异"足以支撑沙盘尺度。

## 二、分层架构与工程组织

- [Three.js智慧城市源码解读：从场景分层到几何体合并](https://m.blog.csdn.net/weixin_29197835/article/details/164792389) — "先解决数据分层，再加载模型"的组织方式：地形/路网/建筑/水体/标注各成一组，交互对象单独保留。**采用**：`src/city/*` 一图层一模块 + `LAYER_KEYS` 九个可独立显隐的图层，正是这条思路的落地。
- [智慧城市3D可视化大屏实战：Three.js从数据到交互全流程](https://bbs.csdn.net/weixin_29290963/article/details/100560623) — 有价值的实测数据：4000 栋独立材质建筑帧率掉到 20 以下，改实例化后 draw call 只 +1；以及**折中方案——普通建筑实例化、可点击对象保留独立 mesh**。**采用**：本项目地标（47 处 POI）用独立 mesh 保证拾取与信息卡，三万栋普通建筑全部实例化。也采纳其避坑清单：`controls.maxPolarAngle` 防穿地、Raycaster 坐标要按渲染器实际尺寸换算。
- [GitHub贡献3D可视化：用 Next.js 与 Three.js 构建像素城市](https://blog.csdn.net/weixin_42533910/article/details/160749342) — 三级 LOD 与"远景合并成大几何体、近景才出窗格细节"的分层细节策略。**部分采用**：本项目按格网 tier 与环带裁剪做 LOD，但不做网格合并（实例化已够）。
- [Claude 生成 3D 智慧城市的技术要素梳理](https://view.inews.qq.com/a/LNK2026101216851800/) — 清单很准：`UnrealBloom` 昼夜各一套强度与阈值、实例化车流、手写 GLSL 窗光、**固定随机种子**、限制俯仰角与缩放距离。**全部采用**，其中"固定种子"写进了 `src/geo/rng.ts`，"昼夜各一套泛光参数"写进了 `src/core/sky.ts`。

## 三、反面参考（由此写下禁令）

- [为什么用 AI 生成 3D 大屏？](https://blog.csdn.net/Qs0R0X1ol/article/details/162374500) 与 [基于SpringBoot的电信卡智慧通讯业务3D可视化平台](https://blog.csdn.net/weixin_29973493/article/details/167052740) 代表了最常见的一类产出：随机方块建筑 + 发光边线 + 淡蓝背景与网格地面 + "加点雾就有科技感"。**这类画面遮住 UI 后无法回答"这是哪座城市"**，正是本项目用"环＋放射骨架、三面山势、绿环、水系走向、时区修正"去对抗的东西。
- [Three.js 3D 渲染与赛博朋克风格 UI 实现](https://m.blog.csdn.net/qq_40635035/article/details/163833666) 指出的现实约束被采纳：中低端设备 15 fps、未优化场景内存可涨到 300 MB、必须选择性 Bloom 与资源销毁。
- [Three.js低代码与AI结合编辑器](https://blog.csdn.net/guang2586/article/details/162790674)、[开源GIS引擎+Three.js 复刻商业级数字孪生](https://m.blog.csdn.net/n7o8p/article/details/152407121)、[3d-city-builder（GeoJSON→Three.js）](https://m.blog.csdn.net/weixin_28745821/article/details/167044332) 三条代表"数据驱动"路线（OSM 轮廓 + `ExtrudeGeometry` + LOD）。它们效果更好，但**要求外部数据与网络**，与"零外部请求"冲突，因此只借其 LOD 与语义分色思想，不借其数据管线。

## 四、城市本体（成都的空间特征与数据出处）

技术之外，"像成都"靠的是这些事实。逐项来源与落位见 [DATA.md](DATA.md)。

- [人民日报关注成都：公园城市协调发展，幸福生活可感可及](https://m.toutiao.com/article/7696884182697493034/) — "五绿润城"结构（龙泉山绿心、大熊猫国家公园绿肺、**环城生态区绿环**、锦江公园绿轴、天府绿道绿脉）；**2025 年中心城区遥望雪山 81 天创历史新高**；国庆 100 km 环城生态区一级绿道成为必体验项目。→ 决定了西向雪山轮廓与绿环这两条辨识度设计。
- [成都骑行指数出炉](https://view.inews.qq.com/wxn/20260511A02GYR00) — 100 km 环城绿道串联 **78 座特色桥梁与 121 个生态公园**。→ 绿环宽度与公园点位密度依据。
- [100公里成都绕城绿道：把整座城市骑成风景](https://baijiahao.baidu.com/s?id=1862833728427400251) — 绿道**沿绕城高速（四环）**而建，60 km 平路 + 20 km 上坡 + 20 km 下坡。→ 把绿环半径锚定在绕城 13.5 km 附近（`GREEN_BELT` 12.1–14.9 km）。
- [成都环城绿道（信息汇总）](https://blog.csdn.net/weixin_60830013/article/details/153622521) — 官方名称/常见称呼/总长/70 余座景观桥/经典路段（锦城湖→青龙湖覆盖西、北区域）。→ 湖泊与湿地的方位校核。
- [环走天府绿道](https://www.meipian.cn/5flbspj5) — 环城生态区位于**绕城高速两侧各 500 m 及周边 7 大楔形地块**，涉及生态用地 133 km²。→ 绿环的楔形缺口与宽度处理。
- [成都绿道多少公里](https://mbd.baidu.com/newspage/data/dtlandingsuper?from=2001k&nid=dt_5718663670560615557) — 天府绿道总规划约 1.69 万公里、三级网络；**熊猫绿道沿三环路 102 km**、锦江绿道 240 km（都江堰—黄龙溪）。→ 三环绿化带与锦江南向水系的依据。

## 五、这些参考如何改写了提示词

| 看完之后得到的判断 | 写进提示词的那一条 |
|---|---|
| 绝大多数 demo 认不出城市 | 「可辨识性优先」+ 拆成环放射/山势/绿环/水系/时区五条可判定条件 |
| 材质数量而非三角形数量决定帧率 | 「draw call < 1000」+「地标独立 mesh、普通建筑实例化」 |
| 夜间是这类项目真正被看的一面 | 「夜间为主展示态」+ 灯光分层要求与"华夫饼"禁令 |
| 手机档也要能跑 | 品质三档与格网 tier |
| 一次性生成达不到标准 | 「按截图判定、按轮次收敛」迭代协议 |
