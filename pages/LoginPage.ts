import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateToLogin() {
    await this.page.goto('https://app.test.raid.org.au/login');
  }

  async loginWithGoogle(email: string, password: string) {
    await this.page.getByRole('button', { name: 'Google' }).click();
    await this.page.getByRole('textbox', { name: 'Email or phone' }).click();
    await this.page.getByRole('textbox', { name: 'Email or phone' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Email or phone' }).press('Enter');
    await this.page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
    await this.page.getByRole('textbox', { name: 'Enter your password' }).press('Enter');
  }
}