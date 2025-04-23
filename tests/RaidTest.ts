import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async navigateToDashboard() {
    await this.page.goto('https://app.test.raid.org.au/');
  }

  async openRaid(raidButtonName: string) {
    await this.page.getByRole('button', { name: raidButtonName }).click();
  }

  async verifyRaidDetails(expectedText: string) {
    await this.page.getByText(expectedText).click({ button: 'right' });
    await expect(this.page.locator('#root')).toContainText(expectedText);
  }

  async navigateSections() {
    await this.page.locator('div').filter({ hasText: /^Titles$/ }).first().click();
    await this.page.locator('#description').getByText('Descriptions').click();
    await this.page.locator('div').filter({ hasText: /^Contributors$/ }).first().click();
    await this.page.locator('#organisation').getByText('Organisations', { exact: true }).click();
    await this.page.locator('#relatedObject').getByText('Related Objects').click();
    await this.page.locator('#alternateIdentifier').getByText('Alternate Identifiers', { exact: true }).click();
    await this.page.locator('#alternateUrl').getByText('Alternate URLs', { exact: true }).click();
    await this.page.locator('#relatedRaid').getByText('Related RAiDs', { exact: true }).click();
    await this.page.locator('#access').getByText('Access', { exact: true }).click();
    await this.page.locator('#subject').getByText('Subjects').click();
    await this.page.locator('#spatialCoverage').getByText('Spatial Coverages').click();
    await this.page.locator('div').filter({ hasText: /^Links$/ }).first().click();
    await this.page.locator('div').filter({ hasText: /^Raw Data$/ }).first().click();
  }

  async editRaid() {
    await this.page.getByTestId('edit-raid-button').click();
  }

  async cancelEdit() {
    await this.page.getByRole('link', { name: 'Cancel' }).click();
  }
}

function expect(arg0: Locator) {
    throw new Error('Function not implemented.');
}
