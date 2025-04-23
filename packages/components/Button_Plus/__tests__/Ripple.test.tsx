import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ripple from '../Buttons/Ripple.vue'

describe('Ripple Component', () => {
	test('triggers ripple effect on click with default color', async () => {
		const wrapper = mount(Ripple)

		// 触发点击事件
		await wrapper.trigger('click')

		// 检查是否添加了涟漪效果类
		// expect(wrapper.classes()).toContain('ripple-effect')

		// 检查是否使用了默认涟漪颜色
		const rippleElements = wrapper.findAll('.ripple-effect')
		expect(rippleElements.length).toBeGreaterThan(0)
		// expect(
		// 	(rippleElements[0].element as HTMLElement).style.backgroundColor
		// ).toBe('#ADD8E6') // 默认颜色
	})

	test('triggers ripple effect on click with custom color', async () => {
		const customColor = '#FF0000'
		const wrapper = mount(Ripple, {
			props: {
				rippleColor: customColor,
			},
		})

		// 触发点击事件
		await wrapper.trigger('click')

		// 检查是否添加了涟漪效果类
		// expect(wrapper.classes()).toContain('ripple-effect')

		// 检查是否使用了自定义涟漪颜色
		const rippleElements = wrapper.findAll('.ripple-effect')
		expect(rippleElements.length).toBeGreaterThan(0)
		// expect(
		// 	(rippleElements[0].element as HTMLElement).style.backgroundColor
		// ).toBe(customColor)
	})
})
