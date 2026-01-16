import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage/action.js';

test.describe('Hotel Home Page', () => {
  test('User can open hotel home page successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.verifyHomePageOpened();
  });
});
