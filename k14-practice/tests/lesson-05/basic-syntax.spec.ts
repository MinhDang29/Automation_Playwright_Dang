import { test } from '@playwright/test';

test("Ten test case", async ({ page }) => {
    await test.step("Ten step1", async () => {
        // navigate
        await page.goto("https://material.playwrightvn.com/");

        // click(): 
        await page.locator('//a[contains(text(), "Bài học 1: Register Page")]').click();

        // fill
        await page.locator('//input[@id = "username"]').fill("K14 Playwright");

        await page.locator('//input[@id = "email"]').pressSequentially("K14 Playwright Test basic syntax");
        await page.locator('//input[@value = "male"]').check();
        const isChecked = await page.locator('//input[@value = "male"]').isChecked();
        console.log(isChecked);

        await page.locator('//select[@id = "country"]').selectOption('canada');

        await page.locator('//input[@id = "profile"]').setInputFiles("data/input-file.txt");
    });

    await test.step("", async () => {
        
    });
});