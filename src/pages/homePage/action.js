import { test, expect } from '@playwright/test';
import { URLS } from '../../../utils/env.js';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.headerTitle = page.locator('h2:has-text("Notice")');
    this.reserveMenuBtnFromHome = page.locator('a[href="./plans.html"]');
  }

  async gotoHomeUrl() {
    await test.step('Navigate to base url home', async () => {
      await this.page.goto(URLS.BASE, { waitUntil: 'domcontentloaded' });
    });      
      
  }

  async verifyHomePageOpened() {
    await test.step('User open page base url homepage', async () => {
      await expect(this.page).toHaveURL(/hotel-example-site/);
      await expect(this.headerTitle).toBeVisible();
    });
  }

  async tapReserveMenuBtnFromHome() {
        await test.step('User click reserve menu button', async () => {
            const reserveMenu = this.reserveMenuBtnFromHome;
            await expect(reserveMenu).toBeVisible({timeout:10000});
            await reserveMenu.click();
            await expect(this.page).toHaveURL(/plans.html/);
        });
    }
}