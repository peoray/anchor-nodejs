import { IEnvironment } from '../../types/env'
import { Customer } from './customer'

/**
 * A class that acts as a handler for customer onboarding operations.
 * It encapsulates the customer-related methods from the Customer class.
 */
export class OnboardingHandler {
  private customerInstance: Customer

  /**
   * Creates an instance of OnboardingHandler.
   * @param {string} apiKey - The API key used for authentication.
   * @param {IEnvironment} environment - The environment configuration.
   */
  constructor(apiKey: string, environment: IEnvironment) {
    this.customerInstance = new Customer(apiKey, environment)
  }

  /**
   * Exposes customer onboarding-related methods.
   * @returns {Object} - An object with methods for customer onboarding operations.
   */
  public get onboarding() {
    return {
      /**
       * Creates a new customer.
       * @param {ICreateCustomer} data - The data for creating a customer.
       * @returns {Promise<ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse>} - The response data.
       */
      createCustomer: this.customerInstance.createCustomer.bind(
        this.customerInstance
      ),
      /**
       * Updates an existing customer.
       * @param {string} customerId - The ID of the customer to be updated.
       * @param {IUpdateCustomer} data - The data for updating the customer.
       * @returns {Promise<ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse>} - The response data.
       */
      updateCustomer: this.customerInstance.updateCustomer.bind(
        this.customerInstance
      ),
      /**
       * Fetches information about a specific customer.
       * @param {string} customerId - The ID of the customer to be fetched.
       * @param {string} [include] - Optional parameter to specify additional data to include.
       * @returns {Promise<ICreateBusinessCustomerResponse | ICreateIndividualCustomerResponse>} - The response data.
       */
      fetchCustomer: this.customerInstance.fetchCustomer.bind(
        this.customerInstance
      ),
      /**
       * Lists all customers based on optional query parameters.
       * @param {IQueryParams} [params] - Optional query parameters for filtering the list.
       * @returns {Promise<ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]>} - The response data.
       */
      listAllCustomer: this.customerInstance.listAllCustomer.bind(
        this.customerInstance
      ),
      /**
       * Deletes a customer.
       * @param {string} customerId - The ID of the customer to be deleted.
       * @returns {Promise<IDeleteCustomerResponse>} - The response data.
       */
      deleteCustomer: this.customerInstance.deleteCustomer.bind(
        this.customerInstance
      ),
      /**
       * Searches for customers based on optional query parameters.
       * @param {IQueryParams} [params] - Optional query parameters for searching.
       * @returns {Promise<ICreateBusinessCustomerResponse[] | ICreateIndividualCustomerResponse[]>} - The response data.
       */
      searchCustomers: this.customerInstance.searchCustomers.bind(
        this.customerInstance
      ),
      /**
       * Fetches officer requirements for a specific customer.
       * @param {string} customerId - The ID of the customer.
       * @param {IQueryParams} [params] - Optional query parameters for fetching officer requirements.
       * @returns {Promise<IOfficerRequirementResponse>} - The response data.
       */
      officersRequirement: this.customerInstance.officersRequirement.bind(
        this.customerInstance
      ),
    }
  }
}
