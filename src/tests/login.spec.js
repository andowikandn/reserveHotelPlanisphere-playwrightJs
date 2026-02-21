import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { LogoutPage } from '../pages/logoutPage/action.js';
import { PlanStayWitouthMealsPage } from '../pages/reservePage/reserveStayNoMealsOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { reserveForm } from '../data/reserve/reserve.js';

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
        await reserveStayWithoutMealsPage.fillStay(reserveForm.stay);
        await reserveStayWithoutMealsPage.fillGuest(reserveForm.guest);
        await reserveStayWithoutMealsPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveStayWithoutMealsPage.fillName(reserveForm.name);
        await reserveStayWithoutMealsPage.fillConfirmationContact(reserveForm.contact.byEmail);
        await reserveStayWithoutMealsPage.fillComment(reserveForm.comment);
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
        await reserveStayWithoutMealsPage.fillStay(reserveForm.stay);
        await reserveStayWithoutMealsPage.fillGuest(reserveForm.guest);
        await reserveStayWithoutMealsPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveStayWithoutMealsPage.fillName(reserveForm.name);
        await reserveStayWithoutMealsPage.fillConfirmationContact(reserveForm.contact.byTelephone);
        await reserveStayWithoutMealsPage.fillComment(reserveForm.comment);
        await reserveStayWithoutMealsPage.tapConfirmReserveBtn();

        await reserveStayWithoutMealsPage.verifyConfirmationStayWithoutMealsOffer();
        await reserveStayWithoutMealsPage.tapSubmitReservationBtn();
        await reserveStayWithoutMealsPage.verifySubmitReservation();
        await reserveStayWithoutMealsPage.tapCloseBtn();
    });
    
});