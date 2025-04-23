import { mount } from '@vue/test-utils'
import FloatBody from '../FloatBody.vue'

describe('FloatBody 组件测试', () => {
	it('FloatBody 组件正常渲染', () => {
		const wrapper = mount(FloatBody)
		expect(wrapper.exists()).toBe(true)
		// expect(wrapper.classes()).toContain('body')
	})

	it('FloatBody 组件具有正确的样式和属性', () => {
		const wrapper = mount(FloatBody)
		expect(wrapper.classes()).toContain('card-container')
		expect(wrapper.classes()).toContain('h-96')
		expect(wrapper.classes()).toContain('w-96')
	})

	it('FloatBody 组件的 hover 效果正常', async () => {
		const wrapper = mount(FloatBody)
		await wrapper.trigger('mouseenter')
		expect(wrapper.classes()).toContain('card-container')
		expect(wrapper.classes()).toContain('h-96')
		expect(wrapper.classes()).toContain('w-96')
	})
})
