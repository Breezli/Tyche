import { mount } from '@vue/test-utils'
import FloatContainer from '../FloatContainer.vue'

describe('FloatContainer 组件测试', () => {
	it('FloatContainer 组件正常渲染', () => {
		const wrapper = mount(FloatContainer)
		expect(wrapper.exists()).toBe(true)
		expect(wrapper.classes()).toContain('w-fit')
		expect(wrapper.classes()).toContain('transition')
		expect(wrapper.classes()).toContain('duration-500')
		expect(wrapper.classes()).toContain('ease-in-out')
	})

	it('FloatContainer 组件具有正确的样式和属性', () => {
		const wrapper = mount(FloatContainer, {
			props: {
				class: 'custom-class', // 如果需要自定义类名
			},
		})

		// 验证默认类名
		expect(wrapper.classes()).toContain('w-fit')
		expect(wrapper.classes()).toContain('transition')

		// 验证动态样式
		// expect(wrapper.attributes('style')).toContain(
		// 	'transform-style: preserve-3d;'
		// )
		// expect(wrapper.attributes('style')).toContain('perspective: 1000px;')
	})
})
