import { test } from '@playwright/test';
import { PremiumPlanOfferPage } from '../pages/reservePage/reservePremiumPlanOffer.js';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { HomePage } from '../pages/homePage/action.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { LogoutPage } from '../pages/logoutPage/action.js';
import { reserveForm } from '../data/reserve/reserve.js';

test.describe('Reserve Premium Plan Page', () => {
    test('Premium plan page with conctact by None', async ({ page }) => {
        
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const reservePage = new ReservePage(page);
        const logoutPage = new LogoutPage(page);

        await homePage.gotoHomeUrl();
        await loginPage.tapLoginMenuBtn();
        await loginPage.verifyLoginPage();
        await loginPage.fillEmail(loginUser.validUserPremium.email);
        await loginPage.fillPassword(loginUser.validUserPremium.password);
        await loginPage.tapLoginBtn();
        await loginPage.verifySuccessLogin();

        await reservePage.tapReserveMenuBtn();
        await reservePage.verifyReservePage();

        const premiumPlanPopup = await reservePage.tapPlanPremium();
        const reservePremiumPlanPage = new PremiumPlanOfferPage(premiumPlanPopup);
        
        await reservePremiumPlanPage.verifyTabPremiumPlanOffer();
        await reservePremiumPlanPage.fillStay(reserveForm.stay);
        await reservePremiumPlanPage.fillGuest(reserveForm.guest);
        await reservePremiumPlanPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reservePremiumPlanPage.fillName(reserveForm.name);
        await reservePremiumPlanPage.fillConfirmationContact(reserveForm.contact.byNone);
        await reservePremiumPlanPage.fillComment(reserveForm.comment);
        await reservePremiumPlanPage.tapConfirmReserveBtn();

        await reservePremiumPlanPage.verifyConfirmationPremiumPlanOffer();
        await reservePremiumPlanPage.tapSubmitReservationBtn();
        await reservePremiumPlanPage.verifySubmitReservation();
        await reservePremiumPlanPage.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });

    test('Premium plan page with conctact by Email', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const reservePage = new ReservePage(page);
        const logoutPage = new LogoutPage(page);

        await homePage.gotoHomeUrl();
        await loginPage.tapLoginMenuBtn();
        await loginPage.verifyLoginPage();
        await loginPage.fillEmail(loginUser.validUserPremium.email);
        await loginPage.fillPassword(loginUser.validUserPremium.password);
        await loginPage.tapLoginBtn();
        await loginPage.verifySuccessLogin();

        await reservePage.tapReserveMenuBtn();
        await reservePage.verifyReservePage();

        const premiumPlanPopup = await reservePage.tapPlanPremium();
        const reservePremiumPlanPage = new PremiumPlanOfferPage(premiumPlanPopup);
        await reservePremiumPlanPage.verifyTabPremiumPlanOffer();

        const mainPage = await reservePremiumPlanPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);

        const [premiumPlanPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapPlanPremium(),
        ]);

        const reservePremiumPlanPage2 = new PremiumPlanOfferPage(premiumPlanPopup2);
        await reservePremiumPlanPage2.verifyTabPremiumPlanOffer();
        
        await reservePremiumPlanPage2.fillStay(reserveForm.stay);
        await reservePremiumPlanPage2.fillGuest(reserveForm.guest);
        await reservePremiumPlanPage2.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reservePremiumPlanPage2.fillName(reserveForm.name);
        await reservePremiumPlanPage2.fillConfirmationContact(reserveForm.contact.byEmail);
        await reservePremiumPlanPage2.fillComment(reserveForm.comment);
        await reservePremiumPlanPage2.tapConfirmReserveBtn();

        await reservePremiumPlanPage2.verifyConfirmationPremiumPlanOffer();
        await reservePremiumPlanPage2.tapSubmitReservationBtn();
        await reservePremiumPlanPage2.verifySubmitReservation();
        await reservePremiumPlanPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });

    test('Premium plan page with conctact by Telephone', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const reservePage = new ReservePage(page);
        const logoutPage = new LogoutPage(page);

        await homePage.gotoHomeUrl();
        await loginPage.tapLoginMenuBtn();
        await loginPage.verifyLoginPage();
        await loginPage.fillEmail(loginUser.validUserPremium.email);
        await loginPage.fillPassword(loginUser.validUserPremium.password);
        await loginPage.tapLoginBtn();
        await loginPage.verifySuccessLogin();

        await reservePage.tapReserveMenuBtn();
        await reservePage.verifyReservePage();

        const premiumPlanPopup = await reservePage.tapPlanPremium();
        const reservePremiumPlanPage = new PremiumPlanOfferPage(premiumPlanPopup);
        await reservePremiumPlanPage.verifyTabPremiumPlanOffer();

        const mainPage = await reservePremiumPlanPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);

        const [premiumPlanPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapPlanPremium(),
        ]);

        const reservePremiumPlanPage2 = new PremiumPlanOfferPage(premiumPlanPopup2);
        await reservePremiumPlanPage2.verifyTabPremiumPlanOffer();
        
        await reservePremiumPlanPage2.fillStay(reserveForm.stay);
        await reservePremiumPlanPage2.fillGuest(reserveForm.guest);
        await reservePremiumPlanPage2.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reservePremiumPlanPage2.fillName(reserveForm.name);
        await reservePremiumPlanPage2.fillConfirmationContact(reserveForm.contact.byTelephone);
        await reservePremiumPlanPage2.fillComment(reserveForm.comment);
        await reservePremiumPlanPage2.tapConfirmReserveBtn();

        await reservePremiumPlanPage2.verifyConfirmationPremiumPlanOffer();
        await reservePremiumPlanPage2.tapSubmitReservationBtn();
        await reservePremiumPlanPage2.verifySubmitReservation();
        await reservePremiumPlanPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });
});