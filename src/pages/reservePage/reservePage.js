import { test, expect } from '@playwright/test';
import { ReserveLocator } from './locatorReserve.js';
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
    
    async verifyReservePage() {
        await test.step('User verify reserve page', async () => {
            
            await expect(this.locator.headerReservePage).toBeVisible();
            await expect(this.page).toHaveURL(/plans.html/);
        });
    }

    async tapReserveMenuBtn() {
        await test.step('User click reserve menu button', async () => {
            
            await expect(this.locator.reserveMenuBtn).toBeVisible({timeout:10000});
            await this.locator.reserveMenuBtn.click();
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

    async tapPlanStayWithoutMealsOffer() {
        await test.step('User click reserve room button plan stay without meals offer', async () => {

            await expect(this.locator.stayWithoutMealsOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.stayWithoutMealsOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.stayWithoutMealsPage = popup;
        });

        return this.stayWithoutMealsPage;
    }

    async tapPlanBusinessTrip() {
        await test.step('User click reserve room button plan business trip offer', async () => {

            await expect(this.locator.businessTripOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.businessTripOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.businessTripPage = popup;
        });

        return this.businessTripPage;
    }

    async tapPlanBeautySalon() {
        await test.step('User click reserve room button plan beauty salon offer', async () => {

            await expect(this.locator.withBeautySalonOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.withBeautySalonOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.beautySalonPage = popup;
        });

        return this.beautySalonPage;
    }

    async tapPlanPrivateOnsen() {
        await test.step('User click reserve room button plan private onsen offer', async () => {

            await expect(this.locator.withPrivateOnsenOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.withPrivateOnsenOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.privateOnsenPage = popup;
        });

        return this.privateOnsenPage;
    }

    async tapPlanForHoneymoon() {
        await test.step('User click reserve room button plan for honeymoon offer', async () => {

            await expect(this.locator.forHoneymoonOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.forHoneymoonOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.forHoneymoonPage = popup;
        });

        return this.forHoneymoonPage;
    }

    async tapPlanComplimentaryTicket() {
        await test.step('User click reserve room button plan with complimentary ticket offer', async () => {

            await expect(this.locator.complimentaryTicketOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.complimentaryTicketOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.complimentaryTicketPage = popup;
        });

        return this.complimentaryTicketPage;
    }

    async tapPlanPremium() {
        await test.step('User click reserve room button premium plan offer', async () => {

            await expect(this.locator.premiumPlanOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.premiumPlanOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.premiumPlanPage = popup;
        });

        return this.premiumPlanPage;
    }

    async tapWithDinner() {
        await test.step('User click reserve room button with dinner offer', async () => {

            await expect(this.locator.withDinnerOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.withDinnerOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.withDinnerPage = popup;
        });

        return this.withDinnerPage;
    }

    async tapEconomical() {
        await test.step('User click reserve room button economical offer', async () => {

            await expect(this.locator.economicalOfferBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                this.locator.economicalOfferBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.economicalPage = popup;
        });

        return this.economicalPage;
    }
}