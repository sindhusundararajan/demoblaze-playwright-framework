import { BasePage } from './BasePage.js'
import { NavbarComponent } from './components/NavbarComponent.js'

export class LoginPage extends BasePage {
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        super(page);
        this.navbar = new NavbarComponent(page);
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.submitButton = page.getByRole('button', { name: 'Log in' });
    }

    async login(username, password) {
        await this.navbar.loginLink.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();

    }

    async loginExpectingAlert(username, password) {
        await this.navbar.loginLink.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        return await this.captureDialog(() => {
            this.submitButton.click();
        })
    }



}