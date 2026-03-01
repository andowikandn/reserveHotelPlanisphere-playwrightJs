import { test, expect } from '@playwright/test';
import { LoginLocator } from './locator.js';
import { URLS } from '../../../utils/env.js';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.locator = new LoginLocator(page);
    }

    async goto() {
        await test.step('Navigate to url login page', async () => {
            await this.page.goto(URLS.LOGIN, { waitUntil: 'domcontentloaded' });
            await expect(this.locator.headerLoginPage).toBeVisible();
        });
    }

    async gotoBaseUrl() {
        await test.step('Navigate to url login page', async () => {
            await this.page.goto(URLS.BASE);
            await expect(this.page).toHaveURL(/hotel-example-site/);
        });
    }

    async verifyLoginPage() {
        await test.step('User verify login page', async () => {

            const heading =
                this.locator.headerLoginPage;

            await expect(heading).toBeVisible();
            await expect(this.page).toHaveURL(/login.html/);
        });
    }

    async tapLoginMenuBtn() {
        await test.step('User click login menu', async () => {
            const loginBtn = this.locator.loginMenuBtn;
            await loginBtn.click();
            await expect(loginBtn).toBeVisible();
        });
    }

    async fillEmail(email) {
        await test.step('User input email', async () => {
            await this.locator.inputEmail.fill(email);
            await expect(this.locator.inputEmail).toHaveValue(email);
        });
    }

    async fillPassword(password) {
        await test.step('User input password', async () => {
            await this.locator.inputPassword.fill(password);
            await expect(this.locator.inputPassword).toHaveValue(password);
        });
    }

    async tapLoginBtn() {
        await test.step('User click login button', async () => {

            const loginBtn = this.locator.loginBtn;

            await expect(loginBtn).toBeVisible();
            await loginBtn.click({ timeout: 10000 });
        });
    }

    async verifyErrorMessage() {
        await test.step('User verify required field', async () => {
            
            const email = this.locator.inputEmail;
            await expect(email).toBeVisible();
            await email.fill('');

            const password = this.locator.inputPassword;
            await expect(password).toBeVisible();
            await password.fill('');

            await this.tapLoginBtn();

            await expect(this.locator.inputEmail)
                .toHaveJSProperty('validity.valid', false);

            await expect(this.locator.inputPassword)
                .toHaveJSProperty('validity.valid', false);
        });
    }

    async verifySuccessLogin() {
        await test.step('User verify login success', async () => {
            await expect(this.locator.headerLoginSuccess).toBeVisible();
            await expect(this.page).toHaveTitle(/MyPage/);
            await expect(this.page).toHaveURL(/mypage\.html/, { timeout: 10000 });;
        });
    }
}