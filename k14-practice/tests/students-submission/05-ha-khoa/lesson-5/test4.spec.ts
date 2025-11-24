import { test } from '@playwright/test';

test("TC1: Register Page", async ({ page }) => {
    await test.step("Truy cập trang web", async () => {
        //Truy cập trang web
        await page.goto("https://material.playwrightvn.com/");

    })
    await test.step("Click Bài học 4: Personal Notes", async () => {
        await page.locator('//a[contains(text(), "Bài học 4: Personal notes")]').click();
    })
    
})