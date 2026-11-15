import fs from 'fs';
import { test, expect } from '../../fixtures/baseFixtures.js';
import { BasePage } from '../../pages/BasePage.js';

const users = JSON.parse(fs.readFileSync('test-data/users.json', 'utf-8'));

test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
});

test('login with valid credentials', async ({ loginPage, navbar }) => {

    await loginPage.login(users.valid.username, users.valid.password);
    await expect(navbar.welcomeText).toHaveText(`Welcome ${users.valid.username}`);
});

test('login with wrong password shows alert', async ({ loginPage }) => {

    const message = await loginPage.loginExpectingAlert(users.invalid.username, users.invalid.password);
    console.log('Alert message:', message);
    expect(message).toBe('Wrong password.');
});

test('logout after login', async ({ loginPage, navbar }) => {

    await loginPage.login(users.valid.username, users.valid.password);
    await expect(navbar.welcomeText).toHaveText(`Welcome ${users.valid.username}`);
    await navbar.logout();
    await expect(navbar.loginLink).toBeVisible();
});