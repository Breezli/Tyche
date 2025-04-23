import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Rainbow from '../Buttons/Rainbow.vue'

describe('Rainbow Component', () => {
	test('displays rainbow animation with default speed', () => {
		const wrapper = mount(Rainbow)

		// 检查是否使用了默认流光速度
		// expect(wrapper.element.style.getPropertyValue('--speed')).toBe('')
	})

	test('displays rainbow animation with custom speed', () => {
		const customSpeed = 2
		// const wrapper = mount(Rainbow, {
		// 	props: {
		// 		speed: customSpeed,
		// 	},
		// })

		// // 检查是否使用了自定义流光速度
		// expect(wrapper.element.style.getPropertyValue('--speed')).toBe(
		// 	String(customSpeed)
		// )
	})
})
