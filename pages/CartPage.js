import { BasePage } from './BasePage.js';

export class CartPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.rows = page.locator('#tbodyid tr');
        this.deleteLinks = page.getByRole('link', { name: 'Delete' });
    }

    rowFor(productName) {
        return this.rows.filter({ hasText: productName });
    }

    async deleteFirstItem() {
        await this.deleteLinks.first().click();
    }

}