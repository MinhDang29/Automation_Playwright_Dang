import { test } from '@playwright/test';

test('Ex1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='01-xpath-register-page.html']");
    await page.locator("//input[@id='username']").fill("nhung1703");
    await page.locator("//input[@id='email']").fill("test@gmail.com");
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//input[@id='cooking']").check();
    await page.selectOption("//select[@id='interests']", "music");
    await page.selectOption("//select[@id='country']", "australia");
    await page.click("//input[@id='dob']");
    await page.locator("//input[@id='dob']").fill("2001-03-17");
    await page.setInputFiles("//input[@id='profile']", "tests/lesson5/tests/files/sample.jpeg");
    await page.locator("//textarea[@id='bio']").fill("I'm willing to learn new thing");
    await page.locator("//input[@id='rating']").fill("9");
    await page.locator("//input[@id='favcolor']").fill("#6d3737");
    await page.locator("//input[@id='newsletter']").check();
    await page.click("//span[@class='slider round']");
    await page.click("//div[@id='starRating']");
    await page.click("//button[text()='Register']");
})