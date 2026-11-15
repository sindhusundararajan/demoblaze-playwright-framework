import { BasePage } from './BasePage.js'

export class HomePage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        super(page);
        this.productTitles = page.locator('#tbodyid .card-title a');
        this.phonesCategory = page.getByRole('link', { name: 'Phones', exact: true });
        this.laptopsCategory = page.getByRole('link', { name: 'Laptops', exact: true });
        this.monitorsCategory = page.getByRole('link', { name: 'Monitors', exact: true });

    }

    async getProductNames() {
        await this.productTitles.first().waitFor();
        return await this.productTitles.allTextContents();

    }

    async openProduct(name) {
        await this.productTitles.filter({ hasText: name }).click();
    }

    async selectCategoryByName(name) {
        await this.page.getByRole('link', { name, exact: true }).click();
    }

    async selectCategory(categoryLink) {
        await categoryLink.click();
    }

}