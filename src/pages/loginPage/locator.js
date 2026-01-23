export class LoginLocator {
  constructor(page) {
    this.headerLoginPage = page.locator('h2:has-text("Login")');
    this.headerLoginSuccess = page.locator('h2:has-text("MyPage")');
    this.loginMenuBtn = page.locator('a[href="./login.html"]');
    this.inputEmail = page.locator('#email');
    this.inputPassword = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    this.emailErrorMessage = page.locator('#email-message');
    this.passwordErrorMessage = page.locator('#password-message');
  }
}