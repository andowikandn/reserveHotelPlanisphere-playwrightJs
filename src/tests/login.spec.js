import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { LogoutPage } from '../pages/logoutPage/action.js';
import { PlanStayWitouthMealsPage } from '../pages/reservePage/reserveStayNoMealsOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';

test.describe('Login Page', () => {
    test('Login error required field', async ({ page }) => {
        const action = new LoginPage(page);
        await action.gotoBaseUrl();
        await action.tapLoginMenuBtn();
        await action.fillEmail(loginUser.empty.email);
        await action.fillPassword(loginUser.empty.password);
        await action.tapLoginBtn();
        await action.verifyErrorMessage();
    });
    
    test('Login error message invalid field', async ({ page }) => {
        const action = new LoginPage(page);
        await action.goto();
        await action.fillEmail(loginUser.invalid.email);
        await action.fillPassword(loginUser.invalid.password);
        await action.tapLoginBtn();
        await action.verifyErrorMessage();
    });

    test('Login valid field with user premium', async ({ page }) => {
        const action = new LoginPage(page);
        const logoutBtn = new LogoutPage(page);
        await action.goto();
        await action.fillEmail(loginUser.validUserPremium.email);
        await action.fillPassword(loginUser.validUserPremium.password);
        await action.tapLoginBtn();
        await action.verifySuccessLogin();
        await logoutBtn.tapLogoutMenuBtn();
    });
    
    test('Login valid field with user normal', async ({ page }) => {
        const action = new LoginPage(page);
        const logoutBtn = new LogoutPage(page);
        await action.goto();
        await action.fillEmail(loginUser.validUserNormal.email);
        await action.fillPassword(loginUser.validUserNormal.password);
        await action.tapLoginBtn();
        await action.verifySuccessLogin();
        await logoutBtn.tapLogoutMenuBtn();
    });

    test('Login valid field with user normal reserve stay without no meals', async ({ page }) => {
        const action = new LoginPage(page);
        const reservePage = new ReservePage(page);

        await action.goto();
        await action.fillEmail(loginUser.validUserNormal.email);
        await action.fillPassword(loginUser.validUserNormal.password);
        await action.tapLoginBtn();
        await action.verifySuccessLogin();
        await reservePage.tapReserveMenuBtn();

        const stayWithoutMealsPopup = await reservePage.tapPlanStayWithoutMealsOffer();
        const reserveStayWithoutMealsPage = new PlanStayWitouthMealsPage(stayWithoutMealsPopup);

        await reserveStayWithoutMealsPage.verifyTabStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.fillStay('2');
        await reserveStayWithoutMealsPage.fillGuest('2');
        await reserveStayWithoutMealsPage.additionalPlan(['Early check-in','Sightseeing']);
        await reserveStayWithoutMealsPage.fillName('Budi Pekerti');
        await reserveStayWithoutMealsPage.fillConfirmationContact('email');
        await reserveStayWithoutMealsPage.fillComment('The comment');
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();

        await reserveStayWithoutMealsPage.verifyConfirmationStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.tapSubmitReservationBtn();
        await reserveStayWithoutMealsPage.verifySubmitReservation();
        await reserveStayWithoutMealsPage.tapCloseBtn();
    });
    
    test('Login valid field with user premium reserve stay without no meals', async ({ page }) => {
        const action = new LoginPage(page);
        const reservePage = new ReservePage(page);

        await action.goto();
        await action.fillEmail(loginUser.validUserPremium.email);
        await action.fillPassword(loginUser.validUserPremium.password);
        await action.tapLoginBtn();
        await action.verifySuccessLogin();
        await reservePage.tapReserveMenuBtn();

        const stayWithoutMealsPopup = await reservePage.tapPlanStayWithoutMealsOffer();
        const reserveStayWithoutMealsPage = new PlanStayWitouthMealsPage(stayWithoutMealsPopup);

        await reserveStayWithoutMealsPage.verifyTabStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.fillStay('2');
        await reserveStayWithoutMealsPage.fillGuest('2');
        await reserveStayWithoutMealsPage.additionalPlan(['Early check-in','Breakfast']);
        await reserveStayWithoutMealsPage.fillName('Budi Pekerti');
        await reserveStayWithoutMealsPage.fillConfirmationContact('tel');
        await reserveStayWithoutMealsPage.fillComment('The comment');
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();

        await reserveStayWithoutMealsPage.verifyConfirmationStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.tapSubmitReservationBtn();
        await reserveStayWithoutMealsPage.verifySubmitReservation();
        await reserveStayWithoutMealsPage.tapCloseBtn();
    });
    
});