import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { NavbarComponent } from '../pages/components/NavbarComponent.js'
import { HomePage } from '../pages/HomePage.js'
import { ProductPage } from '../pages/ProductPage.js'
import { CartPage } from '../pages/CartPage.js'

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    navbar: async ({ page }, use) => {
        await use(new NavbarComponent(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));

    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
});


export { expect };