import { AnchorCore } from '../../api'
import { IEnvironment } from '../../interfaces/env'
import {
  ICreateBusinessCustomerResponse,
  ICreateCustomer,
  ICreateIndividualCustomerResponse,
  IUpdateCustomer,
} from '../../interfaces/customer'
import { IQueryParams } from '../../interfaces/base'

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
    return this.put<
      ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
    >(`/customers/${customerId}`, { params })
  }

  public async listAllCustomer(
    params?: IQueryParams
  ): Promise<
    ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
  > {
    return this.put<
      ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
    >(`/customers`, { params })
  }
}
