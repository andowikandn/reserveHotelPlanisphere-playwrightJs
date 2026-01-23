export class SignupLocator {
    constructor(page) {
        this.signupMenuBtn = page.locator('a[href="./signup.html"]');
        this.headerSignup = page.locator('h2:has-text("Sign up")');
        this.inputEmail = page.locator('#email');
        this.inputPassword = page.locator('#password');
        this.inputPwdConfirm = page.locator('#password-confirmation');
        this.inputName =  page.locator('#username');
        this.selectMembership = page.getByRole('radio', { name: 'Membership' });
        this.selectPremMembership = page.getByRole('radio', { name: 'PREMIUM Membership' });
        this.inputAddress = page.locator('#address');
        this.inputGender = page.locator('#gender');
        this.inputBirthDay = page.locator('#birthday');
        this.inputTelephone = page.locator('#tel')
        this.checkNotification = page.locator('#notification');
        this.submitSignupBtn = page.getByRole('button', { name: 'Sign up' });
        this.signupMyPage = page.getByRole('heading', { name: 'MyPage' });
    }
}