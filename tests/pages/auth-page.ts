import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'

export class AuthPage extends BasePage {
  readonly logoutButton: Locator
  readonly searchPopUp: Locator
  readonly searchPopUpInputField: Locator
  readonly popUpTrackingButton: Locator
  readonly popUpCloseButton: Locator

  constructor(page: Page) {
    super(page)
    this.logoutButton = page.getByTestId('logout-button')
    this.searchPopUp = page.getByTestId('orderSuccessfullyCreated-popup')
    this.searchPopUpInputField = page.getByTestId('searchOrder-input')
    this.popUpTrackingButton = page.getByTestId('searchOrder-submitButton')
    this.popUpCloseButton = page.getByTestId('searchOrder-popup-close-button')
  }
}
