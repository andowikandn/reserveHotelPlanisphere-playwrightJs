import { test } from '@playwright/test';
import { SignUpPage } from '../pages/signupPage/signup.js';
import { signupUser } from '../data/signup/signup.js';

test.describe('SignUp Page Validation Required and Invalid Field',() => {    
    test('User signup with required field error message', async ({ page }) => {

        const action = new SignUpPage(page);

        await action.goto();
        await action.tapSignupBtn();
        await action.verifyRequiredField();
    });

    test('User signup with invalid email', async ({ page }) => {

        const action = new SignUpPage(page);

        await action.goto();
        await action.fillEmail(signupUser.invalid.email);
        await action.tapSignupBtn();
        await action.verifyInvalidEmail();
        await action.fillEmail(signupUser.valid.email);
        await action.verifyValidEmail();
    });

    test('User signup with invalid password', async ({ page }) => {

        const action = new SignUpPage(page);

        await action.goto();
        await action.fillEmail(signupUser.valid.email);
        await action.fillPassword(signupUser.invalid.password);
        await action.tapSignupBtn();
        await action.verifyInvalidPassword();
        await action.fillPassword(signupUser.valid.password);
        await action.verifyValidPassword();
    });

    test('User signup with invalid password confirmation', async ({ page }) => {

        const action = new SignUpPage(page);

        await action.goto();
        await action.fillEmail(signupUser.valid.email);
        await action.fillPassword(signupUser.valid.password);
        await action.fillPwdConfirm(signupUser.invalid.pwdConfirm);
        await action.tapSignupBtn();
        await action.verifyInvalidPwdConfirm();
        await action.fillPassword(signupUser.valid.pwdConfirm);
        await action.verifyValidPwdConfirm();
    });

    test('User signup with invalid telephone', async ({ page }) => {

        const action = new SignUpPage(page);

        await action.goto();
        await action.fillEmail(signupUser.valid.email);
        await action.fillPassword(signupUser.valid.password);
        await action.fillPwdConfirm(signupUser.valid.pwdConfirm);
        await action.fillName(signupUser.username.name);
        await action.fillAddress(signupUser.address.place);
        await action.fillTel(signupUser.tel.invalid);
        await action.tapSignupBtn();
        await action.verifyInvalidTel();
        await action.fillTel(signupUser.tel.valid);
        await action.verifyValidTel();
        
    });
});

test.describe('SignUp Page Filling Out Signup Success MyPage',() => {
    test('User filling out signup field', async ({ page }) => {

        const action = new SignUpPage(page);

        await action.goto();
        await action.fillEmail(signupUser.valid.email);
        await action.fillPassword(signupUser.valid.password);
        await action.fillPwdConfirm(signupUser.valid.pwdConfirm);
        await action.fillName(signupUser.username.name);
        await action.fillAddress(signupUser.address.place);
        await action.fillTel(signupUser.tel.valid);
        await action.selectGender(signupUser.gender.selected);
        await action.fillDateofBirth(signupUser.dateOfBirth.date);
        await action.checkReceiveNotification();
        await action.tapSignupBtn();
        await action.verifySignupMyPage();
    });

});