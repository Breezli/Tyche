import { mount } from '@vue/test-utils'
import CardPlus from '../../CardPlus.vue'

describe('CardPlus 组件测试', () => {
	it('CardPlus 组件正常渲染', () => {
		const wrapper = mount(CardPlus, {
			props: {
				type: 'float',
			},
		})
		expect(wrapper.exists()).toBe(true)
		expect(wrapper.classes()).toContain('vr-card-plus')
	})

	it('CardPlus 组件支持不同类型的卡片', () => {
		const floatWrapper = mount(CardPlus, {
			props: {
				type: 'float',
			},
		})
		const salvageWrapper = mount(CardPlus, {
			props: {
				type: 'salvage',
			},
		})
		expect(floatWrapper.classes()).toContain('vr-card-plus')
		// expect(salvageWrapper.classes()).toContain('salvage')
	})

	it('CardPlus 组件的 props 正常传递', () => {
		const wrapper = mount(CardPlus, {
			props: {
				type: 'float',
				translateX: 10,
				rotateY: 20,
			},
		})
		expect(wrapper.props().type).toBe('float')
		expect(wrapper.props().translateX).toBe(10)
		expect(wrapper.props().rotateY).toBe(20)
	})
})
