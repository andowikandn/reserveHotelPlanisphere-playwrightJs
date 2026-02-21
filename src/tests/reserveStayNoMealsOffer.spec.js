import { test } from '@playwright/test';
import { PlanStayWitouthMealsPage } from '../pages/reservePage/reserveStayNoMealsOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { reserveForm } from '../data/reserve/reserve.js';

test.describe('Reserve Stay With Meals Page', () => {
    test('Plan stay with meals offer page with contact by None', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const stayWithoutMealsPopup = await reservePage.tapPlanStayWithoutMealsOffer();
        const reserveStayWithoutMealsPage = new PlanStayWitouthMealsPage(stayWithoutMealsPopup);

        await reserveStayWithoutMealsPage.verifyTabStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.fillStay(reserveForm.stay);
        await reserveStayWithoutMealsPage.fillGuest(reserveForm.guest);
        await reserveStayWithoutMealsPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyUsernameRequired();
        await reserveStayWithoutMealsPage.verifyConfirmationRequired();
        await reserveStayWithoutMealsPage.fillName(reserveForm.name);
        await reserveStayWithoutMealsPage.fillConfirmationContact(reserveForm.contact.byNone);
        await reserveStayWithoutMealsPage.fillComment(reserveForm.comment);
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
        await reserveStayWithoutMealsPage.fillStay(reserveForm.stay);
        await reserveStayWithoutMealsPage.fillGuest(reserveForm.guest);
        await reserveStayWithoutMealsPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyUsernameRequired();
        await reserveStayWithoutMealsPage.verifyConfirmationRequired();
        await reserveStayWithoutMealsPage.fillName(reserveForm.name);
        await reserveStayWithoutMealsPage.fillConfirmationContact(reserveForm.contact.byEmail);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyEmailRequired();
        await reserveStayWithoutMealsPage.fillComment(reserveForm.comment);
        await reserveStayWithoutMealsPage.fillEmail(reserveForm.email.invalid);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyEmailInvalid();
        await reserveStayWithoutMealsPage.fillEmail(reserveForm.email.valid);
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
        await reserveStayWithoutMealsPage.fillStay(reserveForm.stay);
        await reserveStayWithoutMealsPage.fillGuest(reserveForm.guest);
        await reserveStayWithoutMealsPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyUsernameRequired();
        await reserveStayWithoutMealsPage.verifyConfirmationRequired();
        await reserveStayWithoutMealsPage.fillName(reserveForm.name);
        await reserveStayWithoutMealsPage.fillConfirmationContact(reserveForm.contact.byTelephone);
        await reserveStayWithoutMealsPage.fillComment(reserveForm.comment);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        await reserveStayWithoutMealsPage.verifyTelRequired();

        await reserveStayWithoutMealsPage.fillTelephone(reserveForm.tel.invalid);
        await reserveStayWithoutMealsPage.verifyTelInvalid();
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();

        await reserveStayWithoutMealsPage.fillTelephone(reserveForm.tel.valid);
        await reserveStayWithoutMealsPage.verifyTelValid();
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();
        
        await reserveStayWithoutMealsPage.verifyConfirmationStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.tapSubmitReservationBtn();
        await reserveStayWithoutMealsPage.verifySubmitReservation();
        await reserveStayWithoutMealsPage.tapCloseBtn();
    });
});