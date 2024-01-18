import { IEnvironment } from '../../types/env'
import { Customer } from './customer'

export class OnboardingHandler {
  private customerInstance: Customer

  constructor(apiKey: string, environment: IEnvironment) {
    this.customerInstance = new Customer(apiKey, environment)
  }

  public get onboarding() {
    return {
      createCustomer: this.customerInstance.createCustomer.bind(
        this.customerInstance
      ),
      updateCustomer: this.customerInstance.updateCustomer.bind(
        this.customerInstance
      ),
      fetchCustomer: this.customerInstance.fetchCustomer.bind(
        this.customerInstance
      ),
      listAllCustomer: this.customerInstance.listAllCustomer.bind(
        this.customerInstance
      ),
      deleteCustomer: this.customerInstance.deleteCustomer.bind(
        this.customerInstance
      ),
      searchCustomers: this.customerInstance.searchCustomers.bind(
        this.customerInstance
      ),
      officersRequirement: this.customerInstance.officersRequirement.bind(
        this.customerInstance
      ),
    }
  }
}
