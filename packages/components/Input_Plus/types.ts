import type { HTMLAttributes } from 'vue'

export interface InputProps {
	/**
	 * 输入框默认值
	 */
	defaultValue?: string | number

	/**
	 * 双向绑定的值
	 */
	modelValue?: string | number

	/**
	 * 输入框自定义类名
	 */
	class?: HTMLAttributes['class']

	/**
	 * 容器自定义类名
	 */
	containerClass?: HTMLAttributes['class']
}
