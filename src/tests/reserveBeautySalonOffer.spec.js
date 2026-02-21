import { test } from '@playwright/test';
import { PlanBeautySalonPage } from '../pages/reservePage/reserveBeautySalonOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { reserveForm } from '../data/reserve/reserve.js';

test.describe('Reserve Beauty Salon Page', () => {
    test('Plan stay with beauty salon page with contact by None', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const beautySalonPopup = await reservePage.tapPlanBeautySalon();
        const reserveBeautySalonPage = new PlanBeautySalonPage(beautySalonPopup);

        await reserveBeautySalonPage.verifyTabBeautySalonOffer();
        await reserveBeautySalonPage.fillStay(reserveForm.stay);
        await reserveBeautySalonPage.fillGuest(reserveForm.guest);
        await reserveBeautySalonPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyUsernameRequired();
        await reserveBeautySalonPage.verifyConfirmationRequired();
        await reserveBeautySalonPage.fillName(reserveForm.name);
        await reserveBeautySalonPage.fillConfirmationContact(reserveForm.contact.byNone);
        await reserveBeautySalonPage.fillComment(reserveForm.comment);
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
        await reserveBeautySalonPage.fillStay(reserveForm.stay);
        await reserveBeautySalonPage.fillGuest(reserveForm.guest);
        await reserveBeautySalonPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyUsernameRequired();
        await reserveBeautySalonPage.verifyConfirmationRequired();
        await reserveBeautySalonPage.fillName(reserveForm.name);
        await reserveBeautySalonPage.fillConfirmationContact(reserveForm.contact.byEmail);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyEmailRequired();
        await reserveBeautySalonPage.fillComment(reserveForm.comment);
        await reserveBeautySalonPage.fillEmail(reserveForm.email.invalid);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyEmailInvalid();
        await reserveBeautySalonPage.fillEmail(reserveForm.email.valid);
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
        await reserveBeautySalonPage.fillStay(reserveForm.stay);
        await reserveBeautySalonPage.fillGuest(reserveForm.guest);
        await reserveBeautySalonPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyUsernameRequired();
        await reserveBeautySalonPage.verifyConfirmationRequired();
        await reserveBeautySalonPage.fillName(reserveForm.name);
        await reserveBeautySalonPage.fillConfirmationContact(reserveForm.contact.byTelephone);
        await reserveBeautySalonPage.fillComment(reserveForm.comment);
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        await reserveBeautySalonPage.verifyTelRequired();

        await reserveBeautySalonPage.fillTelephone(reserveForm.tel.invalid);
        await reserveBeautySalonPage.verifyTelInvalid();
        await reserveBeautySalonPage.tapConfirmReserveBtn();

        await reserveBeautySalonPage.fillTelephone(reserveForm.tel.valid);
        await reserveBeautySalonPage.verifyTelValid();
        await reserveBeautySalonPage.tapConfirmReserveBtn();
        
        await reserveBeautySalonPage.verifyConfirmationBeautySalonOffer();
        await reserveBeautySalonPage.tapSubmitReservationBtn();
        await reserveBeautySalonPage.verifySubmitReservation();
        await reserveBeautySalonPage.tapCloseBtn();
    });
});