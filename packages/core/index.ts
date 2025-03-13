import { makeInstaller } from '@tyche/utils'
import components from './components'
import '@tyche/theme/index.css'

const installer = makeInstaller(components)

export * from '@tyche/components'
export default installer
