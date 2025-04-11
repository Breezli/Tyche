// import * as THREE from 'three'
// import 'three-bas';

// export class SlideGeometry extends THREE.BufferGeometry {
// 	constructor(geometry: THREE.Geometry) {
// 		// 接收 THREE.Geometry 类型
// 		super()
// 		// 使用 BAS 的分离面功能
// 		BAS.Utils.separateFaces(geometry)

// 		// 将 Geometry 转换为 BufferGeometry
// 		this.fromGeometry(geometry)
// 		this.bufferPositions()
// 	}

// 	bufferPositions() {
// 		const positions = this.attributes.position.array as Float32Array
// 		const indices = this.index?.array as Uint16Array // 确保有索引

// 		if (!indices) return

// 		for (let i = 0; i < indices.length; i += 3) {
// 			const a = indices[i]
// 			const b = indices[i + 1]
// 			const c = indices[i + 2]

// 			// 提取顶点坐标
// 			const ax = positions[a * 3]
// 			const ay = positions[a * 3 + 1]
// 			const az = positions[a * 3 + 2]

// 			const bx = positions[b * 3]
// 			const by = positions[b * 3 + 1]
// 			const bz = positions[b * 3 + 2]

// 			const cx = positions[c * 3]
// 			const cy = positions[c * 3 + 1]
// 			const cz = positions[c * 3 + 2]

// 			// 计算面的质心
// 			const centroidX = (ax + bx + cx) / 3
// 			const centroidY = (ay + by + cy) / 3
// 			const centroidZ = (az + bz + cz) / 3

// 			// 更新顶点位置（相对于质心）
// 			positions[a * 3] = ax - centroidX
// 			positions[a * 3 + 1] = ay - centroidY
// 			positions[a * 3 + 2] = az - centroidZ

// 			positions[b * 3] = bx - centroidX
// 			positions[b * 3 + 1] = by - centroidY
// 			positions[b * 3 + 2] = bz - centroidZ

// 			positions[c * 3] = cx - centroidX
// 			positions[c * 3 + 1] = cy - centroidY
// 			positions[c * 3 + 2] = cz - centroidZ
// 		}

// 		// 标记属性变化
// 		this.attributes.position.needsUpdate = true
// 	}

// 	bufferUVs() {
// 		// 缓存 UV 坐标（示例逻辑）
// 		const uvs = this.attributes.uv.array as Float32Array
// 		if (!uvs) return

// 		// 假设需要重新计算 UV（根据你的需求调整）
// 		// 例如：翻转 UV
// 		for (let i = 0; i < uvs.length; i += 2) {
// 			uvs[i + 1] = 1 - uvs[i + 1]
// 		}
// 		this.attributes.uv.needsUpdate = true
// 	}
// }
