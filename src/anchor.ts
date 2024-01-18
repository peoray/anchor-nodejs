import { IEnvironment } from './types/env'
import { OnboardingHandler } from './services'

export class Termii {
  private onboardingInstance: OnboardingHandler

  constructor(public apiKey: string, environment: IEnvironment) {
    this.onboardingInstance = new OnboardingHandler(apiKey, environment)
  }

  public get onboarding() {
    return this.onboardingInstance.onboarding
  }
}
