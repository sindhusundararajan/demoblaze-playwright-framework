import fs from 'fs';
import { test, expect } from '../../fixtures/baseFixtures.js';

const products = JSON.parse(fs.readFileSync('test-data/products.json', 'utf-8'));

test.beforeEach(async ({ homePage }) => {
    await homePage.open();
});

// test('add product to cart', async ({ homePage, productPage, navbar, cartPage }) => {
//     await homePage.openProduct(products.phone.name);
//     const message = await productPage.addToCart();
//     console.log('Alert:', message);
//     await navbar.openCart();
//     await expect(cartPage.rowFor(products.phone.name)).toBeVisible();
// });

for (const [key, product] of Object.entries(products)) {
    test(`add ${key} to cart`, async ({ homePage, productPage, navbar, cartPage }) => {
        await homePage.selectCategoryByName(product.category);
        await homePage.openProduct(product.name);
        const message = await productPage.addToCart();
        console.log('Alert:', message);
        await navbar.openCart();
        await expect(cartPage.rowFor(product.name)).toBeVisible();
    });
}