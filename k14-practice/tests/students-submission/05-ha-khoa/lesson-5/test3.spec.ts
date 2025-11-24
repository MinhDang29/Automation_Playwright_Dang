import { test } from '@playwright/test';

test("TC1: Register Page", async ({ page }) => {
    await test.step("Truy cập trang web", async () => {
        //Truy cập trang web
        await page.goto("https://material.playwrightvn.com/");

    })
    await test.step("Click Bài học 3: ToDo Page", async () => {
        await page.locator('//a[contains(text(), "Bài học 3: Todo page")]').click();
    })
    
})