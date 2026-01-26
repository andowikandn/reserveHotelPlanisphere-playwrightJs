import { test } from '@playwright/test';
import { PlanCompTicketOfferPage } from '../pages/reservePage/reserveCompTicketOffer.js';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { HomePage } from '../pages/homePage/action.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { signupUser } from '../data/signup/signup.js';
import { SignUpPage } from '../pages/signupPage/signup.js';
import { LogoutPage } from '../pages/logoutPage/action.js';

test.describe('Reserve With Complimentary Ticket Page', () => {

    test('Plan with complimetary ticket page with contact by None', async ({ page }) => {

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
        const compTicketPopup = await reservePage.tapPlanComplimentaryTicket();
        const reserveCompTicketPage = new PlanCompTicketOfferPage(compTicketPopup);

        await reserveCompTicketPage.verifyTabCompTicketOffer();
        await reserveCompTicketPage.fillStay('2');
        await reserveCompTicketPage.fillGuest('2');
        await reserveCompTicketPage.additionalPlan(['Breakfast', 'Sightseeing']);
        await reserveCompTicketPage.fillName('Bram');
        await reserveCompTicketPage.fillConfirmationContact('no');
        await reserveCompTicketPage.fillComment('The comment');
        await reserveCompTicketPage.tapConfirmReserveBtn();

        await reserveCompTicketPage.verifyConfirmationCompTicketOffer();
        await reserveCompTicketPage.tapSubmitReservationBtn();
        await reserveCompTicketPage.verifySubmitReservation();
        await reserveCompTicketPage.tapCloseBtn();
        await logoutPage.tapLogoutMenuBtn();
    });

    test('Plan with complimentary ticket page with contact by Email', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const reservePage = new ReservePage(page);

        await homePage.gotoHomeUrl();
        await loginPage.tapLoginMenuBtn();
        await loginPage.verifyLoginOage();
        await loginPage.fillEmail(loginUser.validUserNormal.email);
        await loginPage.fillPassword(loginUser.validUserNormal.password);
        await loginPage.tapLoginBtn();
        await loginPage.verifySuccessLogin();

        await reservePage.tapReserveMenuBtn();
        await reservePage.verifyReservePage();

        const compTicketPopup = await reservePage.tapPlanComplimentaryTicket();
        const reserveCompTicketPage = new PlanCompTicketOfferPage(compTicketPopup);
    
        await reserveCompTicketPage.verifyTabCompTicketOffer();
        await reserveCompTicketPage.fillStay('2');
        await reserveCompTicketPage.fillGuest('2');
        await reserveCompTicketPage.additionalPlan(['Early check-in', 'Sightseeing']);
        await reserveCompTicketPage.fillName('Bram');
        await reserveCompTicketPage.fillConfirmationContact('email');
        await reserveCompTicketPage.fillComment('The comment');
        await reserveCompTicketPage.tapConfirmReserveBtn();

        await reserveCompTicketPage.verifyConfirmationCompTicketOffer();
        await reserveCompTicketPage.tapSubmitReservationBtn();
        await reserveCompTicketPage.verifySubmitReservation();
        await reserveCompTicketPage.tapCloseBtn();
    });


    test('Plan with complimentary ticket page with contact by Telephone', async ({ page }) => {

        const homePage = new HomePage(page);
        const reservePage = new ReservePage(page);

        await homePage.gotoHomeUrl();
        await homePage.tapReserveMenuBtnFromHome();
        await reservePage.verifyReservePage();

        const compTicketPopup = await reservePage.tapPlanComplimentaryTicket();
        const reserveCompTicketPage = new PlanCompTicketOfferPage(compTicketPopup);
    
        await reserveCompTicketPage.verifyTabCompTicketOffer();
        await reserveCompTicketPage.fillStay('2');
        await reserveCompTicketPage.fillGuest('2');
        await reserveCompTicketPage.additionalPlan(['Breakfast', 'Sightseeing']);
        await reserveCompTicketPage.tapConfirmReserveBtn();
        await reserveCompTicketPage.verifyUsernameRequired();
        await reserveCompTicketPage.verifyConfirmationRequired();
        await reserveCompTicketPage.fillName('Bram');
        await reserveCompTicketPage.fillConfirmationContact('tel');
        await reserveCompTicketPage.fillComment('The comment');
        await reserveCompTicketPage.tapConfirmReserveBtn();
        await reserveCompTicketPage.verifyTelRequired();
        await reserveCompTicketPage.fillTelephone('12345');
        await reserveCompTicketPage.verifyTelInvalid();
        await reserveCompTicketPage.tapConfirmReserveBtn();
        await reserveCompTicketPage.fillTelephone('12345678901');
        await reserveCompTicketPage.verifyTelValid();
        await reserveCompTicketPage.tapConfirmReserveBtn();

        await reserveCompTicketPage.verifyConfirmationCompTicketOffer();
        await reserveCompTicketPage.tapSubmitReservationBtn();
        await reserveCompTicketPage.verifySubmitReservation();
        await reserveCompTicketPage.tapCloseBtn();
    });
});