import { test } from '@playwright/test';
import { PlanWithDinnerPage } from '../pages/reservePage/reserveWithDinnerOffer.js';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { HomePage } from '../pages/homePage/action.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { LogoutPage } from '../pages/logoutPage/action.js'

test.describe('Reserve With Dinner Page', () => {
    test('With dinner page with contact by None', async ({ page }) => {

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

        const withDinnerPopup = await reservePage.tapWithDinner();
        const reserveWithDinnerPage = new PlanWithDinnerPage(withDinnerPopup);
        await reserveWithDinnerPage.verifyTabWithDinnernOffer();

        const mainPage = await reserveWithDinnerPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);

        const [withDinnerPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapWithDinner(),
        ]);

        const reserveWithDinnerPage2 = new PlanWithDinnerPage(withDinnerPopup2);
        await reserveWithDinnerPage2.verifyTabWithDinnernOffer();
        
        await reserveWithDinnerPage2.fillStay('2');
        await reserveWithDinnerPage2.fillGuest('2');
        await reserveWithDinnerPage2.additionalPlan(['Breakfast','Early check-in', 'Sightseeing']);
        await reserveWithDinnerPage2.fillName('Bram');
        await reserveWithDinnerPage2.fillConfirmationContact('no');
        await reserveWithDinnerPage2.fillComment('The comment');
        await reserveWithDinnerPage2.tapConfirmReserveBtn();

        await reserveWithDinnerPage2.verifyConfirmationWithDinnerOffer();
        await reserveWithDinnerPage2.tapSubmitReservationBtn();
        await reserveWithDinnerPage2.verifySubmitReservation();
        await reserveWithDinnerPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });

    test('With dinner page with contact by Email', async ({ page }) => {

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

        const withDinnerPopup = await reservePage.tapWithDinner();
        const reserveWithDinnerPage = new PlanWithDinnerPage(withDinnerPopup);
        await reserveWithDinnerPage.verifyTabWithDinnernOffer();

        const mainPage = await reserveWithDinnerPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);

        const [withDinnerPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapWithDinner(),
        ]);

        const reserveWithDinnerPage2 = new PlanWithDinnerPage(withDinnerPopup2);
        await reserveWithDinnerPage2.verifyTabWithDinnernOffer();
        
        await reserveWithDinnerPage2.fillStay('2');
        await reserveWithDinnerPage2.fillGuest('2');
        await reserveWithDinnerPage2.additionalPlan(['Breakfast','Early check-in', 'Sightseeing']);
        await reserveWithDinnerPage2.fillName('Bram');
        await reserveWithDinnerPage2.fillConfirmationContact('email');
        await reserveWithDinnerPage2.fillComment('The comment');
        await reserveWithDinnerPage2.tapConfirmReserveBtn();

        await reserveWithDinnerPage2.verifyConfirmationWithDinnerOffer();
        await reserveWithDinnerPage2.tapSubmitReservationBtn();
        await reserveWithDinnerPage2.verifySubmitReservation();
        await reserveWithDinnerPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });

    test('With dinner page with contact by Telephone', async ({ page }) => {

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

        const withDinnerPopup = await reservePage.tapWithDinner();
        const reserveWithDinnerPage = new PlanWithDinnerPage(withDinnerPopup);
        await reserveWithDinnerPage.verifyTabWithDinnernOffer();

        const mainPage = await reserveWithDinnerPage.backToMainPage(page);
        const reservePage2 = new ReservePage(mainPage);

        const [withDinnerPopup2] = await Promise.all([
            mainPage.waitForEvent('popup'),
            reservePage2.tapWithDinner(),
        ]);

        const reserveWithDinnerPage2 = new PlanWithDinnerPage(withDinnerPopup2);
        await reserveWithDinnerPage2.verifyTabWithDinnernOffer();
        
        await reserveWithDinnerPage2.fillStay('2');
        await reserveWithDinnerPage2.fillGuest('2');
        await reserveWithDinnerPage2.additionalPlan(['Breakfast','Early check-in', 'Sightseeing']);
        await reserveWithDinnerPage2.fillName('Bram');
        await reserveWithDinnerPage2.fillConfirmationContact('tel');
        await reserveWithDinnerPage2.fillComment('The comment');
        await reserveWithDinnerPage2.tapConfirmReserveBtn();

        await reserveWithDinnerPage2.verifyConfirmationWithDinnerOffer();
        await reserveWithDinnerPage2.tapSubmitReservationBtn();
        await reserveWithDinnerPage2.verifySubmitReservation();
        await reserveWithDinnerPage2.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });
});