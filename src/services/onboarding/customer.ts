import { AxiosError } from 'axios'
import { AnchorCore } from '../../api'
import { IEnvironment } from '../../interfaces/env'
import { BaseError, handleAxiosError } from '../../utils/errors'
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
    try {
      return this.post<
        ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse
      >('/customers', data)
    } catch (error) {
      return new BaseError({ message: handleAxiosError(error as AxiosError) })
    }
  }
}
