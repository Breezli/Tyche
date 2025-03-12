import { markInstance } from '@tyche/utils'
import components from './components'

const installer = markInstance(components)

export * from '@tyche/components'
export default installer
