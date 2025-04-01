import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { withInstall } from '@veyra/utils'

export const VrDropdown = withInstall(Dropdown)
export const VrDropdownItem = withInstall(DropdownItem)

export * from './types'
