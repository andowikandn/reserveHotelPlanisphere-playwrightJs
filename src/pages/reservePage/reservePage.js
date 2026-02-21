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
            
            const reserveMenuBtn = 
                this.locator.reserveMenuBtn;
                
            await expect(reserveMenuBtn).toBeVisible({timeout:10000});
            await reserveMenuBtn.click();
        });
    }

    async tapPlanSpecialOffer() {
        await test.step('User click reserve room button plan special offer', async () => {
            
            const specialBtn =
                this.locator.specialOfferBtn;
    
            await expect(specialBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                specialBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.specialOfferPage = popup;
        });
        
        return this.specialOfferPage;
    }

    async tapPlanStayWithoutMealsOffer() {
        await test.step('User click reserve room button plan stay without meals offer', async () => {

            const stayWithoutMealsBtn = 
                this.locator.stayWithoutMealsOfferBtn
            
            await expect(stayWithoutMealsBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                stayWithoutMealsBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.stayWithoutMealsPage = popup;
        });

        return this.stayWithoutMealsPage;
    }

    async tapPlanBusinessTrip() {
        await test.step('User click reserve room button plan business trip offer', async () => {

            const businessTripBtn = 
                this.locator.businessTripOfferBtn;

            await expect(businessTripBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                businessTripBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.businessTripPage = popup;
        });

        return this.businessTripPage;
    }

    async tapPlanBeautySalon() {
        await test.step('User click reserve room button plan beauty salon offer', async () => {

            const withBeautySalonBtn = 
                this.locator.withBeautySalonOfferBtn;

            await expect(withBeautySalonBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                withBeautySalonBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.beautySalonPage = popup;
        });

        return this.beautySalonPage;
    }

    async tapPlanPrivateOnsen() {
        await test.step('User click reserve room button plan private onsen offer', async () => {

            const withPrivateOnsenBtn = 
                this.locator.withPrivateOnsenOfferBtn;

            await expect(withPrivateOnsenBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                withPrivateOnsenBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.privateOnsenPage = popup;
        });

        return this.privateOnsenPage;
    }

    async tapPlanForHoneymoon() {
        await test.step('User click reserve room button plan for honeymoon offer', async () => {

            const forHoneymoonBtn = 
                this.locator.forHoneymoonOfferBtn;

            await expect(forHoneymoonBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                forHoneymoonBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.forHoneymoonPage = popup;
        });

        return this.forHoneymoonPage;
    }

    async tapPlanComplimentaryTicket() {
        await test.step('User click reserve room button plan with complimentary ticket offer', async () => {

            const complimentaryTicketBtn = 
                this.locator.complimentaryTicketOfferBtn;

            await expect(complimentaryTicketBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                complimentaryTicketBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.complimentaryTicketPage = popup;
        });

        return this.complimentaryTicketPage;
    }

    async tapPlanPremium() {
        await test.step('User click reserve room button premium plan offer', async () => {

            const premiumPlanBtn = 
                this.locator.premiumPlanOfferBtn;
            
            await expect(premiumPlanBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                premiumPlanBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.premiumPlanPage = popup;
        });

        return this.premiumPlanPage;
    }

    async tapWithDinner() {
        await test.step('User click reserve room button with dinner offer', async () => {

            const withDinnerBtn = 
                this.locator.withDinnerOfferBtn;

            await expect(withDinnerBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                withDinnerBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.withDinnerPage = popup;
        });

        return this.withDinnerPage;
    }

    async tapEconomical() {
        await test.step('User click reserve room button economical offer', async () => {

            const economicalBtn = 
                this.locator.economicalOfferBtn;
            
                await expect(economicalBtn).toBeVisible();

            const [popup] = await Promise.all([
                this.page.waitForEvent('popup'),
                economicalBtn.click()
            ]);

            await popup.waitForLoadState('domcontentloaded');
            this.economicalPage = popup;
        });

        return this.economicalPage;
    }
}