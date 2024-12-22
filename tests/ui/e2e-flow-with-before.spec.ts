import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { faker } from '@faker-js/faker/locale/ar'
import { PASSWORD, USERNAME } from '../../config/env-data'
import { OrderFoundPage } from '../pages/order-found-page'

let authPage: LoginPage

test.beforeEach(async ({ page }) => {
  authPage = new LoginPage(page)
  await authPage.open()
})

test('signIn button disabled when incorrect data inserted', async ({}) => {
  await authPage.usernameField.fill(faker.lorem.word(2))
  await authPage.passwordField.fill(faker.lorem.word(7))
  await expect(authPage.signInButton).toBeDisabled()
})

test('error message displayed when incorrect credentials used', async ({}) => {
  // implement test
})

test('login with correct credentials and verify order creation page', async ({}) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await expect.soft(orderCreationPage.statusButton).toBeVisible()
  await expect.soft(orderCreationPage.orderCreatorName).toBeVisible()
  await expect.soft(orderCreationPage.orderCreatorPhone).toBeVisible()
  await expect.soft(orderCreationPage.orderCreatorComment).toBeVisible()
  await expect.soft(orderCreationPage.createOrderButton).toBeVisible()
})

test('login and create order', async ({}) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.orderCreatorName.fill(faker.lorem.word(4))
  await orderCreationPage.orderCreatorPhone.fill(faker.lorem.lines(6))
  await orderCreationPage.orderCreatorComment.fill(faker.lorem.word(6))
  await orderCreationPage.createOrderButton.click()
  await expect.soft(orderCreationPage.searchPopUp).toBeVisible()
})

test('login and create order and show status', async ({ page }) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.statusButton.click()
  await orderCreationPage.searchPopUpInputField.fill('3602')
  await orderCreationPage.popUpTrackingButton.click()
  const orderFoundPage = new OrderFoundPage(page)
  await expect.soft(orderFoundPage.uselessField).toBeVisible()
})

//  проблемы с webkit уже не первый раз...(остальное работает)
