import { test, expect } from '@playwright/test';
import { ReservePrivateOnsenLocator } from './locatorPrivateOnsenOffer.js';

export class PlanPrivateOnsenOfferPage {
    constructor(page) {
        this.page = page;
        this.locator = new ReservePrivateOnsenLocator(page);
    }

    async verifyTabPrivateOnsenOffer() {
        await test.step('User verify private onsen offer page', async () => {

            const heading = this.locator.headerPrivateOnsenOffer;

            await expect(heading).toBeVisible();
            await expect(this.page).toHaveURL(/plan-id=7/);
        });
    }

    async tapConfirmReserveBtn() {
        await test.step('User click confirmation reserve button', async () => {

            const confirmBtn = this.locator.confirmReservationBtn;

            await expect(confirmBtn).toBeVisible({ timeout: 10000 });
            await confirmBtn.click();
        });
    }

    async verifyUsernameRequired() {
        await test.step('User verify username field is required', async () => {

            const username =
                this.locator.username;

            const isValid = await username.evaluate(
                el => el.checkValidity()
            );

            expect(isValid).toBe(false);
        });
    }

    async fillStay(term) {
        await test.step(`User fill stay term: ${term} days`, async () => {

            await this.locator.inputStay.clear();
            await this.locator.inputStay.fill(term);
            await expect(this.locator.inputStay).toHaveValue(term);
        });
    }

    async fillGuest(headCount) {
        await test.step(`User fill guest head count: ${headCount} person`, async () => {

            await this.locator.inputGuest.clear();
            await this.locator.inputGuest.fill(headCount);
            await expect(this.locator.inputGuest).toHaveValue(headCount);
        });
    }

    async additionalPlan(plans = []) {
        await test.step(`User checklist additional plan: ${plans.join(', ')}`, async () => {

            for (const plan of plans) {
                const checkbox = this.page.getByLabel(plan);

                await expect(checkbox).toBeVisible();
                await checkbox.check();
                await expect(checkbox).toBeChecked();
            }
        });
    }

    async verifyConfirmationRequired() {
        await test.step('User verify username field is required', async () => {

            const confirmation = this.locator.contact;

            await expect(confirmation).toBeVisible({ timeout: 10000 });
            await expect(confirmation).toHaveAttribute('required', '');
            await expect(confirmation.locator('option:checked')).toHaveText('Choose one');
        });
    }

    async fillEmail(inputEmail) {
        await test.step(`Uesr fill email: ${inputEmail}`, async () => {

            await this.locator.email.fill('');
            await this.locator.email.fill(inputEmail);
            await expect(this.locator.email).toHaveValue(inputEmail);
        });
    }

    async verifyEmailRequired() {
        await test.step('User verify email field is required', async () => {

            const email = this.locator.email;
            await expect(email).toBeVisible();

            const validationMessage = await email.evaluate(
                el => el.checkValidity()
            );

            expect(validationMessage).toBe(false);
        });

    }

    async verifyEmailInvalid() {
        await test.step('User verify email invalid', async () => {

            const invalidEmail =
                this.page.locator('#email + .invalid-feedback');

            await expect(invalidEmail).toBeVisible();
            await expect(invalidEmail).toHaveText('Please enter a non-empty email address.');
        });
    }

    async verifyEmailValid() {
        await test.step('User verify email is valid', async () => {

            const invalidEmail =
                this.page.locator('#email + .invalid-feedback');

            await expect(invalidEmail).toBeHidden();
        });
    }

    async fillTelephone(tel) {
        await test.step('User fill confirmation contact telephone', async () => {

            const inputTel = this.locator.telephone;

            await expect(inputTel).toBeVisible();
            await inputTel.fill('');
            await inputTel.fill(tel, { timeout: 10000 });
            await expect(inputTel).toHaveValue(tel);
        });
    }

    async verifyTelRequired() {
        await test.step('User verify telephone field is required', async () => {

            const inputTel = this.locator.telephone;
            await inputTel.waitFor({ state: 'visible' });
            await expect(inputTel).toBeVisible({ timeout: 10000 });

            const validationMessage = await inputTel.evaluate(
                el => el.checkValidity()
            );

            expect(validationMessage).toBe(false);
        });
    }

    async verifyTelInvalid() {
        await test.step('User verify telephone is invalid', async () => {

            const inputTel = this.locator.telephone;
            const isValid = await inputTel.evaluate(el => el.checkValidity());
            expect(isValid).toBeFalsy();
        });
    }

    async verifyTelValid() {
        await test.step('User verify telephone is valid', async () => {

            const inputTel = this.locator.telephone;
            const isValid = await inputTel.evaluate(el => el.checkValidity());
            expect(isValid).toBeTruthy();
        });
    }

    async backToMainPage(mainPage) {
        await test.step('User move tab special offer window', async () => {

            await this.page.close();
            await mainPage.bringToFront();
            await mainPage.waitForLoadState('load');
        });
        
        return mainPage;
    }

    async fillName(name) {
        await test.step('User fill username', async () => {

            const usernameInput = this.locator.username;

            await usernameInput.fill(name, { timeout: 10000 });
            await expect(usernameInput).toHaveValue(name);
        });
    }

    async fillConfirmationContact(contact) {
        await test.step(`User select a confirmation option ${contact}`, async () => {

            const confirmationOption = this.locator.contact;

            await confirmationOption.selectOption(contact);
            await expect(confirmationOption).toHaveValue(contact, { timeout: 10000 });
        });
    }

    async fillComment(comment) {
        await test.step(`User fill comment: ${comment}`, async () => {

            const inputComment = this.locator.comment;

            await expect(inputComment).toBeVisible({ timeout: 10000 });
            await inputComment.fill(comment);
            await expect(inputComment).toHaveValue(comment);
        });
    }

    async verifyConfirmationPrivateOnsenOffer() {
        await test.step('User verify confirmation plan private onsen offers', async () => {

            const confirmSpecial = this.locator.headerConfirmPrivateOnsen;

            await expect(confirmSpecial).toBeVisible({ timeout: 10000 });
            await expect(this.page).toHaveURL(/confirm/);
        });
    }

    async tapSubmitReservationBtn() {
        await test.step('User click submit reservation button', async () => {

            const submitReserveBtn = this.locator.submitReservationBtn;

            expect(submitReserveBtn).toBeVisible();
            await submitReserveBtn.click({ timeout: 10000 });
        });
    }

    async verifySubmitReservation() {
        await test.step('User verify view popup modal reservation', async () => {

            const verifyModalReserve = this.locator.verifyConfirmModal;
            expect(verifyModalReserve).toBeVisible({ timeout: 10000 });

            const bodyModal =
                this.page.locator('div.modal-body');

            expect(bodyModal).toBeVisible();
            expect(bodyModal).toHaveText('We look forward to visiting you.');
        });
    }

    async tapCloseBtn() {
        await test.step('User click close modal button', async () => {

            const closeBtn = this.locator.closeBtnModal;

            expect(closeBtn).toBeVisible({ timeout: 10000 });
            await closeBtn.click();
        });
    }
}