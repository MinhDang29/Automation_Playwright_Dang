import { test } from '@playwright/test';
test("Verify that an user can be registered", async ({ page }) => {
    await test.step('Step 1: Navigate to https://material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Step 2: Click on "Bài học 1: Register Page (có đủ các element)"', async () => {
        await page.locator('//a[contains(text(), "Bài học 1: Register Page")]').click();
    });
    await test.step('Step 3: Fill out the forms and click the Register button.', async () => {
        await page.locator('//input[@id="username"]').fill('Andy');
        await page.locator('//input[@name="email"]').fill('test@gmail.com');
        await page.locator('//input[@value="female"]').check();
        await page.locator('//input[@id="reading"]').check();
        await page.locator('//select[@name="interests"]').selectOption('music');
        await page.locator('//select[@id="country"]').selectOption('uk');
        await page.locator("//input[@name='dob']").fill('2000-05-25');
        await page.locator('//input[@id="profile"]').setInputFiles('tests/lesson-5/data/input-file.txt');
        await page.locator('//textarea[@name="bio"]').fill('test');
        await page.locator('//div[@class="tooltip"]').hover();
        await page.locator('//input[@id="newsletter"]').check();
        await page.locator('//span[@class="slider round"]').click();
        await page.locator('//div[@id="starRating"]').click();
        await page.locator('//button[contains(text(),"Register")]').click();
    });
})