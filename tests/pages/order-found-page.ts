import { Locator, Page } from '@playwright/test'
import { AuthPage } from './auth-page'


export class OrderFoundPage extends AuthPage {

  readonly uselessField: Locator


  constructor(page: Page) {
    super(page)
    this.uselessField = page.getByTestId('useless-input')
  }

  async orderFoundPage(): Promise<OrderFoundPage>{
    return new OrderFoundPage(this.page)
  }
}