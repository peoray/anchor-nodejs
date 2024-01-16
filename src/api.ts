import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { getUrl } from './utils/url'
import { IEnvironment } from './interfaces/env'

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

  public async get(url: string, params: any = {}): Promise<AxiosResponse> {
    return this.request.get(url, { params })
  }

  public async post(url: string, data: any = {}): Promise<AxiosResponse> {
    return this.request.post(url, data)
  }

  public async patch(url: string, data: any = {}): Promise<AxiosResponse> {
    return this.request.patch(url, data)
  }

  public async delete(url: string): Promise<AxiosResponse> {
    return this.request.delete(url)
  }
}
