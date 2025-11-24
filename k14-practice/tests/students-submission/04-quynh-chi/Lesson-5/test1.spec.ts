import { test } from "@playwright/test";
const username = "chinguyen";
const email = "chinguyen@prepedu.com";
const gender = "female";
const hobbies = ["reading", "traveling"];
const interest = "music";
const country = "canada";
const dateOfBirth = "1996-07-11";
const bio =
  "I am a student at Prepedu Academy. I love learning new things and exploring the world.";
const rating = "5";
const color = "#bcc2f0";

test("Register Page", async ({ page }) => {
  await test.step("Navigate to Register Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page
      .locator("//a[contains(text(),'Bài học 1: Register Page')]")
      .click();
  });
  await test.step("Fill information", async () => {
    await page.locator("//input[@id='username']").fill(username);
    await page.locator("//input[@id='email']").fill(email);
    await page.locator(`//input[@id='${gender}']`).click();
    for (let hobby of hobbies) {
      await page.locator(`//input[@id='${hobby}']`).click();
    }
    await page.locator("//select[@id='interests']").selectOption(interest);
    await page.locator("//select[@id='country']").selectOption(country);
    await page.locator("//input[@id='dob']").fill(dateOfBirth);
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("data-test/Chi.jpg");
    await page.locator("//textarea[@id='bio']").fill(bio);
    await page.locator("//input[@id='rating']").fill(rating);
    await page.locator("//input[@id='favcolor']").fill(color);
    await page.locator("//div[contains(text(),'Hover over me')]").hover();
    await page.locator("//input[@id = 'newsletter']").check();
    await page.locator("//span[@class = 'slider round']").click();
  });
  await test.step("Click button register", async () => {
    await page.locator("//button[text()='Register']").click();
  });
});
