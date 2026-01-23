export class ReserveLocator {
    constructor(page) {
        this.reserveMenuBtn = page.locator('a[href="./plans.html"]');
        this.headerReservePage = page.locator('h2:has-text("Plans")');
        this.specialOfferBtn = page.locator('a[href="./reserve.html?plan-id=0"]');
    }
}