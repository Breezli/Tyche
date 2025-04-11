import type { Plugin } from 'vue'
import { describe, it, expect } from 'vitest'
import {
	VrAlert,
	VrButton,
	VrButtonGroup,
	VrCollapse,
	VrCollapseItem,
	VrDropdown,
	VrDropdownItem,
	VrTooltip,
	VrMessage,
	VrMessageBox,
	VrButtonPlus,
	VrInputPlus,
	VrCardPlus,
} from './index'
import { map, get } from 'lodash-es'

const components = [
	VrAlert,
	VrButton,
	VrButtonGroup,
	VrCollapse,
	VrCollapseItem,
	VrDropdown,
	VrDropdownItem,
	VrTooltip,
	VrMessage,
	VrMessageBox,
	VrButtonPlus,
	VrInputPlus,
	VrCardPlus,
] as Plugin[]

describe('components/index.ts', () => {
	it.each(map(components, (c) => [get(c, 'name') ?? '', c]))(
		'%s should be exported',
		(_, component) => {
			expect(component).toBeDefined()
			expect(component.install).toBeDefined()
		}
	)
})
