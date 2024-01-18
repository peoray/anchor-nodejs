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
    const response = await this.request.get(url, { params })
    return response?.data
  }

  public async post(url: string, data: any = {}): Promise<AxiosResponse> {
    const response = await this.request.post(url, data)
    return response?.data
  }

  public async patch(url: string, data: any = {}): Promise<AxiosResponse> {
    const response = await this.request.patch(url, data)
    return response?.data
  }

  public async delete(url: string): Promise<AxiosResponse> {
    const response = await this.request.delete(url)
    return response?.data
  }
}
