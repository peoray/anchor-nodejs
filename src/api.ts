import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { getUrl } from './utils/url'
import { IEnvironment } from './interfaces/env'
import { BaseError, handleAxiosError } from './utils/errors'

export class AnchorCore {
  public request: AxiosInstance
  constructor(public apiKey: string, public environment?: IEnvironment) {
    this.request = axios.create({
      baseURL: getUrl(environment),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-anchor-key': apiKey,
      },
    })
  }

  private async handleRequest<T>(
    requestPromise: Promise<AxiosResponse<T>>
  ): Promise<T> {
    try {
      const response = await requestPromise
      return response.data
    } catch (error) {
      throw new BaseError({ message: handleAxiosError(error as AxiosError) })
    }
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.handleRequest<T>(this.request.get(url, config))
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.handleRequest<T>(this.request.post(url, data, config))
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.handleRequest<T>(this.request.put(url, data, config))
  }

  public async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.handleRequest<T>(this.request.patch(url, data, config))
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.handleRequest<T>(this.request.delete(url, config))
  }
}
