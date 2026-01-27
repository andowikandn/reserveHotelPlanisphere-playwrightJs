import { test } from '@playwright/test';
import { PlanEconomicalPage } from '../pages/reservePage/reserveEconomicalOffer.js';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { HomePage } from '../pages/homePage/action.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { LogoutPage } from '../pages/logoutPage/action.js'

test.describe('Reserve Economical Page', () => {
    test('Economical page with contact by None', async ({ page }) => {

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

        const economicalPopup = await reservePage.tapEconomical();
        const reserveEconomicalPage = new PlanEconomicalPage(economicalPopup);
        await reserveEconomicalPage.verifyTabEconomicalOffer();

        const mainPage = await reserveEconomicalPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);

        const [economicalPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapEconomical(),
        ]);

        const reserveEconomicalPage2 = new PlanEconomicalPage(economicalPopup2);
        await reserveEconomicalPage2.verifyTabEconomicalOffer();
        
        await reserveEconomicalPage2.fillStay('2');
        await reserveEconomicalPage2.fillGuest('2');
        await reserveEconomicalPage2.additionalPlan(['Breakfast','Early check-in', 'Sightseeing']);
        await reserveEconomicalPage2.fillName('Bram');
        await reserveEconomicalPage2.fillConfirmationContact('no');
        await reserveEconomicalPage2.fillComment('The comment');
        await reserveEconomicalPage2.tapConfirmReserveBtn();

        await reserveEconomicalPage2.verifyConfirmationEconimicalOffer();
        await reserveEconomicalPage2.tapSubmitReservationBtn();
        await reserveEconomicalPage2.verifySubmitReservation();
        await reserveEconomicalPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();

    });

    test('Economical page with contact by Email', async ({ page }) => {

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

        const economicalPopup = await reservePage.tapEconomical();
        const reserveEconomicalPage = new PlanEconomicalPage(economicalPopup);
        await reserveEconomicalPage.verifyTabEconomicalOffer();

        const mainPage = await reserveEconomicalPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);

        const [economicalPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapEconomical(),
        ]);

        const reserveEconomicalPage2 = new PlanEconomicalPage(economicalPopup2);
        await reserveEconomicalPage2.verifyTabEconomicalOffer();
        
        await reserveEconomicalPage2.fillStay('2');
        await reserveEconomicalPage2.fillGuest('2');
        await reserveEconomicalPage2.additionalPlan(['Breakfast','Early check-in', 'Sightseeing']);
        await reserveEconomicalPage2.fillName('Bram');
        await reserveEconomicalPage2.fillConfirmationContact('email');
        await reserveEconomicalPage2.fillComment('The comment');
        await reserveEconomicalPage2.tapConfirmReserveBtn();

        await reserveEconomicalPage2.verifyConfirmationEconimicalOffer();
        await reserveEconomicalPage2.tapSubmitReservationBtn();
        await reserveEconomicalPage2.verifySubmitReservation();
        await reserveEconomicalPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();

    });

    test('Economical page with contact by Telephone', async ({ page }) => {

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

        const economicalPopup = await reservePage.tapEconomical();
        const reserveEconomicalPage = new PlanEconomicalPage(economicalPopup);
        await reserveEconomicalPage.verifyTabEconomicalOffer();

        const mainPage = await reserveEconomicalPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);

        const [economicalPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapEconomical(),
        ]);

        const reserveEconomicalPage2 = new PlanEconomicalPage(economicalPopup2);
        await reserveEconomicalPage2.verifyTabEconomicalOffer();
        
        await reserveEconomicalPage2.fillStay('2');
        await reserveEconomicalPage2.fillGuest('2');
        await reserveEconomicalPage2.additionalPlan(['Breakfast','Early check-in', 'Sightseeing']);
        await reserveEconomicalPage2.fillName('Bram');
        await reserveEconomicalPage2.fillConfirmationContact('tel');
        await reserveEconomicalPage2.fillComment('The comment');
        await reserveEconomicalPage2.tapConfirmReserveBtn();

        await reserveEconomicalPage2.verifyConfirmationEconimicalOffer();
        await reserveEconomicalPage2.tapSubmitReservationBtn();
        await reserveEconomicalPage2.verifySubmitReservation();
        await reserveEconomicalPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });

});