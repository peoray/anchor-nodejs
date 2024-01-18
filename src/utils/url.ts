import { IEnvironment } from '../types/env'

export const getUrl = (env: IEnvironment = { sandbox: false }): string => {
  if (env.sandbox) {
    return 'api.sandbox.getanchor.co/api/v1'
  }
  return 'api.getanchor.co/api/v1'
}
