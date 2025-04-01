import Message from './methods'
import { withInstallFunction } from '@veyra/utils'

export const VrMessage = withInstallFunction(Message, '$message')

export * from './types'
