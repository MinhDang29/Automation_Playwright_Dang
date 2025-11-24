import { test, expect, type Page } from '@playwright/test';

const username = "Hong Trinh";
const email = "TrinhExample@gmail.com";
const interests = "sports";
const country = "uk";
const file_profile = "data/input-file.txt";
const dob = "2025-05-15";
const bio = "Biography test area";
const rating = "6";
const favcolor = "#00ffd5";

test('Register page', async ({ page }) => {
    //go to page
    await test.step("Go to User Register page/ Bài học 1", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[contains(text(),"Bài học 1: Register")]').click();
    });
    
    await test.step("Input data all fields exception for Customer Date ", async () => {
    });
    await page.waitForTimeout(100);
    await page.locator('//input[@id="username"]').fill(username);
    await page.waitForTimeout(100);
    await page.locator('//input[@id="email"]').fill(email);
    let isChecked = await page.locator('//input[@id="female"]').check();
    isChecked = await page.locator('//input[@id="cooking"]').check();
    await page.locator('//select[@id="interests"]').selectOption(interests);
    await page.locator('//select[@id="country"]').selectOption(country);
    await page.locator('//input[@id="profile"]').setInputFiles(file_profile);
    await page.locator('//input[@id="dob"]').click();
    await page.locator('//input[@id="dob"]').fill(dob);
    await page.locator('//textarea[@id="bio"]').fill(bio);
    await page.locator('//input[@id="rating"]').fill(rating);
    await page.locator('//input[@id="favcolor"]').fill(favcolor);
    await page.locator("//label[text()='Subscribe']").click();
    await page.locator("//div[@id='starRating']").click();
    await page.locator("//button[text()='Register']").scrollIntoViewIfNeeded();
    await page.locator("//button[text()='Register']").click();

});