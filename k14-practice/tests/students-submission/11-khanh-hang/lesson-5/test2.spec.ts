import {test} from '@playwright/test';

test("Product Page", async ({page}) => {
    await test.step("navigate to Product page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('//a[contains(text(),"Bài học 2: Product page")]').click();
    });
    await test.step("select product", async () => {
        await page.locator('//button[@data-product-id="1"]').click({clickCount: 2});
        await page.locator('//button[@data-product-id="2"]').click({clickCount: 3});
        await page.locator('//button[@data-product-id="3"]').click();
    });
})