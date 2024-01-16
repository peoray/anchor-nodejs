import { IEnvironment } from '../interfaces/env'

export const getUrl = (env: IEnvironment = { sandbox: false }): string => {
  if (env.sandbox) {
    return 'api.sandbox.getanchor.co'
  }
  return 'api.getanchor.co'
}
