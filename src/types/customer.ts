interface IidentificationLevel2 {
  dateOfBirth: Date
  gender: string
  bvn: string
  selfieImage: string
}

interface IidentificationLevel3 {
  idType: string
  idNumber: string
  expiryDate: Date
}

interface IAddress {
  addressLine_1: string
  addressLine_2?: string
  country: string
  city: string
  postalCode: string
  state: string
}

interface IFullName {
  firstName: string
  lastName: string
  middleName?: string
  maidenName?: string
}

interface IBasicDetail {
  businessName: string
  businessBvn: string
  industry: string
  registrationType: string
  dateOfRegistration: Date
  description: string
  country: string
  website?: string
}

interface IndividualCustomer {
  type: 'IndividualCustomer'
  attributes: {
    fullName: IFullName
    email: string
    phoneNumber: string
    address: IAddress
    isSoleProprietor?: boolean
    description?: string
    doingBusinessAs?: string
    identificationLevel2?: IidentificationLevel2
    identificationLevel3?: IidentificationLevel3
  }
}

interface BusinessCustomer {
  type: 'BusinessCustomer'
  attributes: {
    basicDetail: IBasicDetail
    contact: {
      phoneNumber: string
      email: {
        general: string
      }
      address: {
        main: IAddress
        registered?: IAddress
      }
    }
    officers: {
      role: string
      fullName: IFullName
      dateOfBirth: Date
      email: string
      phoneNumber: string
      nationality: string
      address: IAddress
      bvn: string
      title?: string
      percentageOwned: number
    }[]
  }
}

// Union type for both individual and business customers
type CustomerData = IndividualCustomer | BusinessCustomer

export interface ICreateCustomer {
  data: CustomerData
}

export interface ICreateIndividualCustomerResponse {
  id: string
  type: string
  attributes: {
    email: string
    phoneNumber: string
    fullName: IFullName
    address: IAddress
    createdAt: Date
    soleProprietor: boolean
    description: string
    doingBusinessAs: string
    identificationLevel2: IidentificationLevel2
    identificationLevel3: IidentificationLevel3
    metadata: string[]
    status: 'ACTIVE' | 'EXPIRED' | 'DELETED' | 'IN_ACTIVE'
    verification: {
      level: string
      comment: string
      status:
        | 'pending'
        | 'approved'
        | 'rejected'
        | 'pending.manual.review'
        | 'unverified'
      details: {
        status:
          | 'pending'
          | 'approved'
          | 'rejected'
          | 'pending.manual.review'
          | 'unverified'
        type: string
        comment: string
        validatedItems: {
          item:
            | 'PHONE_NUMBER'
            | 'DATE_OF_BIRTH'
            | 'FIRST_NAME'
            | 'LAST_NAME'
            | 'FULL_NAME'
            | 'LICENSE_NO'
            | 'GENDER'
          status:
            | 'APPROVED'
            | 'REJECTED'
            | 'PENDING'
            | 'EXPIRED'
            | 'PENDING_NEXT_REVIEW'
        }
      }
    }
  }
  relationships: {
    customer: {
      data: {
        id: string
        type: string
      }
    }
    organization: {
      data: {
        id: string
        type: string
      }
    }
    documents: {
      data: {
        id: string
        type: string
      }[]
    }
  }
}

export interface ICreateBusinessCustomerResponse {
  id: string
  type: string
  attributes: {
    detail: {
      businessName: string
      businessBvn: string
      industry?: string
      registrationType?: string
      dateOfRegistration?: Date
      description: string
      country: string
      website: string
    }
    contact: {
      phoneNumber: string
      email: {
        general: string
      }
      address: {
        main: IAddress
        registered: IAddress
      }
    }
    officers: {
      officerId: string
      role: string
      fullName: IFullName
      dateOfBirth: Date
      email: string
      phoneNumber: string
      nationality: string
      address: IAddress
      bvn: string
      percentOwned: number
    }
    createdAt: Date
    metadata: string[]
    status: 'ACTIVE' | 'EXPIRED' | 'DELETED' | 'IN_ACTIVE'
    verification: {
      level: string
      comment: string
      status:
        | 'pending'
        | 'approved'
        | 'rejected'
        | 'pending.manual.review'
        | 'unverified'
      details: {
        status:
          | 'pending'
          | 'approved'
          | 'rejected'
          | 'pending.manual.review'
          | 'unverified'
        type: string
        comment: string
        validatedItems: {
          item:
            | 'PHONE_NUMBER'
            | 'DATE_OF_BIRTH'
            | 'FIRST_NAME'
            | 'LAST_NAME'
            | 'FULL_NAME'
            | 'LICENSE_NO'
            | 'GENDER'
          status:
            | 'APPROVED'
            | 'REJECTED'
            | 'PENDING'
            | 'EXPIRED'
            | 'PENDING_NEXT_REVIEW'
        }
      }
    }
  }
  relationships: {
    customer: {
      data: {
        id: string
        type: string
      }
    }
    organization: {
      data: {
        id: string
        type: string
      }
    }
    documents: {
      data: {
        id: string
        type: string
      }[]
    }
  }
}

interface IUpdateIndividualCustomer {
  type: 'IndividualCustomer'
  attributes: {
    email: string
    phoneNumber: string
    description?: string
    doingBusinessAs?: string
    identificationLevel2?: IidentificationLevel2
    identificationLevel3?: IidentificationLevel3
  }
}

interface IUpdateBusinessCustomer {
  type: 'BusinessCustomer'
  attributes: {
    basicDetail: IBasicDetail
    contact: {
      phoneNumber: string
      email: {
        general: string
      }
      address: {
        main: IAddress
        registered?: IAddress
      }
    }
    officers: {
      role: string
      fullName: IFullName
      dateOfBirth: Date
      email: string
      phoneNumber: string
      nationality: string
      address: IAddress
      bvn: string
      title?: string
      percentageOwned: number
    }[]
  }
}

export interface IUpdateCustomer {
  data: IUpdateIndividualCustomer | IUpdateBusinessCustomer
}

// export interface IUpdateCustomerResponse {}

export interface IDeleteCustomerResponse {
  id: string
  type: string
  attributes: {
    message: string
  }
}

export interface IOfficerRequirementResponse {
  minimumDirectors: number
  minimumOwners: number
  minimumPercentageOwned: number
}
