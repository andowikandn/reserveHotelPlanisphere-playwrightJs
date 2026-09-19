import { test, expect } from '@playwright/test';

test.describe('SauceDemo Web Automation Example', () => {
    test('user can login, add product to cart, and finish checkout', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await expect(page).toHaveURL(/saucedemo\.com/);
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await expect(page).toHaveURL(/inventory\.html/);
        await expect(page.locator('.title')).toHaveText('Products');

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page).toHaveURL(/cart\.html/);
        await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');

        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill('Ahmad');
        await page.locator('[data-test="lastName"]').fill('Wikandono');
        await page.locator('[data-test="postalCode"]').fill('12345');
        await page.locator('[data-test="continue"]').click();

        await expect(page).toHaveURL(/checkout-step-two\.html/);
        await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');

        await page.locator('[data-test="finish"]').click();

        await expect(page).toHaveURL(/checkout-complete\.html/);
        await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    });

    test('user sees error message with invalid login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').fill('locked_out_user');
        await page.locator('[data-test="password"]').fill('wrong_password');
        await page.locator('[data-test="login-button"]').click();

        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
});
