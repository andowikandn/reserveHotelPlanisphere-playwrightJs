import { test, expect } from '@playwright/test';

export class LogoutPage {
    constructor(page) {
        this.page = page;
    }

    async tapLogoutMenuBtn() {
        await test.step('User click logout menut button', async () => {
            
            const logoutBtn = 
                this.page.getByRole('button', { name: 'Logout' });
            
            await expect(logoutBtn).toBeVisible({ timeout: 10000 });
            await logoutBtn.click();
        });
    }
}