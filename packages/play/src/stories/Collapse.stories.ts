import type { Meta, StoryObj } from '@storybook/vue3'
import { VrCollapse, VrCollapseItem } from 'veyra'
import 'veyra/dist/theme/Collapse.css'

type Story = StoryObj<typeof VrCollapse>

const meta: Meta<typeof VrCollapse> = {
	title: 'Example/collapse',
	component: VrCollapse,
	subcomponents: { VrCollapseItem },
	tags: ['autodocs'],
}

export const Default: Story = {
	render: (args) => ({
		components: {
			VrCollapse,
			VrCollapseItem,
		},
		setup() {
			return {
				args,
			}
		},
		template: `
    <vr-collapse v-bind="args">
      <vr-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </vr-collapse-item>
      <vr-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </vr-collapse-item>
      <vr-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </vr-collapse-item>
    </vr-collapse>
    `,
	}),
	args: {
		accordion: true,
		modelValue: ['a'],
	},
}

export default meta
