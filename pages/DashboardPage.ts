import { test } from '@playwright/test';
import { LoginPage } from 'LoginPage';
// import { DashboardPage } from '../pages/DashboardPage';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Navigate to login and perform login
  await loginPage.navigateToLogin();
  await loginPage.loginWithGoogle('vikas.joshi@ardc.edu.au', '787877878#');

  // Navigate to dashboard and perform actions
  await dashboardPage.navigateToDashboard();
  await dashboardPage.openRaid('/281f7fcd');
  await dashboardPage.verifyRaidDetails('RAiD created on4/15/2025, 7:14:02 AMRAiD updated on4/15/2025, 7:14:02 AM');
  await dashboardPage.navigateSections();
  await dashboardPage.editRaid();
  await dashboardPage.cancelEdit();
});

export { DashboardPage };
