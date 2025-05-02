import { test, expect } from '@playwright/test';
import * as testData from '../test-data/raidTestData.json';
import * as fs from 'fs';

test('Edit RAiD Test with Error Handling and JSON Data', async ({ page }) => {
  const logError = (stepName: string, error: Error) => {
    console.error(`Error in step: ${stepName}`);
    console.error(error.message);
  };

  if (!testData || !testData.login || !testData.raid || !testData.title || !testData.description || !testData.spatialCoverage) {
    throw new Error('Missing or invalid test data. Please check raidTestData.json.');
  }

  try {
    await page.goto('https://app.test.raid.org.au/login');
  } catch (error) {
    logError('Navigate to Login Page', error as Error);
  }

  try {
    await page.getByRole('button', { name: 'AAF' }).click();
    await page.getByRole('textbox', { name: 'Username or email' }).fill(testData.login.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(testData.login.password);
    await page.getByRole('button', { name: 'Sign In' }).click();
  } catch (error) {
    logError('Login', error as Error);
  }

  try {
    await expect(page.getByRole('button', { name: '/73e0a851' })).toBeVisible();
    await page.getByRole('cell', { name: testData.raid.name }).click();
  } catch (error) {
    logError('Select RAiD', error as Error);
  }

  try {
    await page.getByTestId('edit-raid-button').click();
  } catch (error) {
    logError('Click Edit RAiD Button', error as Error);
  }

  try {
    await page.getByRole('button', { name: 'Add Title' }).click();
    await page.locator('input[name="title\\.1\\.text"]').fill(testData.title.text);
    await page.getByRole('option', { name: testData.title.type }).click();
    await page.getByRole('option', { name: testData.title.language }).click();
  } catch (error) {
    logError('Add Title', error as Error);
  }

  try {
    await page.getByRole('button', { name: 'Add Description' }).click();
    await page.locator('textarea[name="description\\.1\\.text"]').fill(testData.description.text);
    await page.getByRole('option', { name: testData.description.type }).click();
    await page.getByRole('option', { name: testData.description.language }).click();
  } catch (error) {
    logError('Add Description', error as Error);
  }

  try {
    await page.getByRole('button', { name: 'Add Place' }).click();
    await page.locator('input[name="spatialCoverage\\.0\\.place\\.1\\.text"]').fill(testData.spatialCoverage.placeName);
    await page.locator('input[name="spatialCoverage\\.0\\.place\\.1\\.text"]').press('Tab');
    await page.getByRole('button', { name: 'Add Spatial Coverage' }).click();
  } catch (error) {
    logError('Add Spatial Coverage', error as Error);
  }

  try {
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('RAiD updated on')).toBeVisible();
  } catch (error) {
    logError('Save RAiD', error as Error);
  }
});