import Message from './methods'
import { withInstallFunction } from '@tyche/utils'

export const ErMessage = withInstallFunction(Message, '$message')

export * from './types'
