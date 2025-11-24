import { test, expect, type Page } from '@playwright/test';

test('add product to cart', async ({ page }) => {
    await test.step("Go to User Register page/ Bài học 2", async () => {
        await page.goto('https://material.playwrightvn.com/')
        await page.locator('//a[contains(text(),"Bài học 2: Product")]').click();
    });

    //add 2 product_01 to cart    
    await page.locator('//button[@data-product-id=1]').dblclick();

    //add 3 product_02 to cart
    await page.locator('//button[@data-product-id=2]').dblclick();
    await page.locator('//button[@data-product-id=2]').click();

    //add 1 product_03 to cart
    await page.locator('//button[@data-product-id=3]').click();
})