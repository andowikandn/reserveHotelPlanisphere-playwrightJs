export class ReserveSpecialLocator {
    constructor(page) {
        this.reserveMenuBtn = page.locator('a[href="./plans.html"]');
        this.headerReservePage = page.locator('h2:has-text("Plans")');
        this.specialOfferBtn = page.locator('a[href="./reserve.html?plan-id=0"]');
        this.headerSpecialOffer = page.locator('h4:has-text("Plan with special offers")');
        this.inputDate = page.locator('#date');
        this.inputStay = page.locator('#term');
        this.inputGuest = page.locator('#head-count');
        this.checkBreakfast = page.locator('#breakfast');
        this.checkEarlyCheckIn = page.locator('#early-check-in');
        this.checkSightSeeing = page.locator('#sightseeing');
        this.username = page.locator('#username');
        this.contact = page.locator('#contact');
        this.email = page.locator('#email');
        this.telephone = page.locator('#tel');
        this.comment = page.locator('#comment');
        this.confirmReservationBtn = page.locator('#submit-button');
        this.headerConfirmSpecial = page.getByRole('heading', { name: 'Confirm Reservation' });
        this.submitReservationBtn = page.locator('button[data-target="#success-modal"]');
        this.verifyConfirmModal = page.getByRole('heading', { name: 'Thank you for reserving.'});
        this.closeBtnModal = page.locator('button.btn-success[data-dismiss="modal"]');
    }
}