import { test } from '@playwright/test';
import { RaidPage } from '../pages/RaidPage';

test.describe('RAiD Tests', () => {
  const Username = 'auto-test';
  const password = 'tester123';

  test('Edit RAiD Test', async ({ page }) => {
    const raidPage = new RaidPage(page);

    // Login
    await raidPage.login(Username, password);

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
});