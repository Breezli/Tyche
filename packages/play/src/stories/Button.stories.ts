import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn, within, userEvent, expect } from '@storybook/test'
import { ErButton, ErButtonGroup } from '@tyche/components'
import 'tyche/dist/theme/Button.css'

type Story = StoryObj<typeof ErButton> & { argTypes?: ArgTypes }

const meta: Meta<typeof ErButton> = {
	title: 'Example/Button',
	component: ErButton,
	subcomponents: { ButtonGroup: ErButtonGroup },
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['primary', 'success', 'warning', 'danger', 'info', ''],
		},
		size: {
			control: { type: 'select' },
			options: ['large', 'default', 'small', ''],
		},
		disabled: {
			control: 'boolean',
		},
		loading: {
			control: 'boolean',
		},
		useThrottle: {
			control: 'boolean',
		},
		throttleDuration: {
			control: 'number',
		},
		autofocus: {
			control: 'boolean',
		},
		tag: {
			control: { type: 'select' },
			options: ['button', 'a', 'div'],
		},
		nativeType: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset', ''],
		},
		icon: {
			control: { type: 'text' },
		},
		loadingIcon: {
			control: { type: 'text' },
		},
	},
	args: { onClick: fn() },
}

// 辅助函数:将传入的 HTML 字符串（val）包裹在一个带有 margin: 5px 的 <div> 容器中
const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`

export const Default: Story & { args: { content: string } } = {
	argTypes: {
		content: {
			control: { type: 'text' }, //声明 content 参数的控制类型为文本输入框
		},
	},
	args: {
		type: 'primary', //默认按钮类型
		content: 'Button', //默认按钮文本
	},
	render: (args: any) => ({
		components: { ErButton }, //声明当前故事中使用的组件（ErButton）
		setup() {
			//将 args 对象暴露给模板，使模板可以直接访问 args 中的 props
			return { args }
		},
		template: container(
			//使用 container 函数包裹按钮组件
			//v-bind="args"：将 args 中的所有属性绑定到 <er-button> 组件上
			//{{args.content}}：动态显示 content 参数的值（通过 args 传递）
			`<er-button v-bind="args">{{args.content}}</er-button>`
		),
		//最终渲染结果会被包裹在 <div style="margin:5px">...</div> 中
	}),
	play: async ({
		canvasElement,
		args,
		step,
	}: {
		canvasElement: HTMLElement
		args: any
		step: any
	}) => {
		const canvas = within(canvasElement)
		await step('click button', async () => {
			await userEvent.tripleClick(canvas.getByRole('button'))
		})

		expect(args.onClick).toHaveBeenCalled()
	},
}

export const Circle: Story = {
	args: {
		icon: 'search', //按钮的图标
	},
	render: (args: any) => ({
		components: { ErButton },
		setup() {
			return { args }
		},
		// v-bind="args"：绑定 args 中的 props
		template: container(`
      <er-button circle v-bind="args"/>
    `),
	}),
	play: async ({
		canvasElement,
		args,
		step,
	}: {
		canvasElement: HTMLElement
		args: any
		step: any
	}) => {
		const canvas = within(canvasElement)
		await step('click button', async () => {
			await userEvent.click(canvas.getByRole('button'))
		})

		expect(args.onClick).toHaveBeenCalled()
	},
}

Circle.parameters = {}

export const Group: Story & { args: { content1: string; content2: string } } = {
	argTypes: {
		groupType: {
			control: { type: 'select' },
			options: ['primary', 'success', 'warning', 'danger', 'info', ''],
		},
		groupSize: {
			control: { type: 'select' },
			options: ['large', 'default', 'small', ''],
		},
		groupDisabled: {
			control: 'boolean',
		},
		content1: {
			control: { type: 'text' },
			defaultValue: 'Button1',
		},
		content2: {
			control: { type: 'text' },
			defaultValue: 'Button2',
		},
	},
	args: {
		round: true,
		content1: 'Button1',
		content2: 'Button2',
	},
	render: (args: any) => ({
		components: { ErButton, ErButtonGroup }, //用 ErButtonGroup 包裹多个按钮，实现按钮组布局
		setup() {
			return { args }
		},
		//:type="args.groupType"：按钮组的主题类型（如 primary）
		//:size="args.groupSize"：按钮组的大小（如 large）
		//:disabled="args.groupDisabled"：按钮组的禁用状态
		template: container(`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    `),
	}),
	play: async ({
		canvasElement,
		args,
		step,
	}: {
		canvasElement: HTMLElement
		args: any
		step: any
	}) => {
		const canvas = within(canvasElement)
		await step('click btn1', async () => {
			await userEvent.click(canvas.getByText('Button1'))
		})
		await step('click btn2', async () => {
			await userEvent.click(canvas.getByText('Button2'))
		})
		expect(args.onClick).toHaveBeenCalled()
	},
}

export default meta
