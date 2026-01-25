import { test } from '@playwright/test';
import { PlanStayWitouthMealsPage } from '../pages/reservePage/reserveStayNoMealsOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';

test.describe('Reserve Stay With Meals Page', () => {
    test('Plan stay with meals offer page with contact by None', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const stayWithoutMealsPopup = await reservePage.tapPlanStayWithoutMealsOffer();
        const reserveStayWithoutMealsPage = new PlanStayWitouthMealsPage(stayWithoutMealsPopup);

        await reserveStayWithoutMealsPage.verifyTabStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.fillStay('2');
        await reserveStayWithoutMealsPage.fillGuest('2');
        await reserveStayWithoutMealsPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyUsernameRequired();
        await reserveStayWithoutMealsPage.verifyConfirmationRequired();
        await reserveStayWithoutMealsPage.fillName('Bram');
        await reserveStayWithoutMealsPage.fillConfirmationContact('no');
        await reserveStayWithoutMealsPage.fillComment('The comment');
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        
        await reserveStayWithoutMealsPage.verifyConfirmationStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.tapSubmitReservationBtn();
        await reserveStayWithoutMealsPage.verifySubmitReservation();
        await reserveStayWithoutMealsPage.tapCloseBtn();
    });

    test('Plan stay with meals offer page with contact by Email', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const stayWithoutMealsPopup = await reservePage.tapPlanStayWithoutMealsOffer();
        const reserveStayWithoutMealsPage = new PlanStayWitouthMealsPage(stayWithoutMealsPopup);

        await reserveStayWithoutMealsPage.verifyTabStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.fillStay('2');
        await reserveStayWithoutMealsPage.fillGuest('2');
        await reserveStayWithoutMealsPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyUsernameRequired();
        await reserveStayWithoutMealsPage.verifyConfirmationRequired();
        await reserveStayWithoutMealsPage.fillName('Bram');
        await reserveStayWithoutMealsPage.fillConfirmationContact('email');
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyEmailRequired();
        await reserveStayWithoutMealsPage.fillComment('The comment');
        await reserveStayWithoutMealsPage.fillEmail('test.com');
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyEmailInvalid();
        await reserveStayWithoutMealsPage.fillEmail('test@mail.com');
        await reserveStayWithoutMealsPage.verifyEmailValid();
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        
        await reserveStayWithoutMealsPage.verifyConfirmationStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.tapSubmitReservationBtn();
        await reserveStayWithoutMealsPage.verifySubmitReservation();
        await reserveStayWithoutMealsPage.tapCloseBtn();
    });
    
    test('Plan stay with meals offer page with contact by Telephone', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const stayWithoutMealsPopup = await reservePage.tapPlanStayWithoutMealsOffer();
        const reserveStayWithoutMealsPage = new PlanStayWitouthMealsPage(stayWithoutMealsPopup);

        await reserveStayWithoutMealsPage.verifyTabStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.fillStay('2');
        await reserveStayWithoutMealsPage.fillGuest('2');
        await reserveStayWithoutMealsPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyUsernameRequired();
        await reserveStayWithoutMealsPage.verifyConfirmationRequired();
        await reserveStayWithoutMealsPage.fillName('Bram');
        await reserveStayWithoutMealsPage.fillConfirmationContact('tel');
        await reserveStayWithoutMealsPage.fillComment('The comment');
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyTelRequired();

        await reserveStayWithoutMealsPage.fillTelephone('12345');
        await reserveStayWithoutMealsPage.verifyTelInvalid();
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();

        await reserveStayWithoutMealsPage.fillTelephone('12345678901');
        await reserveStayWithoutMealsPage.verifyTelValid();
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        
        await reserveStayWithoutMealsPage.verifyConfirmationStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.tapSubmitReservationBtn();
        await reserveStayWithoutMealsPage.verifySubmitReservation();
        await reserveStayWithoutMealsPage.tapCloseBtn();
    });
});