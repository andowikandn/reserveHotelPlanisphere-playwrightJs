import { test } from '@playwright/test';
import { PlanSpecialOfferPage } from '../pages/reservePage/reserveSpecialOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { reserveForm } from '../data/reserve/reserve.js';

test.describe('Reserve Special Offer Test Back to Main Reserve Page', () => {
    test('Plan special offer then click back to main reserve page contact by Email', async ({ page }) => {

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

        await reserveSpecialPage2.fillStay(reserveForm.stay);
        await reserveSpecialPage2.fillGuest(reserveForm.guest);
        await reserveSpecialPage2.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveSpecialPage2.tapConfirmReserveBtn();
        await reserveSpecialPage2.verifyUsernameRequired();
        await reserveSpecialPage2.verifyConfirmationRequired();
        await reserveSpecialPage2.fillName(reserveForm.name);
        await reserveSpecialPage2.fillConfirmationContact(reserveForm.contact.byEmail);
        await reserveSpecialPage2.tapConfirmReserveBtn();
        await reserveSpecialPage2.verifyEmailRequired();
        await reserveSpecialPage2.fillComment(reserveForm.comment);
        await reserveSpecialPage2.fillEmail(reserveForm.email.invalid);
        await reserveSpecialPage2.tapConfirmReserveBtn();
        await reserveSpecialPage2.verifyEmailInvalid();
        await reserveSpecialPage2.fillEmail(reserveForm.email.valid);
        await reserveSpecialPage2.verifyEmailValid();
        await reserveSpecialPage2.tapConfirmReserveBtn();
        await reserveSpecialPage2.verifyConfirmationSpecialOffer();
        await reserveSpecialPage2.tapSubmitReservationBtn();
        await reserveSpecialPage2.verifySubmitReservation();
        await reserveSpecialPage2.tapCloseBtn();
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
        await reserveSpecialPage.fillName(reserveForm.name);
        await reserveSpecialPage.fillConfirmationContact(reserveForm.contact.byNone);
        await reserveSpecialPage.fillComment(reserveForm.comment);
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
        await reserveSpecialPage.fillStay(reserveForm.stay);
        await reserveSpecialPage.fillGuest(reserveForm.guest);
        await reserveSpecialPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyUsernameRequired();
        await reserveSpecialPage.verifyConfirmationRequired();
        await reserveSpecialPage.fillName(reserveForm.name);
        await reserveSpecialPage.fillConfirmationContact(reserveForm.contact.byEmail);
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyEmailRequired();
        await reserveSpecialPage.fillComment(reserveForm.comment);
        await reserveSpecialPage.fillEmail(reserveForm.email.invalid);
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyEmailInvalid();
        await reserveSpecialPage.fillEmail(reserveForm.email.valid);
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
        await reserveSpecialPage.fillStay(reserveForm.stay);
        await reserveSpecialPage.fillGuest(reserveForm.guest);
        await reserveSpecialPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyUsernameRequired();
        await reserveSpecialPage.verifyConfirmationRequired();
        await reserveSpecialPage.fillName(reserveForm.name);
        await reserveSpecialPage.fillConfirmationContact(reserveForm.contact.byTelephone);
        await reserveSpecialPage.fillComment(reserveForm.comment);
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.verifyTelRequired();
        await reserveSpecialPage.fillTelephone(reserveForm.tel.invalid);
        await reserveSpecialPage.verifyTelInvalid();
        await reserveSpecialPage.tapConfirmReserveBtn();
        await reserveSpecialPage.fillTelephone(reserveForm.tel.valid);
        await reserveSpecialPage.verifyTelValid();
        await reserveSpecialPage.tapConfirmReserveBtn();
        
        await reserveSpecialPage.verifyConfirmationSpecialOffer();
        await reserveSpecialPage.tapSubmitReservationBtn();
        await reserveSpecialPage.verifySubmitReservation();
        await reserveSpecialPage.tapCloseBtn();
    });
});