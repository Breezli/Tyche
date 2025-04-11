// export type CardPlusType = 'salvage' | 'float'
export type CardPlusType = 'float'

export interface CardPlusProps {
	type: CardPlusType
	is?: string
	width?: number
	height?: number
	animationPhase?: 'in' | 'out'
	imageUrls?: string[]
	translateX?: number | string
	translateY?: number | string
	translateZ?: number | string
	rotateX?: number | string
	rotateY?: number | string
	rotateZ?: number | string
	class?: string
}
