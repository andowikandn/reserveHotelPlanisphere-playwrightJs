import { test } from '@playwright/test';
import { PlanBusinessTripPage } from '../pages/reservePage/reserveBusinessTripOffer.js';
import { ReservePage } from '../pages/reservePage/reservePage';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { SignUpPage } from '../pages/signupPage/signup.js';
import { signupUser } from '../data/signup/signup.js';

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
        await reserveBusinessTripPage.fillStay('2');
        await reserveBusinessTripPage.fillGuest('2');
        await reserveBusinessTripPage.additionalPlan(['Early check-in','Sightseeing']);
        await reserveBusinessTripPage.fillName('Budi Pekerti');
        await reserveBusinessTripPage.fillConfirmationContact('no');
        await reserveBusinessTripPage.fillComment('The comment');
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
        await reserveBusinessTripPage.fillStay('2');
        await reserveBusinessTripPage.fillGuest('2');
        await reserveBusinessTripPage.additionalPlan(['Breakfast','Early check-in']);
        await reserveBusinessTripPage.fillName('Budi Pekerti');
        await reserveBusinessTripPage.fillConfirmationContact('email');
        await reserveBusinessTripPage.fillComment('The comment');
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
        await reserveBusinessTripPage.fillStay('4');
        await reserveBusinessTripPage.fillGuest('2');
        await reserveBusinessTripPage.additionalPlan(['Breakfast','Early check-in']);
        await reserveBusinessTripPage.tapConfirmReserveBtn();
        await reserveBusinessTripPage.verifyUsernameRequired();
        await reserveBusinessTripPage.verifyConfirmationRequired();
        await reserveBusinessTripPage.fillName('Ciplay GoGreen');
        await reserveBusinessTripPage.fillConfirmationContact('tel');
        await reserveBusinessTripPage.fillComment('The comment');
        await reserveBusinessTripPage.tapConfirmReserveBtn();
        await reserveBusinessTripPage.verifyTelRequired();
        await reserveBusinessTripPage.fillTelephone('12345');
        await reserveBusinessTripPage.verifyTelInvalid();
        await reserveBusinessTripPage.tapConfirmReserveBtn();
        await reserveBusinessTripPage.fillTelephone('12345123450')
        await reserveBusinessTripPage.verifyTelValid();
        await reserveBusinessTripPage.tapConfirmReserveBtn();

        await reserveBusinessTripPage.verifyConfirmationBusinessTripOffer();
        await reserveBusinessTripPage.tapSubmitReservationBtn();
        await reserveBusinessTripPage.verifySubmitReservation();
        await reserveBusinessTripPage.tapCloseBtn();``
    });
})