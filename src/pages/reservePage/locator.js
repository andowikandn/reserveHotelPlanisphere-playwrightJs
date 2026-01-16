export class ReserveLocator {
    constructor(page) {
        this.reserveMenu = page.locator('a[href="./plans.thtml"]');
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
        // Please fill out this field.
        this.contact = page.locator('#contact');
        // Choose one
        this.email = page.locator('#email');
        // Please fill out this field.z
        // Please enter a non-empty email address.
        this.telephone = page.locator('#tel');
        // Please match the requested format.
        // Please enter 11-digit number. Ex: 01133335555
        this.confirmReservationBtn = page.locator('#submit-button');
    }
}