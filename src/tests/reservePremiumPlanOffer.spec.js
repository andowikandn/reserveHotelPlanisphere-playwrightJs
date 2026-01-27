import { test } from '@playwright/test';
import { PremiumPlanOfferPage } from '../pages/reservePage/reservePremiumPlanOffer.js';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { HomePage } from '../pages/homePage/action.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { LogoutPage } from '../pages/logoutPage/action.js'

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
        await reservePremiumPlanPage.fillStay('2');
        await reservePremiumPlanPage.fillGuest('2');
        await reservePremiumPlanPage.additionalPlan(['Early check-in', 'Sightseeing']);
        await reservePremiumPlanPage.fillName('Bram');
        await reservePremiumPlanPage.fillConfirmationContact('no');
        await reservePremiumPlanPage.fillComment('The comment');
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
        
        await reservePremiumPlanPage2.fillStay('2');
        await reservePremiumPlanPage2.fillGuest('2');
        await reservePremiumPlanPage2.additionalPlan(['Early check-in', 'Breakfast']);
        await reservePremiumPlanPage2.fillName('Bram');
        await reservePremiumPlanPage2.fillConfirmationContact('email');
        await reservePremiumPlanPage2.fillComment('The comment');
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
        
        await reservePremiumPlanPage2.fillStay('2');
        await reservePremiumPlanPage2.fillGuest('2');
        await reservePremiumPlanPage2.additionalPlan(['Sightseeing', 'Breakfast']);
        await reservePremiumPlanPage2.fillName('Bram');
        await reservePremiumPlanPage2.fillConfirmationContact('tel');
        await reservePremiumPlanPage2.fillComment('The comment');
        await reservePremiumPlanPage2.tapConfirmReserveBtn();

        await reservePremiumPlanPage2.verifyConfirmationPremiumPlanOffer();
        await reservePremiumPlanPage2.tapSubmitReservationBtn();
        await reservePremiumPlanPage2.verifySubmitReservation();
        await reservePremiumPlanPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });
});