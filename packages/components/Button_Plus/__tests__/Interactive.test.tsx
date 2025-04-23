import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Interactive from '../Buttons/Interactive.vue'

describe('Interactive Component', () => {
	test('triggers hover animation', async () => {
		const wrapper = mount(Interactive)

		// 触发鼠标悬停事件
		await wrapper.trigger('mouseenter')
		// expect(wrapper.classes()).toContain('hover-active')

		// 触发鼠标离开事件
		await wrapper.trigger('mouseleave')
		// expect(wrapper.classes()).not.toContain('hover-active')
	})
})
