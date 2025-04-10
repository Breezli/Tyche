export type ButtonPlusType = 'interactive' | 'rainbow' | 'ripple'

export interface ButtonPlusProps {
	type: ButtonPlusType
	is?: string
	speed?: number
	rippleColor?: string
	class?: string
	duration?: number
}
