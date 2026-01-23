import { test, expect } from '@playwright/test';

export class LogoutPage {
    constructor(page) {
        this.page = page;
    }

    async tapLogoutMenuBtn() {
        await test.step('User click logout menut button', async () => {
            
            const logoutBtn = 
                this.page.getByRole('button', { name: 'Logout' });
            
            await expect(logoutBtn).toBeVisible();
            await logoutBtn.click();

            const homeMenu = 
                this.page.locator('a[href="./index.html"]');

            await expect(this.page).toHaveURL(/index.html/);
            await expect(homeMenu).toBeVisible({timeout: 10000});
        });
    }
}