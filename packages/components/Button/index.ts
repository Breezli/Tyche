import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@veyra/utils'

export const VrButton = withInstall(Button)
export const VrButtonGroup = withInstall(ButtonGroup)

export * from './types'
