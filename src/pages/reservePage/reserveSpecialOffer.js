import { test, expect } from '@playwright/test';
import { ReserveLocator } from './locator.js';

export class PlanSpecialOfferPage {
    constructor(page) {
        this.page = page;
        this.locator = new ReserveLocator(page);
    }

    async verifyTabSpecialOffer() {
        await test.step('User verify special offer page', async () => {

            const heading =
                this.page.locator('h4', { text: 'Plan with special offers' });

            await expect(heading).toBeVisible();
            await expect(this.page).toHaveURL(/plan-id=0/);
        });
    }

    async tapConfirmReserveBtn() {
        await test.step('User click confirmation reserve button', async () => {

            const confirmBtn =
                this.page.getByRole('button', { text: 'Confirm Reservation' });

            await expect(confirmBtn).toBeVisible({ timeout: 10000 });
            await confirmBtn.click();
        });
    }

    async verifyUsernameRequired() {
        await test.step('User verify username field is required', async () => {

            const username = this.page.locator('#username');
            await expect(username).toBeVisible({ timeout: 10000 });

            const validationMessage = await username.evaluate(
                el => el.validationMessage
            );

            expect(validationMessage).toBe('Please fill out this field.');
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

            const confirmation = this.page.locator('#contact');

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

            const email = this.page.locator('#email');
            await expect(email).toBeVisible();

            const validationMessage = await email.evaluate(
                el => el.validationMessage
            );

            expect(validationMessage).toBe('Please fill out this field.');
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

    async backToMainPage() {
        await test.step('User move tab special offer window', async () => {

            await this.page.bringToFront();
            await expect(this.locator.headerReservePage).toBeVisible();
        });
    }

    async fillName(name) {
        await test.step('User fill username', async () => {

            const usernameInput =
                this.page.locator('#username');

            await usernameInput.fill(name, { timeout: 10000 });
            await expect(usernameInput).toHaveValue(name);
        });
    }

    async fillConfirmation(contact) {
        await test.step(`User select a confirmation option ${contact}`, async () => {

            const confirmationOption =
                this.page.locator('#contact')

            await confirmationOption.selectOption(contact);
            await expect(confirmationOption).toHaveValue(contact, { timeout: 10000 });
        });
    }

    async fillComment(comment) {
        await test.step(`User fill comment: ${comment}`, async () => {
            
            const inputComment = 
                this.page.locator('textarea#comment');

            await expect(inputComment).toBeVisible({ timeout: 10000 });
            await inputComment.fill(comment);
            await expect(inputComment).toHaveValue(comment);
        });
    }

    async verifyConfirmationSpecialOffer() {
        await test.step('User verify confirmation plan speciall offers', async () => {

            const confirmSpecial =
                this.page.getByRole('heading', {
                    name: 'Confirm Reservation'
                });

            await expect(confirmSpecial).toBeVisible({ timeout: 10000 });
            await expect(this.page).toHaveURL(/confirm/);
        });
    }

    async tapSubmitReservationBtn() {
        await test.step('User click submit reservation button', async () => {

            const submitReserveBtn =
                this.page.locator('button[data-target="#success-modal"]');

            expect(submitReserveBtn).toBeVisible();
            await submitReserveBtn.click({ timeout: 10000 });
        });
    }

    async verifySubmitReservation() {
        await test.step('User verify view popup modal reservation', async () => {

            const verifyModalReserve =
                this.page.getByRole('heading', { name: 'Thank you for reserving.' });

            expect(verifyModalReserve).toBeVisible({ timeout: 10000 });

            const bodyModal =
                this.page.locator('div.modal-body');

            expect(bodyModal).toBeVisible();
            expect(bodyModal).toHaveText('We look forward to visiting you.');
        });
    }

    async tapCloseBtn() {
        await test.step('User click close modal button', async () => {

            const closeBtn =
                this.page.locator('button.btn-success[data-dismiss="modal"]');

            expect(closeBtn).toBeVisible({ timeout: 10000 });
            await closeBtn.click();
        });
    }
}