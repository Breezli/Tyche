import { mount } from '@vue/test-utils'
import Salvage from '../Salvage.vue'

describe('Salvage 组件测试', () => {
	it('Salvage 组件正常渲染', () => {
		const wrapper = mount(Salvage, {
			props: {
				width: 100,
				height: 60,
				animationPhase: 'out',
				imageUrls: [
					'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/winter.jpg',
					'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/spring.jpg',
				],
			},
		})
		expect(wrapper.exists()).toBe(true)
		// expect(wrapper.classes()).toContain('salvage')
	})

	it('Salvage 组件的 props 正常传递', () => {
		// const wrapper = mount(Salvage, {
		// 	props: {
		// 		width: 100,
		// 		height: 60,
		// 		animationPhase: 'out',
		// 		imageUrls: [
		// 			'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/winter.jpg',
		// 			'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/spring.jpg',
		// 		],
		// 	},
		// })
		// expect(wrapper.props().width).toBe(100)
		// expect(wrapper.props().height).toBe(60)
		// expect(wrapper.props().animationPhase).toBe('out')
		// expect(wrapper.props().imageUrls.length).toBe(2)
	})
})
