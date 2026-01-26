import { test } from '@playwright/test';
import { PlanForHoneymoonOfferPage } from '../pages/reservePage/reserveForHoneymoonOffer.js';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { HomePage } from '../pages/homePage/action.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { signupUser } from '../data/signup/signup.js';
import { SignUpPage } from '../pages/signupPage/signup.js';
import { LogoutPage } from '../pages/logoutPage/action.js';

test.describe('Reserve for Honeymoon Page', () => {

    test('Plan for honeymoon page with contact by None', async ({ page }) => {

        const homePage = new HomePage(page);
        const signupPage = new SignUpPage(page);
        const reservePage = new ReservePage(page);
        const logoutPage = new LogoutPage(page);

        await homePage.gotoHomeUrl();
        await signupPage.tapSignUpMenuBtn();
        await signupPage.verifySignupPage();
        
        await signupPage.fillEmail(signupUser.valid.email);
        await signupPage.fillPassword(signupUser.valid.password);
        await signupPage.fillPwdConfirm(signupUser.valid.pwdConfirm);
        await signupPage.fillName(signupUser.username.name);
        await signupPage.selectNormalMembership();
        await signupPage.fillAddress(signupUser.address.place);
        await signupPage.fillTel(signupUser.tel.valid);
        await signupPage.selectGender(signupUser.gender.selected);
        await signupPage.fillDateofBirth(signupUser.dateOfBirth.date);
        await signupPage.checkReceiveNotification();
        await signupPage.tapSignupBtn();
        await signupPage.verifySignupMyPage();

        await reservePage.tapReserveMenuBtn();
        const forHoneymoonPopup = await reservePage.tapPlanForHoneymoon();
        const reserveForHoneymoonPage = new PlanForHoneymoonOfferPage(forHoneymoonPopup);

        await reserveForHoneymoonPage.verifyTabForHoneymoonOffer();
        await reserveForHoneymoonPage.fillStay('2');
        await reserveForHoneymoonPage.fillGuest('2');
        await reserveForHoneymoonPage.additionalPlan(['Breakfast', 'Sightseeing']);
        await reserveForHoneymoonPage.fillName('Bram');
        await reserveForHoneymoonPage.fillConfirmationContact('no');
        await reserveForHoneymoonPage.fillComment('The comment');
        await reserveForHoneymoonPage.tapConfirmReserveBtn();

        await reserveForHoneymoonPage.verifyConfirmationForHoneymoonOffer();
        await reserveForHoneymoonPage.tapSubmitReservationBtn();
        await reserveForHoneymoonPage.verifySubmitReservation();
        await reserveForHoneymoonPage.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });

    test('Plan for honeymoon page with contact by Email', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const reservePage = new ReservePage(page);

        await homePage.gotoHomeUrl();
        await loginPage.tapLoginMenuBtn();
        await loginPage.verifyLoginOage();
        await loginPage.fillEmail(loginUser.validUserPremium.email);
        await loginPage.fillPassword(loginUser.validUserPremium.password);
        await loginPage.tapLoginBtn();
        await loginPage.verifySuccessLogin();

        await reservePage.tapReserveMenuBtn();
        await reservePage.verifyReservePage();

        const forHoneymoonPopup = await reservePage.tapPlanForHoneymoon();
        const reserveForHoneymoonPage = new PlanForHoneymoonOfferPage(forHoneymoonPopup);
        await reserveForHoneymoonPage.verifyTabForHoneymoonOffer();

        await reserveForHoneymoonPage.verifyTabForHoneymoonOffer();
        await reserveForHoneymoonPage.fillStay('2');
        await reserveForHoneymoonPage.fillGuest('2');
        await reserveForHoneymoonPage.additionalPlan(['Early check-in', 'Sightseeing']);
        await reserveForHoneymoonPage.fillName('Bram');
        await reserveForHoneymoonPage.fillConfirmationContact('email');
        await reserveForHoneymoonPage.fillComment('The comment');
        await reserveForHoneymoonPage.tapConfirmReserveBtn();

        await reserveForHoneymoonPage.verifyConfirmationForHoneymoonOffer();
        await reserveForHoneymoonPage.tapSubmitReservationBtn();
        await reserveForHoneymoonPage.verifySubmitReservation();
        await reserveForHoneymoonPage.tapCloseBtn();
    });


    test('Plan for honeymoon page with contact by Telephone', async ({ page }) => {

        const homePage = new HomePage(page);
        const reservePage = new ReservePage(page);

        await homePage.gotoHomeUrl();
        await homePage.tapReserveMenuBtnFromHome();
        await reservePage.verifyReservePage();

        const forHoneymoonPopup = await reservePage.tapPlanForHoneymoon();
        const reserveForHoneymoonPage = new PlanForHoneymoonOfferPage(forHoneymoonPopup);
        
        await reserveForHoneymoonPage.verifyTabForHoneymoonOffer();
        await reserveForHoneymoonPage.fillStay('2');
        await reserveForHoneymoonPage.fillGuest('2');
        await reserveForHoneymoonPage.additionalPlan(['Breakfast', 'Sightseeing']);
        await reserveForHoneymoonPage.tapConfirmReserveBtn();
        await reserveForHoneymoonPage.verifyUsernameRequired();
        await reserveForHoneymoonPage.verifyConfirmationRequired();
        await reserveForHoneymoonPage.fillName('Bram');
        await reserveForHoneymoonPage.fillConfirmationContact('tel');
        await reserveForHoneymoonPage.fillComment('The comment');
        await reserveForHoneymoonPage.tapConfirmReserveBtn();
        await reserveForHoneymoonPage.verifyTelRequired();
        await reserveForHoneymoonPage.fillTelephone('12345');
        await reserveForHoneymoonPage.verifyTelInvalid();
        await reserveForHoneymoonPage.tapConfirmReserveBtn();
        await reserveForHoneymoonPage.fillTelephone('12345678901');
        await reserveForHoneymoonPage.verifyTelValid();
        await reserveForHoneymoonPage.tapConfirmReserveBtn();

        await reserveForHoneymoonPage.verifyConfirmationForHoneymoonOffer();
        await reserveForHoneymoonPage.tapSubmitReservationBtn();
        await reserveForHoneymoonPage.verifySubmitReservation();
        await reserveForHoneymoonPage.tapCloseBtn();
    });
});