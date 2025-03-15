import type { Component } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonNativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'large' | 'default' | 'small'

export interface ButtonProps {
	tag?: string | Component
	type?: ButtonType
	size?: ButtonSize
	nativeType?: ButtonNativeType
	disabled?: boolean
	loading?: boolean
	icon?: string
	circle?: boolean
	plain?: boolean
	round?: boolean
	autofocus?: boolean
	loadingIcon?: string
	useThrottle?: boolean
	throttleDuration?: number
	onClick?: (e: Event) => void
}

export interface ButtonEmits {
	(e: 'click', val: MouseEvent): void
}

export interface ButtonSlots {
	default?: Component
	icon?: Component
	loading?: Component
}
