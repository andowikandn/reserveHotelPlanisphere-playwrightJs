import { test, expect } from "@playwright/test";
import { SignupLocator } from "./locator.js";
import { URLS } from "../../../utils/env";

export class SignUpPage {
    constructor(page) {
        this.page = page;
        this.locator = new SignupLocator(page);
    }

    async goto() {
        await test.step('Navigate to url signup page', async () => {

            const headerSignupPage = this.locator.headerSignup;

            await this.page.goto(URLS.SIGNUP, { waitUntil: 'domcontentloaded' });
            expect(headerSignupPage).toBeVisible({ timeout: 10000 });
        });
    }

    async verifySignupPage() {
        await test.step('User verify signup page', async () => {
            
            const heading = 
                this.locator.headerSignup;

            await expect(heading).toBeVisible();
            await expect(this.page).toHaveURL(/signup.html/);
        });
    }

    async tapSignUpMenuBtn() {
        await test.step('User click signup menu button', async () => {

            const signUpMenu = this.locator.signupMenuBtn;

            await expect(signUpMenu).toBeVisible({ timeout: 10000 });
            await signUpMenu.click();
        });
    }

    async tapSignupBtn() {
        await test.step('User click sign up button', async () => {

            const signUpBtn = this.locator.submitSignupBtn;
            expect(signUpBtn).toBeVisible();

            await signUpBtn.click({ timeout: 10000 });
        });
    }

    async verifyRequiredField() {
        await test.step('User verify required field', async () => {

            const fields = [
                this.locator.inputEmail,
                this.locator.inputPassword,
                this.locator.inputPwdConfirm,
                this.locator.inputName
            ];

            for (const field of fields) {
                await expect(field).toBeVisible();
            }

            for (const field of fields) {
                const validationMessage = await field.evaluate(
                    el => el.checkValidity()
                );

                await expect(validationMessage).toBe(false);
            }
        });
    }

    async verifyInvalidEmail() {
        await test.step('User verify email is invalid', async () => {

            const invalidEmail =
                this.locator.inputEmail;

            await expect(invalidEmail).toBeVisible({ timeout: 10000 });

            const isValid = await invalidEmail.evaluate(
                el => el.checkValidity()
            );

            await expect(isValid).toBe(false);
        });
    }

    async verifyValidEmail() {
        await test.step('User verify email is valid', async () => {

            const validEmail =
                this.page.locator('#email + .invalid-feedback');

            await expect(validEmail).toBeHidden();
        });
    }

    async verifyInvalidPassword() {
        await test.step('User verify password is invalid', async () => {

            const invalidPwd = this.locator.inputPassword;
            await expect(invalidPwd).toBeVisible();

            const isValid = await invalidPwd.evaluate(
                el => el.checkValidity()
            );

            await expect(isValid).toBe(false);
        });
    }

    async verifyValidPassword() {
        await test.step('User verify passwrd is valid', async () => {

            const validPwd =
                this.page.locator('#password + .invalid-feedback');

            await expect(validPwd).toBeHidden();
        });
    }

    async verifyInvalidPwdConfirm() {
        await test.step('User verify password ii invalid', async () => {

            const invalidPwdConfirm =
                this.locator.inputPwdConfirm;

            await expect(invalidPwdConfirm).toBeVisible({ timeout: 10000 });

            const isValid = await invalidPwdConfirm.evaluate(
                el => el.checkValidity()
            );

            await expect(isValid).toBe(false);
        });
    }

    async verifyValidPwdConfirm() {
        await test.step('User verify passwrd is valid', async () => {

            const validPwdConfirm =
                this.page.locator('#password-confirmation + .invalid-feedback');

            await expect(validPwdConfirm).toBeHidden();
        });
    }

    async selectNormalMembership() {
        await test.step('User select Membership user', async () => {

            const memberShip = this.locator.selectMembership;

            await expect(memberShip).toBeVisible({ timeout: 10000 });
            await memberShip.check();
        });
    }

    async fillEmail(email) {
        await test.step(`User fill email field: ${email}`, async () => {

            const enterEmail = this.locator.inputEmail;

            await expect(enterEmail).toBeVisible({ timeout: 10000 });
            await enterEmail.fill(email);
            await expect(enterEmail).toHaveValue(email);
        });
    }

    async fillPassword(password) {
        await test.step(`User fill password field: ${password}`, async () => {

            const enterPassword = this.locator.inputPassword;

            await expect(enterPassword).toBeVisible({ timeout: 10000 });
            await enterPassword.fill(password);
            await expect(enterPassword).toHaveValue(password);
        });
    }

    async fillPwdConfirm(pwdConfirm) {
        await test.step(`User fill password confirmation field: ${pwdConfirm}`, async () => {

            const enterPwdConfirm = this.locator.inputPwdConfirm;

            await expect(enterPwdConfirm).toBeVisible({ timeout: 10000 });
            await enterPwdConfirm.fill(pwdConfirm);
            await expect(enterPwdConfirm).toHaveValue(pwdConfirm);
        });
    }

    async fillName(username) {
        await test.step(`User fill name field: ${username}`, async () => {

            const enterName = this.locator.inputName;
            await enterName.fill(username);
            await expect(enterName).toBeVisible({ timeout: 10000 });
        });
    }

    async fillAddress(place) {
        await test.step(`User fill address field: ${place}`, async () => {

            const enterAddress = this.locator.inputAddress;
            await expect(enterAddress).toBeVisible();

            await enterAddress.fill(place);
            await expect(enterAddress).toHaveValue(place)
        });
    }

    async fillTel(phone) {
        await test.step(`User fill telephone field: ${phone}`, async () => {

            const enterTel = this.locator.inputTelephone;
            await expect(enterTel).toBeVisible();

            await enterTel.fill(phone);
            await expect(enterTel).toHaveValue(phone);
        });
    }

    async verifyInvalidTel() {
        await test.step('User verify invalid telephone', async () => {

            const enterTel = this.locator.inputTelephone;
            await expect(enterTel).toBeVisible();

            const isValid = await enterTel.evaluate(
                el => el.checkValidity()
            );

            await expect(isValid).toBe(false);
        });
    }

    async verifyValidTel() {
        await test.step('User verify invalid telephone', async () => {

            const enterTel =
                this.page.locator('#tel + .invalid-feedback');

            await expect(enterTel).toBeHidden();
        });
    }

    async selectGender(gender) {
        await test.step(`User select a gender field: ${gender}`, async () => {

            const genderOption = this.locator.inputGender;

            await genderOption.selectOption(gender);
            await expect(genderOption).toBeVisible({ timeout: 10000 });
        });
    }

    async fillDateofBirth(date) {
        await test.step(`User fill date of birth field: ${date}`, async () => {

            const enterDate = this.locator.inputBirthDay;

            await expect(enterDate).toBeVisible();
            await enterDate.fill(date);
            await expect(enterDate).toHaveValue(date);
        });
    }

    async checkReceiveNotification() {
        await test.step('User checked receive notification', async () => {

            const tapNotif = this.locator.checkNotification;

            await expect(tapNotif).toBeVisible({ timeout: 10000 });
            await tapNotif.check();
        });
    }

    async verifySignupMyPage() {
        await test.step('User verify signup success direct to mypage', async () => {

            const myPage = this.locator.signupMyPage;
            await expect(myPage).toBeVisible({ timeout: 10000 });
            await expect(this.page).toHaveURL(/mypage.html/);


            const dateOfBirth =
                this.page.getByRole('heading', { name: 'Date of birth' });

            await expect(dateOfBirth).toBeVisible({ timeout: 10000 });
        });
    }
}