import { test } from '@playwright/test';
import { PlanBeautySalonPage } from '../pages/reservePage/reserveBeautySalonOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';

test.describe('Reserve Beauty Salon Page', () => {
    test('Plan stay with beauty salon page with contact by None', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const beautySalonPopup = await reservePage.tapPlanBeautySalon();
        const reserveBeautySalonPage = new PlanBeautySalonPage(beautySalonPopup);

        await reserveBeautySalonPage.verifyTabBeautySalonOffer();
        await reserveBeautySalonPage.fillStay('2');
        await reserveBeautySalonPage.fillGuest('2');
        await reserveBeautySalonPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyUsernameRequired();
        await reserveBeautySalonPage.verifyConfirmationRequired();
        await reserveBeautySalonPage.fillName('Bram');
        await reserveBeautySalonPage.fillConfirmationContact('no');
        await reserveBeautySalonPage.fillComment('The comment');
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        
        await reserveBeautySalonPage.verifyConfirmationBeautySalonOffer();
        await reserveBeautySalonPage.tapSubmitReservationBtn();
        await reserveBeautySalonPage.verifySubmitReservation();
        await reserveBeautySalonPage.tapCloseBtn();
    });

    test('Plan stay with beauty salon page with contact by Email', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const beautySalonPopup = await reservePage.tapPlanBeautySalon();
        const reserveBeautySalonPage = new PlanBeautySalonPage(beautySalonPopup);

        await reserveBeautySalonPage.verifyTabBeautySalonOffer();
        await reserveBeautySalonPage.fillStay('2');
        await reserveBeautySalonPage.fillGuest('2');
        await reserveBeautySalonPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyUsernameRequired();
        await reserveBeautySalonPage.verifyConfirmationRequired();
        await reserveBeautySalonPage.fillName('Bram');
        await reserveBeautySalonPage.fillConfirmationContact('email');
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyEmailRequired();
        await reserveBeautySalonPage.fillComment('The comment');
        await reserveBeautySalonPage.fillEmail('test.com');
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyEmailInvalid();
        await reserveBeautySalonPage.fillEmail('test@mail.com');
        await reserveBeautySalonPage.verifyEmailValid();
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        
        await reserveBeautySalonPage.verifyConfirmationBeautySalonOffer();
        await reserveBeautySalonPage.tapSubmitReservationBtn();
        await reserveBeautySalonPage.verifySubmitReservation();
        await reserveBeautySalonPage.tapCloseBtn();
    });
    
    test('Plan stay with beauty salon page with contact by Telephone', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const beautySalonPopup = await reservePage.tapPlanBeautySalon();
        const reserveBeautySalonPage = new PlanBeautySalonPage(beautySalonPopup);

        await reserveBeautySalonPage.verifyTabBeautySalonOffer();
        await reserveBeautySalonPage.fillStay('2');
        await reserveBeautySalonPage.fillGuest('2');
        await reserveBeautySalonPage.additionalPlan(['Breakfast','Sightseeing']);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyUsernameRequired();
        await reserveBeautySalonPage.verifyConfirmationRequired();
        await reserveBeautySalonPage.fillName('Bram');
        await reserveBeautySalonPage.fillConfirmationContact('tel');
        await reserveBeautySalonPage.fillComment('The comment');
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyTelRequired();

        await reserveBeautySalonPage.fillTelephone('12345');
        await reserveBeautySalonPage.verifyTelInvalid();
        await reserveBeautySalonPage.tapConfirmReserveBtn();

        await reserveBeautySalonPage.fillTelephone('12345678901');
        await reserveBeautySalonPage.verifyTelValid();
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        
        await reserveBeautySalonPage.verifyConfirmationBeautySalonOffer();
        await reserveBeautySalonPage.tapSubmitReservationBtn();
        await reserveBeautySalonPage.verifySubmitReservation();
        await reserveBeautySalonPage.tapCloseBtn();
    });
});