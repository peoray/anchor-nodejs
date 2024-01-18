import { IEnvironment } from '../types/env'

/**
 * Generates the base URL for API requests based on the provided environment.
 * @param {IEnvironment} [env] - The environment configuration. Defaults to production.
 * @returns {string} - The base URL for API requests.
 */
export const getUrl = (env: IEnvironment = { sandbox: false }): string => {
  // Check if the environment is set to sandbox
  if (env.sandbox) {
    // Return the sandbox API base URL
    return 'api.sandbox.getanchor.co/api/v1'
  }

  // Return the production API base URL
  return 'api.getanchor.co/api/v1'
}
