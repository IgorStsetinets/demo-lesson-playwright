import { Locator, Page } from '@playwright/test'
import { AuthPage } from './auth-page'

export class OrderPage extends AuthPage {
  readonly statusButton: Locator
  readonly orderCreatorName: Locator
  readonly orderCreatorPhone: Locator
  readonly orderCreatorComment: Locator
  readonly createOrderButton: Locator


  constructor(page: Page) {
    super(page)
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.orderCreatorName = page.getByTestId('username-input')
    this.orderCreatorPhone = page.getByTestId('phone-input')
    this.orderCreatorComment = page.getByTestId('comment-input')
    this.createOrderButton = page.getByTestId('createOrder-button')
  }
}
