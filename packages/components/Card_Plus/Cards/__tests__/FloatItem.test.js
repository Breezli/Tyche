import { mount } from '@vue/test-utils'
import FloatItem from '../FloatItem.vue'

describe('FloatItem 组件测试', () => {
	it('FloatItem 组件正常渲染', () => {
		const wrapper = mount(FloatItem)
		expect(wrapper.exists()).toBe(true)

		// 检查根元素是否存在
		expect(wrapper.find('.box').exists()).toBe(true)

		// 检查 float-item 子元素是否存在
		const floatItem = wrapper.find('.float-item')
		expect(floatItem.exists()).toBe(true)
	})

	it('FloatItem 组件具有正确的样式和属性', () => {
		const wrapper = mount(FloatItem)

		// 定位到 float-item 子元素
		const floatItem = wrapper.find('.float-item')

		// 检查类名
		expect(floatItem.classes()).toContain('float-item')
		expect(floatItem.classes()).toContain('transition-3d')

		// 检查样式
		const computedStyle = window.getComputedStyle(floatItem.element)
		expect(computedStyle.transition).toBe(
			'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
		)
		expect(computedStyle.transformStyle).toBe('preserve-3d')
		expect(computedStyle.perspective).toBe('1000px')
		expect(computedStyle.willChange).toBe('transform')
	})
})
