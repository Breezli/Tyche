export type CardPlusType = 'contain' | 'body' | 'item'

export interface CardPlusProps {
	type: CardPlusType
	is?: string
	translateX?: number | string
	translateY?: number | string
	translateZ?: number | string
	rotateX?: number | string
	rotateY?: number | string
	rotateZ?: number | string
	class?: string
	// 容器专用属性
	perspective?: number
	// 内容专用属性
	preserve3D?: boolean
}
