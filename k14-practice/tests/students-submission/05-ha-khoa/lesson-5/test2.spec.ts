import { test } from '@playwright/test';

test("TC1: Register Page", async ({ page }) => {
    await test.step("Truy cập trang web", async () => {
        //Truy cập trang web
        await page.goto("https://material.playwrightvn.com/");

    })
    await test.step("Click Bài học 2: Product Page", async () => {
        await page.locator('//a[contains(text(), "Bài học 2: Product page")]').click();

    })
    await test.step("Thêm sản phẩm 1", async () => {
        await page.locator('//button[@data-product-id = "1"]').click({
            clickCount: 2
        });

    })
    await test.step("Thêm sản phẩm 2", async () => {
        await page.locator('//button[@data-product-id = "2"]').click({
            clickCount: 3
        });

    })
    await test.step("Thêm sản phẩm 3", async () => {
        await page.locator('//button[@data-product-id = "3"]').click();
    })

})