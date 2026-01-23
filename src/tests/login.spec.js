import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage/action.js';
import { loginUser } from '../data/login/login.js';
import { LogoutPage } from '../pages/logoutPage/action.js';

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

    test('Login success message valid field', async ({ page }) => {
        const action = new LoginPage(page);
        const logoutBtn = new LogoutPage(page);
        await action.goto();
        await action.fillEmail(loginUser.valid.email);
        await action.fillPassword(loginUser.valid.password);
        await action.tapLoginBtn();
        await action.verifySuccessLogin();
        await logoutBtn.tapLogoutMenuBtn();
    });
});