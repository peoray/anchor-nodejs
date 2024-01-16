import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class AnchorCore {
  public request: AxiosInstance
  constructor(apiKey: string) {
    this.request = axios.create({
      baseURL: 'http://localhost:3000',
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
