export class ReserveLocator {
    constructor(page) {
        this.reserveMenuBtn = page.locator('a[href="./plans.html"]');
        this.headerReservePage = page.locator('h2:has-text("Plans")');
        this.specialOfferBtn = page.locator('a[href="./reserve.html?plan-id=0"]');
        this.stayWithoutMealsOfferBtn = page.locator('a[href="./reserve.html?plan-id=4"]');
        this.businessTripOfferBtn = page.locator('a[href="./reserve.html?plan-id=5"]');
        this.withBeautySalonOfferBtn = page.locator('a[href="./reserve.html?plan-id=6"]');
        this.withPrivateOnsenOfferBtn = page.locator('a[href="./reserve.html?plan-id=7"]');
        this.forHoneymoonOfferBtn = page.locator('a[href="./reserve.html?plan-id=8"]');
        this.complimentaryTicketOfferBtn = page.locator('a[href="./reserve.html?plan-id=9"]');
    }
}