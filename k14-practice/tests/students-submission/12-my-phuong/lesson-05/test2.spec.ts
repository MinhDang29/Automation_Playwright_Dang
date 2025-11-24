import { test } from '@playwright/test';
test("Verify that an user can add to cart", async ({ page }) => {
    await test.step('Step 1: Navigate to https://material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Step 2: Click on "Bài học 2: Product page"', async () => {
        await page.locator('//a[contains(text(), "Bài học 2: Product page")]').click();
    });
    await test.step('Step 3: Add to cart', async () => {
        await page.locator('//button[@data-product-id="1"]').click({ clickCount: 2 });
        await page.locator('//button[@data-product-id="2"]').click({ clickCount: 3 });
        await page.locator('//button[@data-product-id="3"]').click({ clickCount: 1 });
    });
})