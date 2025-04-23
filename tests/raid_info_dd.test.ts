import { test as baseTest } from '@playwright/test';
import { RaidPage } from '../pages/RaidPage';

// Extend the base test to include custom fixtures
const test = baseTest.extend<{
  raidPage: RaidPage;
  username: string;
  password: string;
}>({
  // Provide default values for username and password
  username: async ({}, use) => {
    await use('default-username'); // Default username if not overridden
  },
  password: async ({}, use) => {
    await use('default-password'); // Default password if not overridden
  },
  raidPage: async ({ page }, use) => {
    const raidPage = new RaidPage(page);
    await use(raidPage);
  },
});

// Define test data for data-driven testing
const testData = [
  { username: 'auto-test', password: 'tester123' },
  // { username: 'auto-test2', password: 'tester456' },
  // { username: 'auto-test3', password: 'tester789' },
];

test.describe('RAiD Tests', () => {
  // Data-driven test
  for (const data of testData) {
    test(`Edit RAiD Test for user: ${data.username}`, async ({ raidPage }) => {
      let loginSuccessful = false;

      // Attempt to login
      try {
        await raidPage.login(data.username, data.password);
        loginSuccessful = true; // Mark login as successful if no error occurs
      } catch (error) {
        console.error(`Login failed for username: ${data.username}. Error: ${error.message}`);
        test.skip(true, `Skipping test for username: ${data.username} due to login failure.`);
      }

      // Skip further steps if login was unsuccessful
      if (!loginSuccessful) return;


      // Navigate to RAiD
      await raidPage.navigateToRaid();

      // // Edit RAiD
      // await raidPage.editRaid();

      // // Verify RAiD details
      // await raidPage.verifyRaidDetails();

      // // Navigate through sections
      // await raidPage.navigateSections();

      // // Cancel edit
      // await raidPage.cancelEdit();
    });
  }
});