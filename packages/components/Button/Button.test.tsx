// import { describe, it, expect } from 'vitest' //vitest 是测试框架，提供 describe（定义测试套件）、it（定义单个测试用例）、expect（断言工具）
// import { mount } from '@vue/test-utils' //Vue 的测试工具库，mount 函数用于挂载 Vue 组件以便测试
// import Button from './Button.vue' //引入需要测试的 Button.vue 组件
// import type { ButtonProps } from './types' //引入组件的 props 类型定义，确保 props 的类型正确

// describe('Button.vue', () => {
// 	// type 属性的类名测试
// 	it('type 属性被设置时，组件添加了对应的类名（如 er-button--primary）', () => {
// 		const types = ['primary', 'success', 'warning', 'danger', 'info'] //包含所有可能的 type 值
// 		types.forEach((type) => {
// 			//遍历每个type类型
// 			const wrapper = mount(Button, {
// 				//通过 mount 挂载 Button 组件，并传递当前 type 值作为 props
// 				props: { type: type as ButtonProps['type'] },
// 			})
// 			expect(wrapper.classes()).toContain(`er-button--${type}`) //断言类名是否包含 er-button--${type}
// 		})
// 	})

// 	// size 属性的类名测试
// 	it('size 属性被设置时，组件添加了对应的类名（如 er-button--large）', () => {
// 		const sizes = ['large', 'default', 'small']
// 		sizes.forEach((size) => {
// 			const wrapper = mount(Button, {
// 				props: { size: size as ButtonProps['size'] },
// 			})
// 			expect(wrapper.classes()).toContain(`er-button--${size}`)
// 		})
// 	})

// 	// plain、round 等布尔属性的类名测试
// 	it.each([
// 		//一个参数化测试，通过数组中的每一项（[prop, className]）生成多个测试用例
// 		['plain', 'is-plain'],
// 		['round', 'is-round'],
// 		['circle', 'is-circle'],
// 		['disabled', 'is-disabled'],
// 		['loading', 'is-loading'],
// 	])(
// 		'当 prop（如 plain）被设置为 true 时，组件添加了对应的类名（如 is-plain）',
// 		(prop, className) => {
// 			const wrapper = mount(Button, {
// 				//挂载组件
// 				props: { [prop]: true }, //设置 props[prop] = true
// 			})
// 			expect(wrapper.classes()).toContain(className) //断言类名是否包含 className
// 		}
// 	)

// 	// nativeType 属性的 type 属性测试
// 	it('当 tag 是 button 时，组件的 type 属性等于 nativeType（如 submit）', () => {
// 		const wrapper = mount(Button, {
// 			props: { tag: 'button', nativeType: 'submit' }, //设置 tag 为 button，nativeType 为 submit
// 		})
// 		expect(wrapper.element.tagName).toBe('BUTTON') //标签名是否为 BUTTON
// 		expect(wrapper.element.type).toBe('submit') //type 属性是否为 submit
// 	})

// 	// tag 属性的标签名测试
// 	it('当 tag 被设置为 a 时，组件的根元素为 <a> 标签', () => {
// 		const wrapper = mount(Button, {
// 			props: { tag: 'a' }, //挂载组件并设置 tag 为 a
// 		})
// 		expect(wrapper.element.tagName.toLowerCase()).toBe('a') //断言标签名是否为 a（小写）
// 	})

// 	// click 事件测试
// 	it('点击按钮时触发 click 事件', async () => {
// 		const wrapper = mount(Button)
// 		await wrapper.trigger('click') //使用 trigger('click') 模拟点击事件（需 await 确保异步完成）
// 		expect(wrapper.emitted().click).toHaveLength(1) //断言 emitted().click 是否有 1 次触发
// 	})
// })
