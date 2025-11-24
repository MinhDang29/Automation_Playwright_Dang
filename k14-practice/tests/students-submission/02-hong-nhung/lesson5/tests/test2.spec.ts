import { test } from '@playwright/test';

test('Ex2', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='02-xpath-product-page.html']");
    for (let i = 0; i < 2; i++) {
        await page.click("//button[@data-product-id='1']")
    };
    for (let i = 0; i < 3; i++) {
        await page.click("//button[@data-product-id='2']")
    };
    for (let i = 0; i < 2; i++) {
        await page.click("//button[@data-product-id='3']")
    }
})