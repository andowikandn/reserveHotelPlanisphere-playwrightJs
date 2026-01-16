import { test, expect } from '@playwright/test';
import { ReserveLocator } from './locator.js';
import { URLS } from '../../../utils/env.js';

export class ReservePage {
    constructor(page) {
        this.page = page;
        this.locator = new ReserveLocator(page);
    }

    async goto() {
        await test.step('Navigate to url reserve page', async () => {
            
            await this.page.goto(URLS.RESERVE, { waitUntil: 'domcontentloaded' });
            await expect(this.locator.headerReservePage).toBeVisible();
            await expect(this.page).toHaveURL(/plans.html/);
        });
    }

    async tapPlanSpecialOffer() {
        await test.step('User click reserve room button plan special offer', async () => {
            
            await expect(this.locator.specialOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.specialOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.specialOfferPage = popup;
        });
        
        return this.specialOfferPage;
    }
}