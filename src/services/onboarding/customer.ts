import { AnchorCore } from '../../api'
import { IEnvironment } from '../../types/env'
import {
  ICreateBusinessCustomerResponse,
  ICreateCustomer,
  ICreateIndividualCustomerResponse,
  IDeleteCustomerResponse,
  IOfficerRequirementResponse,
  IUpdateCustomer,
} from '../../types/customer'
import { IQueryParams } from '../../types/base'

/**
 * Class representing customer-related operations.
 * Extends AnchorCore to leverage common HTTP request methods.
 */
export class Customer extends AnchorCore {
  /**
   * Creates an instance of the Customer class.
   * @param {string} apiKey - The API key used for authentication.
   * @param {IEnvironment} [environment] - The environment configuration.
   */
  constructor(public apiKey: string, public environment?: IEnvironment) {
    super(apiKey, environment)
  }

  /**
   * Creates a new customer.
   * @param {ICreateCustomer} data - The data for creating a customer.
   * @returns {Promise<ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse>} - The response data.
   */
  public async createCustomer(
    data: ICreateCustomer
  ): Promise<
    ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
  > {
    return this.post<
      ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
    >('/customers', data)
  }

  /**
   * Updates an existing customer.
   * @param {string} customerId - The ID of the customer to be updated.
   * @param {IUpdateCustomer} data - The data for updating the customer.
   * @returns {Promise<ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse>} - The response data.
   */
  public async updateCustomer(
    customerId: string,
    data: IUpdateCustomer
  ): Promise<
    ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
  > {
    return this.put<
      ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
    >(`/customers/update/${customerId}`, data)
  }

  /**
   * Fetches information about a specific customer.
   * @param {string} customerId - The ID of the customer to be fetched.
   * @param {string} [include] - Optional parameter to specify additional data to include.
   * @returns {Promise<ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse>} - The response data.
   */
  public async fetchCustomer(
    customerId: string,
    include?: string
  ): Promise<
    ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
  > {
    const params = {
      include,
    }
    return this.get<
      ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
    >(`/customers/${customerId}`, { params })
  }

  /**
   * Lists all customers based on optional query parameters.
   * @param {IQueryParams} [params] - Optional query parameters for filtering the list.
   * @returns {Promise<ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]>} - The response data.
   */
  public async listAllCustomer(
    params?: IQueryParams
  ): Promise<
    ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]
  > {
    return this.get<
      ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]
    >(`/customers`, { params })
  }

  /**
   * Deletes a customer.
   * @param {string} customerId - The ID of the customer to be deleted.
   * @returns {Promise<IDeleteCustomerResponse>} - The response data.
   */
  public async deleteCustomer(
    customerId: string
  ): Promise<IDeleteCustomerResponse> {
    return this.delete<IDeleteCustomerResponse>(`/customers/${customerId}`)
  }

  /**
   * Searches for customers based on optional query parameters.
   * @param {IQueryParams} [params] - Optional query parameters for searching.
   * @returns {Promise<ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]>} - The response data.
   */
  public async searchCustomers(
    params?: IQueryParams
  ): Promise<
    ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]
  > {
    return this.get<
      ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]
    >(`/customers/search`, { params })
  }

  /**
   * Fetches officer requirements for a specific customer.
   * @param {string} customerId - The ID of the customer.
   * @param {IQueryParams} [params] - Optional query parameters for fetching officer requirements.
   * @returns {Promise<IOfficerRequirementResponse>} - The response data.
   */
  public async officersRequirement(
    customerId: string,
    params?: IQueryParams
  ): Promise<IOfficerRequirementResponse> {
    return this.get<IOfficerRequirementResponse>(
      `/customers/${customerId}/officers-requirement`,
      { params }
    )
  }
}
