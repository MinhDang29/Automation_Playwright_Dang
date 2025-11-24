import { test } from '@playwright/test';

test("Verify that user can Register Page with all valid info", async ({ page }) => {
    await test.step("Step 1 Open web page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2 Click Register Page link ", async () => {
        await page.locator("//a[contains(text(),'Register Page')]").click();
    });

    await test.step("Step 3: Input all valid data", async () => {
        await page.locator("//input [@id='username']").fill("Susan"); //username 
        await page.locator("//input [@id='email']").fill("Susan@gmail.com");    //email
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//select[@id='interests']").selectOption("Science");
        await page.locator("//select[@id='country']").selectOption("Canada");
        await page.fill("//input[@id='dob']", "2025-05-25");
        await page.locator("//input[@id='profile']").setInputFiles("tests/data/text-upload.txt");
        await page.locator("//textarea[@id='bio']").fill("Biography");
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//span[@class='slider round']").click();
    });

    await test.step("Step 4: Click Register", async () => {
        await page.locator("//button[@type='submit']").click()
    });
});
