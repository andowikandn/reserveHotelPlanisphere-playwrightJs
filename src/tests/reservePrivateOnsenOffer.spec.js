import { test } from '@playwright/test';
import { PlanPrivateOnsenOfferPage } from '../pages/reservePage/reservePrivateOnsenOffer.js';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { ReservePage } from '../pages/reservePage/reservePage.js';
import { signupUser } from '../data/signup/signup.js';
import { SignUpPage } from '../pages/signupPage/signup.js';

test.describe('Reserve with Private Onsen Page', () => {
    test('Plan with private onsen page with contact by None', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const reservePage = new ReservePage(page);
        
        await loginPage.goto();
        await loginPage.fillEmail(loginUser.validUserNormal.email);
        await loginPage.fillPassword(loginUser.validUserNormal.password);
        await loginPage.tapLoginBtn();
        await loginPage.verifySuccessLogin();
        await reservePage.tapReserveMenuBtn();

        const privateOnsenPage = await reservePage.tapPlanPrivateOnsen();
        const reservePrivateOnsenPage = new PlanPrivateOnsenOfferPage(privateOnsenPage);

        await reservePrivateOnsenPage.verifyTabPrivateOnsenOffer();
        await reservePrivateOnsenPage.fillStay('2');
        await reservePrivateOnsenPage.fillGuest('2');
        await reservePrivateOnsenPage.additionalPlan(['Early check-in','Sightseeing']);
        await reservePrivateOnsenPage.fillName('Budi Pekerti');
        await reservePrivateOnsenPage.fillConfirmationContact('no');
        await reservePrivateOnsenPage.fillComment('The comment');
        await reservePrivateOnsenPage.tapConfirmReserveBtn();

        await reservePrivateOnsenPage.verifyConfirmationPrivateOnsenOffer();
        await reservePrivateOnsenPage.tapSubmitReservationBtn();
        await reservePrivateOnsenPage.verifySubmitReservation();
        await reservePrivateOnsenPage.tapCloseBtn();
    });

    test('Plan with private onsen page with contact by Email', async ({ page }) => {

        const signupPage = new SignUpPage(page);
        const reservePage = new ReservePage(page);

        await signupPage.goto();
        await signupPage.fillEmail(signupUser.valid.email);
        await signupPage.fillPassword(signupUser.valid.password);
        await signupPage.fillPwdConfirm(signupUser.valid.pwdConfirm);
        await signupPage.fillName(signupUser.username.name);
        await signupPage.fillAddress(signupUser.address.place);
        await signupPage.fillTel(signupUser.tel.valid);
        await signupPage.selectGender(signupUser.gender.selected);
        await signupPage.fillDateofBirth(signupUser.dateOfBirth.date);
        await signupPage.checkReceiveNotification();
        await signupPage.tapSignupBtn();
        await signupPage.verifySignupMyPage();

        await reservePage.tapReserveMenuBtn();
        const privateOnsenPopup = await reservePage.tapPlanPrivateOnsen();
        const reservePrivateOnsenPage = new PlanPrivateOnsenOfferPage(privateOnsenPopup);

        await reservePrivateOnsenPage.verifyTabPrivateOnsenOffer();
        await reservePrivateOnsenPage.fillStay('2');
        await reservePrivateOnsenPage.fillGuest('2');
        await reservePrivateOnsenPage.additionalPlan(['Breakfast','Sightseeing']);
        await reservePrivateOnsenPage.fillName('Bram');
        await reservePrivateOnsenPage.fillConfirmationContact('email');
        await reservePrivateOnsenPage.fillComment('The comment');
        await reservePrivateOnsenPage.tapConfirmReserveBtn();
        
        await reservePrivateOnsenPage.verifyConfirmationPrivateOnsenOffer();
        await reservePrivateOnsenPage.tapSubmitReservationBtn();
        await reservePrivateOnsenPage.verifySubmitReservation();
        await reservePrivateOnsenPage.tapCloseBtn();
    });

    test('Plan with private onsen page with contact by Telephone', async ({ page }) => {

        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const privateOnsenPopup = await reservePage.tapPlanPrivateOnsen();
        const reservePrivateOnsenPage = new PlanPrivateOnsenOfferPage(privateOnsenPopup);

        await reservePrivateOnsenPage.verifyTabPrivateOnsenOffer();
        await reservePrivateOnsenPage.fillStay('2');
        await reservePrivateOnsenPage.fillGuest('2');
        await reservePrivateOnsenPage.additionalPlan(['Early check-in','Sightseeing']);
        await reservePrivateOnsenPage.fillName('Bram');
        await reservePrivateOnsenPage.fillConfirmationContact('tel');
        await reservePrivateOnsenPage.fillTelephone('12345123450');
        await reservePrivateOnsenPage.fillComment('The comment');
        await reservePrivateOnsenPage.tapConfirmReserveBtn();
        
        await reservePrivateOnsenPage.verifyConfirmationPrivateOnsenOffer();
        await reservePrivateOnsenPage.tapSubmitReservationBtn();
        await reservePrivateOnsenPage.verifySubmitReservation();
        await reservePrivateOnsenPage.tapCloseBtn();
    });
});