import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import makeInstaller from './makeInstaller'
import components from './components'
import printLogo from './pringLogo'
import '@veyra/theme/index.css'

printLogo()

library.add(fas)
const installer = makeInstaller(components)

export * from '@veyra/locale'
export * from '@veyra/components'
export default installer
