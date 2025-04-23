import { Page, Locator, expect } from '@playwright/test';

export class RaidPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(Username: string, password: string) {
    await this.page.goto('https://app.test.raid.org.au/login');

    await this.page.getByRole('button', { name: 'AAF' }).click();
    await this.page.getByRole('textbox', { name: 'Username or email' }).click();
    await this.page.getByRole('textbox', { name: 'Username or email' }).fill(Username);
    await this.page.getByRole('textbox', { name: 'Password' }).click();
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
    // await this.page.getByText('Columns0FiltersDensityExport').click({
    //   button: 'right'
    // });
    await expect(this.page.getByRole('button', { name: '/d3cf3ebc' })).toBeVisible();

    // Click on the Google login button
    // await this.page.getByRole('button', { name: 'Google' }).click();
    // await this.page.getByRole('textbox', { name: 'Email or phone' }).fill(email);
    // await this.page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
    // await this.page.getByRole('textbox', { name: 'Enter your password' }).press('Enter');
  }

  async navigateToRaid() {
    await this.page.getByText('10.82841/d3cf3ebc').click();
  await expect(this.page.locator('#root div').filter({ hasText: 'DatesTitles1Descriptions1Contributors1Organisations1Related Objects0Alternate' }).nth(3)).toBeVisible();
  await this.page.locator('div').filter({ hasText: /^RAiD created on4\/16\/2025, 3:27:02 AMRAiD updated on4\/16\/2025, 3:27:02 AM$/ }).nth(1).click();
  await this.page.locator('#title div').filter({ hasText: 'Title #1Titlea618e74a-9bb2-' }).nth(1).click();

  }

  async editRaid() {
    await this.page.getByText('RAiD created on4/15/2025, 7:14:02 AMRAiD updated on4/15/2025, 7:14:02 AM').click({
      button: 'right',
    });
    await this.page.getByRole('menuitem', { name: 'Edit RAiD' }).click();
  }

  async verifyRaidDetails() {
    await expect(this.page.locator('#root')).toContainText('RAiD created on');
  }

  async navigateSections() {
    const sections = [
      { id: '#description', text: 'Descriptions' },
      { id: '#organisation', text: 'Organisations' },
      { id: '#relatedObject', text: 'Related Objects' },
      { id: '#alternateIdentifier', text: 'Alternate Identifiers' },
      { id: '#alternateUrl', text: 'Alternate URLs' },
      { id: '#relatedRaid', text: 'Related RAiDs' },
      { id: '#access', text: 'Access' },
      { id: '#subject', text: 'Subjects' },
      { id: '#spatialCoverage', text: 'Spatial Coverages' },
    ];

    for (const section of sections) {
      await this.page.locator(section.id).getByText(section.text, { exact: true }).click();
    }
  }

  async cancelEdit() {
    await this.page.getByRole('link', { name: 'Cancel' }).click();
  }
}