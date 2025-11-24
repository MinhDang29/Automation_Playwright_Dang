import { Page } from "playwright";
import { expect, test } from "@playwright/test";
import { RegisterPage } from "./base-page/register-page";

// data test
const username = "chinguyen";
const email = "chinguyen@prepedu.com";
const gender = "female";
const hobbies = ["reading", "traveling"];
const interest = "music";
const country = "canada";
const dateOfBirth = "1996-07-11";
const pathFile = "tests/students-submission/04-quynh-chi/Lesson-10/Chi.jpg";
const bio =
  "I am a student at Prepedu Academy. I love learning new things and exploring the world.";
const rating = "5";
const color = "#bcc2f0";
const url = "https://material.playwrightvn.com/";
// declare class
let registerPage: RegisterPage;

test.describe("Register Page", async () => {
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page, url);

    // go to register Page
    await registerPage.goToPage();
    await registerPage.clickRegisterPage();
  });

  test("Register Page", async ({ page }) => {
    await test.step("Fill information", async () => {
      await registerPage.fillUsername(username);
      await registerPage.fillEmail(email);
      await registerPage.clickGender(gender);
      await registerPage.clickHobbies(hobbies);
      await registerPage.selectInterests(interest);
      await registerPage.selectCountry(country);
      await registerPage.inputDOB(dateOfBirth);
      await registerPage.setProfilePicture(pathFile);
      await registerPage.inputBio(bio);
      await registerPage.inputRate(rating);
      await registerPage.chooseFavColor(color);
      await registerPage.hoverSubscribe();
      await registerPage.clickNewsletter();
    });
    await test.step("Click button register", async () => {
      // Click button register
      await registerPage.clickButtonRegister();

      // expect result
      const dataUsername = await registerPage.getCellData(1, "Username");
      const dataEmail = await registerPage.getCellData(1, "Email");
      expect(dataUsername).toContain(username);
      expect(dataEmail).toContain(email);
    });
  });
});
