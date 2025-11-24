import { test } from '@playwright/test';

test("test outline", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");

    await page.locator('//a[contains(text(), "Bài học 1: Register Page")]').click();

    await page.locator('//input[@type = "file"]').setInputFiles('data/input-file.txt');

})