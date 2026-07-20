import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(username: string, password: string) {
  await this.page.locator('input[name="username"]').fill(username);
  await this.page.locator('input[name="password"]').fill(password);
  await this.page.locator('input[value="Log In"]').click();

  // Temporary debugging
  await this.page.waitForTimeout(2000);
  console.log("URL:", this.page.url());
  console.log("Title:", await this.page.title());
}

  async verifyLoginSuccess() {
  await expect(
    this.page.getByRole('heading', { name: 'Accounts Overview' })
  ).toBeVisible();
}

  async verifyLoginFailure() {
    await expect(
      this.page.getByText('The username and password could not be verified.')
    ).toBeVisible();
  }
}