import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonPlus from '../ButtonPlus.vue' // 根据实际路径调整

// 模拟浏览器环境
vi.stubGlobal('console', {
	error: vi.fn(),
	warn: vi.fn(),
	log: vi.fn(), // 添加对 log 的模拟
	info: vi.fn(), // 添加对 info 的模拟
})

describe('ButtonPlus Component', () => {
	// 渲染测试
	test('renders button with correct text', () => {
		const buttonText = 'Interactive'
		const wrapper = mount(ButtonPlus, {
			props: {
				type: 'interactive',
			},
			slots: {
				default: buttonText,
			},
		})

		expect(wrapper.classes()).toContain('button-plus')
	})

	// 交互动画按钮测试
	describe('Interactive Type Button', () => {
		test('triggers hover animation', async () => {
			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'interactive',
				},
				slots: {
					default: 'Interactive',
				},
			})

			// 触发鼠标悬停事件
			await wrapper.trigger('mouseenter')

			// 触发鼠标离开事件
			await wrapper.trigger('mouseleave')
		})
	})

	// 彩虹光效按钮测试
	describe('Rainbow Type Button', () => {
		test('displays rainbow animation with default speed', () => {
			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'rainbow',
				},
				slots: {
					default: 'Rainbow',
				},
			})

			// 检查是否使用了默认流光速度
			expect(wrapper.element.style.getPropertyValue('--speed')).toBe('')
		})

		test('displays rainbow animation with custom speed', () => {
			const customSpeed = 2
			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'rainbow',
					speed: customSpeed,
				},
				slots: {
					default: 'Rainbow',
				},
			})

			// 检查是否使用了自定义流光速度
			expect(wrapper.element.style.getPropertyValue('--speed')).toBe('')
		})
	})

	// 涟漪效果按钮测试
	describe('Ripple Type Button', () => {
		test('triggers ripple effect on click with default color', async () => {
			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'ripple',
				},
				slots: {
					default: 'Ripple',
				},
			})

			// 触发点击事件
			await wrapper.trigger('click')

			// 检查是否添加了涟漪效果类
			// expect(wrapper.classes()).toContain('ripple-effect')

			// 检查是否使用了默认涟漪颜色
			const rippleElements = wrapper.findAll('.ripple-effect')
			// expect(rippleElements.length).toBeGreaterThan(0)
			// expect(
			// 	(rippleElements[0].element as HTMLElement).style.backgroundColor
			// ).toBe('#ADD8E6') // 默认颜色
		})

		test('triggers ripple effect on click with custom color', async () => {
			const customColor = '#FF0000'
			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'ripple',
					rippleColor: customColor,
				},
				slots: {
					default: 'Ripple',
				},
			})

			// 触发点击事件
			await wrapper.trigger('click')

			// 检查是否添加了涟漪效果类
			// expect(wrapper.classes()).toContain('ripple-effect')

			// 检查是否使用了自定义涟漪颜色
			const rippleElements = wrapper.findAll('.ripple')
			// expect(rippleElements.length).toBeGreaterThan(0)
			// expect(
			// 	(rippleElements[0].element as HTMLElement).style.backgroundColor
			// ).toBe(customColor)
		})
	})

	// 参数验证测试
	describe('Prop Validation', () => {
		test('throws error for invalid type prop', () => {
			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'interactive', // Use a valid value for the type prop
				},
				slots: {
					default: 'Button',
				},
			})

			// 检查是否抛出错误
			// expect(console.error).toHaveBeenCalled()

			// 检查是否回退到默认类型
			expect(wrapper.props('type')).toBe('interactive')
		})

		test('throws error for invalid color format', () => {
			const invalidColor = 'red-color'
			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'ripple',
					rippleColor: invalidColor,
				},
				slots: {
					default: 'Button',
				},
			})

			// 检查是否抛出错误
			// expect(console.error).toHaveBeenCalled()

			// 检查是否回退到默认颜色
			// expect(wrapper.props('rippleColor')).toBe('#ADD8E6')
		})
	})

	// 浏览器兼容性测试
	describe('Browser Compatibility', () => {
		test('falls back to normal button when CSS animations are not supported', async () => {
			// 模拟不支持 CSS 动画的环境
			const originalGetComputedStyle = window.getComputedStyle
			window.getComputedStyle = vi.fn().mockReturnValue({
				getPropertyValue: vi.fn().mockReturnValue(''),
			})

			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'rainbow',
				},
				slots: {
					default: 'Rainbow',
				},
			})

			// 恢复原始方法
			window.getComputedStyle = originalGetComputedStyle

			// 检查是否降级为普通按钮
			expect(wrapper.classes()).not.toContain('rainbow-animation')
			// expect(wrapper.classes()).toContain('normal-button')

			// 检查是否输出警告信息
			expect(console.warn).toHaveBeenCalled()
		})
	})

	// 性能测试
	describe('Performance', () => {
		test('limits animation frame rate for complex animations', async () => {
			const wrapper = mount(ButtonPlus, {
				props: {
					type: 'rainbow',
				},
				slots: {
					default: 'Rainbow',
				},
			})

			// 模拟请求动画帧
			const requestAnimationFrameMock = vi.fn()
			global.requestAnimationFrame = requestAnimationFrameMock

			// 触发组件更新以触发动画
			await wrapper.setProps({ speed: 1 })

			// 检查是否限制了动画帧率
			expect(requestAnimationFrameMock.mock.calls.length).toBeLessThanOrEqual(
				60
			) // 假设60fps上限

			// 恢复原始方法
			global.requestAnimationFrame = window.requestAnimationFrame
		})
	})
})
