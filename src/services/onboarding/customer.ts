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

export class Customer extends AnchorCore {
  constructor(public apiKey: string, public environment?: IEnvironment) {
    super(apiKey, environment)
  }

  public async createCustomer(
    data: ICreateCustomer
  ): Promise<
    ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
  > {
    return this.post<
      ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
    >('/customers', data)
  }

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

  public async listAllCustomer(
    params?: IQueryParams
  ): Promise<
    ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]
  > {
    return this.get<
      ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]
    >(`/customers`, { params })
  }

  public async deleteCustomer(
    customerId: string
  ): Promise<IDeleteCustomerResponse> {
    return this.delete<IDeleteCustomerResponse>(`/customers/${customerId}`)
  }

  public async searchCustomers(
    params?: IQueryParams
  ): Promise<
    ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]
  > {
    return this.get<
      ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]
    >(`/customers/search`, { params })
  }

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
