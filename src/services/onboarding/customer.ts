import { AnchorCore } from '../../api'
import { IEnvironment } from '../../interfaces/env'
import {
  ICreateBusinessCustomerResponse,
  ICreateCustomer,
  ICreateIndividualCustomerResponse,
} from '../../interfaces/customer'

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
    data: ICreateCustomer
  ): Promise<
    ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
  > {
    return this.put<
      ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
    >('/customers', data)
  }
}
