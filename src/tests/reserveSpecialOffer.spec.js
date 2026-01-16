import { test } from '@playwright/test';
import { PlanSpecialOfferPage } from '../pages/reservePage/reserveSpecialOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';

test.describe('Reserve Page', () => {
    test('Plan special offer page with contact by None', async ({ page }) => {
        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const specialOfferPopup = await reservePage.tapPlanSpecialOffer();
        const reserveSpecialPage = new PlanSpecialOfferPage(specialOfferPopup);

        await reserveSpecialPage.verifyTabSpecialOffer();
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyUsernameRequired();
        await reserveSpecialPage.verifyConfirmationRequired();
        await reserveSpecialPage.fillName('Bram');
        await reserveSpecialPage.fillConfirmation('no');
        await reserveSpecialPage.fillComment('The comment');
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyConfirmationSpecialOffer();
        await reserveSpecialPage.tapSubmitReservationBtn();
        await reserveSpecialPage.verifySubmitReservation();
        await reserveSpecialPage.tapCloseBtn();
    });

    test('Plan special offer page with contact by Email', async ({ page }) => {
        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const specialOfferPopup = await reservePage.tapPlanSpecialOffer();
        const reserveSpecialPage = 
            new PlanSpecialOfferPage(specialOfferPopup);

        await reserveSpecialPage.verifyTabSpecialOffer();
        await reserveSpecialPage.fillStay('2');
        await reserveSpecialPage.fillGuest('2');
        await reserveSpecialPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyUsernameRequired();
        await reserveSpecialPage.verifyConfirmationRequired();
        await reserveSpecialPage.fillName('Bram');
        await reserveSpecialPage.fillConfirmation('email');
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyEmailRequired();
        await reserveSpecialPage.fillComment('The comment');
        await reserveSpecialPage.fillEmail('halo.com');
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyEmailInvalid();
        await reserveSpecialPage.fillEmail('halo.@mail.com');
        await reserveSpecialPage.verifyEmailValid();
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyConfirmationSpecialOffer();
        await reserveSpecialPage.tapSubmitReservationBtn();
        await reserveSpecialPage.verifySubmitReservation();
        await reserveSpecialPage.tapCloseBtn();
    });
});