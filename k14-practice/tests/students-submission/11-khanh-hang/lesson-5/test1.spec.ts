import {test} from '@playwright/test';

test("Register Page", async ({page}) => {
    await test.step("navigate to register page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('//a[contains(text(),"Bài học 1: Register Page")]').click();
    });
    await test.step("fill register form", async () => {
        await page.locator('//input[@id="username"]').fill("Hang");
        await page.locator('//input[@id="email"]').fill("khanhaang@gmail.com");
        await page.locator('//input[@id="female"]').click();
        await page.locator('//input[@id="traveling"]').click();
        await page.locator('//select[@id="interests"]').selectOption("Art");
        await page.locator('//select[@id="country"]').selectOption("Canada");
        await page.locator('//input[@id="dob"]').fill("2025-01-01");
        await page.locator('//input[@id="profile"]').setInputFiles('tests/data/profile.png');
        await page.locator('//textarea[@id="bio"]').fill("automation testing");
        await page.locator('//input[@id="rating"]').fill("9");
        await page.locator('//input[@id="favcolor"]').fill("#65c34b");
        await page.locator('//input[@id="newsletter"]').click();
        await page.locator('//span[@class="slider round"]').click();
        await page.locator('//input[@id="customDate"]').fill("2025-12-31");
    });
    await test.step("submit register form", async () => {
        await page.locator('//button[@type="submit"]').click();
    });
})