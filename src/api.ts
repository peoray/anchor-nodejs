import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { getUrl } from './utils/url'
import { IEnvironment } from './types/env'
import { BaseError, handleAxiosError } from './utils/errors'

/**
 * A class representing the core functionality for making HTTP requests using Axios.
 */
export class AnchorCore {
  /**
   * Axios instance for making HTTP requests.
   */
  public request: AxiosInstance
  /**
   * Creates an instance of AnchorCore.
   * @param {string} apiKey - The API key used for authentication.
   * @param {IEnvironment} [environment] - The environment configuration.
   */
  constructor(public apiKey: string, public environment?: IEnvironment) {
    // Initialize the Axios instance with base URL and headers.
    this.request = axios.create({
      baseURL: getUrl(environment),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-anchor-key': apiKey,
      },
    })
  }

  /**
   * Handles Axios requests and returns the data or throws a BaseError in case of an error.
   * @template T - The type of the expected response data.
   * @param {Promise<AxiosResponse<T>>} requestPromise - The Axios request promise.
   * @returns {Promise<T>} - The response data.
   * @throws {BaseError} - If an error occurs during the request.
   * @private
   */
  private async handleRequest<T>(
    requestPromise: Promise<AxiosResponse<T>>
  ): Promise<T> {
    try {
      const response = await requestPromise
      return response.data
    } catch (error) {
      // Throw a BaseError in case of an AxiosError.
      throw new BaseError({ message: handleAxiosError(error as AxiosError) })
    }
  }

  /**
   * Performs an HTTP GET request.
   * @template T - The type of the expected response data.
   * @param {string} url - The URL for the GET request.
   * @param {AxiosRequestConfig} [config] - The Axios request configuration.
   * @returns {Promise<T>} - The response data.
   */
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.handleRequest<T>(this.request.get(url, config))
  }

  /**
   * Performs an HTTP POST request.
   * @template T - The type of the expected response data.
   * @param {string} url - The URL for the POST request.
   * @param {any} [data] - The data to be sent in the request body.
   * @param {AxiosRequestConfig} [config] - The Axios request configuration.
   * @returns {Promise<T>} - The response data.
   */
  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.handleRequest<T>(this.request.post(url, data, config))
  }

  /**
   * Performs an HTTP PUT request.
   * @template T - The type of the expected response data.
   * @param {string} url - The URL for the PUT request.
   * @param {any} [data] - The data to be sent in the request body.
   * @param {AxiosRequestConfig} [config] - The Axios request configuration.
   * @returns {Promise<T>} - The response data.
   */
  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.handleRequest<T>(this.request.put(url, data, config))
  }

  /**
   * Performs an HTTP PATCH request.
   * @template T - The type of the expected response data.
   * @param {string} url - The URL for the PATCH request.
   * @param {any} [data] - The data to be sent in the request body.
   * @param {AxiosRequestConfig} [config] - The Axios request configuration.
   * @returns {Promise<T>} - The response data.
   */
  public async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.handleRequest<T>(this.request.patch(url, data, config))
  }

  /**
   * Performs an HTTP DELETE request.
   * @template T - The type of the expected response data.
   * @param {string} url - The URL for the DELETE request.
   * @param {AxiosRequestConfig} [config] - The Axios request configuration.
   * @returns {Promise<T>} - The response data.
   */
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.handleRequest<T>(this.request.delete(url, config))
  }
}
