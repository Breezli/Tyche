import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
import { withInstall } from '@veyra/utils'

export const VrCollapse = withInstall(Collapse)
export const VrCollapseItem = withInstall(CollapseItem)

export * from './types'
