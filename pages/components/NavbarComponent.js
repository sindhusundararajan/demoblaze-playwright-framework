// pages/components/NavbarComponent.js
export class NavbarComponent {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
        this.welcomeText = page.locator('#nameofuser');
        this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
    }

    async openCart() {
        await this.cartLink.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}