import { test } from '@playwright/test';
import { PlanSpecialOfferPage } from '../pages/reservePage/reserveSpecialOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';

test.describe('Reserve Special Offer Test Back to Main Reserve Page', () => {
    test('Plan special offer then click back to main reserve page ', async ({ page }) => {

        const reservePage = new ReservePage(page);        
        await reservePage.goto();
        
        const specialOfferPopup = await reservePage.tapPlanSpecialOffer();
        const reserveSpecialPage = new PlanSpecialOfferPage(specialOfferPopup);
        await reserveSpecialPage.verifyTabSpecialOffer();
        
        const mainPage = await reserveSpecialPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);
        
        const [specialOfferPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapPlanSpecialOffer(),
        ]);
        
        const reserveSpecialPage2 = new PlanSpecialOfferPage(specialOfferPopup2);
        await reserveSpecialPage2.verifyTabSpecialOffer();
    });

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
        await reserveSpecialPage.fillConfirmationContact('no');
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
        const reserveSpecialPage = new PlanSpecialOfferPage(specialOfferPopup);

        await reserveSpecialPage.verifyTabSpecialOffer();
        await reserveSpecialPage.fillStay('2');
        await reserveSpecialPage.fillGuest('2');
        await reserveSpecialPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyUsernameRequired();
        await reserveSpecialPage.verifyConfirmationRequired();
        await reserveSpecialPage.fillName('Bram');
        await reserveSpecialPage.fillConfirmationContact('email');
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

    test('Plan special offer page with contact by Telephone', async ({ page }) => {
        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const specialOfferPopup = await reservePage.tapPlanSpecialOffer();
        const reserveSpecialPage = new PlanSpecialOfferPage(specialOfferPopup);

        await reserveSpecialPage.verifyTabSpecialOffer();
        await reserveSpecialPage.fillStay('2');
        await reserveSpecialPage.fillGuest('2');
        await reserveSpecialPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyUsernameRequired();
        await reserveSpecialPage.verifyConfirmationRequired();
        await reserveSpecialPage.fillName('Bram');
        await reserveSpecialPage.fillConfirmationContact('tel');
        await reserveSpecialPage.fillComment('The comment');
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyTelRequired();
        await reserveSpecialPage.fillTelephone('12345');
        await reserveSpecialPage.verifyTelInvalid();
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.fillTelephone('12345678901');
        await reserveSpecialPage.verifyTelValid();
        await reserveSpecialPage.tapConfirmReserveBtn();
        
        await reserveSpecialPage.verifyConfirmationSpecialOffer();
        await reserveSpecialPage.tapSubmitReservationBtn();
        await reserveSpecialPage.verifySubmitReservation();
        await reserveSpecialPage.tapCloseBtn();
    });
});