import { test } from '@playwright/test';
import { PlanBusinessTripPage } from '../pages/reservePage/reserveBusinessTripOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { SignUpPage } from '../pages/signupPage/signup.js';
import { signupUser } from '../data/signup/signup.js';
import { reserveForm } from '../data/reserve/reserve.js';

test.describe('Reserve Business Trip Page', async () => {
    test('Plan business trip offer with contact by None', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const reservePage = new ReservePage(page);

        await loginPage.goto();
        await loginPage.fillEmail(loginUser.validUserPremium.email);
        await loginPage.fillPassword(loginUser.validUserPremium.password);
        await loginPage.tapLoginBtn();
        await loginPage.verifySuccessLogin();
        await reservePage.tapReserveMenuBtn();

        const businessTripPopup = await reservePage.tapPlanBusinessTrip();
        const reserveBusinessTripPage = new PlanBusinessTripPage(businessTripPopup);

        await reserveBusinessTripPage.verifyTabBusinessTripOffer();
        await reserveBusinessTripPage.fillStay(reserveForm.stay);
        await reserveBusinessTripPage.fillGuest(reserveForm.guest);
        await reserveBusinessTripPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveBusinessTripPage.fillName(reserveForm.name);
        await reserveBusinessTripPage.fillConfirmationContact(reserveForm.contact.byNone);
        await reserveBusinessTripPage.fillComment(reserveForm.comment);
        await reserveBusinessTripPage.tapConfirmReserveBtn();

        await reserveBusinessTripPage.verifyConfirmationBusinessTripOffer();
        await reserveBusinessTripPage.tapSubmitReservationBtn();
        await reserveBusinessTripPage.verifySubmitReservation();
        await reserveBusinessTripPage.tapCloseBtn();
    });
});

test.describe('Reserve Business Trip Page', async () => {
    test('Plan business trip offer with contact by Email', async ({ page }) => {

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
        const businessTripPopup = await reservePage.tapPlanBusinessTrip();
        const reserveBusinessTripPage = new PlanBusinessTripPage(businessTripPopup);

        await reserveBusinessTripPage.verifyTabBusinessTripOffer();
        await reserveBusinessTripPage.fillStay(reserveForm.stay);
        await reserveBusinessTripPage.fillGuest(reserveForm.guest);
        await reserveBusinessTripPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveBusinessTripPage.fillName(reserveForm.name);
        await reserveBusinessTripPage.fillConfirmationContact(reserveForm.contact.byEmail);
        await reserveBusinessTripPage.fillComment(reserveForm.comment);
        await reserveBusinessTripPage.tapConfirmReserveBtn();

        await reserveBusinessTripPage.verifyConfirmationBusinessTripOffer();
        await reserveBusinessTripPage.tapSubmitReservationBtn();
        await reserveBusinessTripPage.verifySubmitReservation();
        await reserveBusinessTripPage.tapCloseBtn();
    });

    test('Plan business trip offer with contact Telephone', async ({ page }) => {
        
        const reservePage = new ReservePage(page);
        await reservePage.goto();

        const businessTripPopup = await reservePage.tapPlanBusinessTrip();
        const reserveBusinessTripPage = new PlanBusinessTripPage(businessTripPopup);

        await reserveBusinessTripPage.verifyTabBusinessTripOffer();
        await reserveBusinessTripPage.fillStay(reserveForm.stay);
        await reserveBusinessTripPage.fillGuest(reserveForm.guest);
        await reserveBusinessTripPage.additionalPlan([
            reserveForm.plans.breakfast,
            reserveForm.plans.earlyCheckIn,
            reserveForm.plans.sightseeing
        ]);
        await reserveBusinessTripPage.tapConfirmReserveBtn();
        await reserveBusinessTripPage.verifyUsernameRequired();
        await reserveBusinessTripPage.verifyConfirmationRequired();
        await reserveBusinessTripPage.fillName(reserveForm.name);
        await reserveBusinessTripPage.fillConfirmationContact(reserveForm.contact.byTelephone);
        await reserveBusinessTripPage.fillComment(reserveForm.comment);
        await reserveBusinessTripPage.tapConfirmReserveBtn();
        await reserveBusinessTripPage.verifyTelRequired();
        await reserveBusinessTripPage.fillTelephone(reserveForm.tel.invalid);
        await reserveBusinessTripPage.verifyTelInvalid();
        await reserveBusinessTripPage.tapConfirmReserveBtn();
        await reserveBusinessTripPage.fillTelephone(reserveForm.tel.valid)
        await reserveBusinessTripPage.verifyTelValid();
        await reserveBusinessTripPage.tapConfirmReserveBtn();

        await reserveBusinessTripPage.verifyConfirmationBusinessTripOffer();
        await reserveBusinessTripPage.tapSubmitReservationBtn();
        await reserveBusinessTripPage.verifySubmitReservation();
        await reserveBusinessTripPage.tapCloseBtn();
    });
})