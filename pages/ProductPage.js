import { BasePage } from "./BasePage.js";

export class ProductPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        super(page);
        this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
    }

    async addToCart() {
        return await this.captureDialog(() =>
            this.addToCartButton.click());

    }

}