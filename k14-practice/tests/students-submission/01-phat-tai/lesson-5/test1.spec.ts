import { test } from "@playwright/test";

test("Truy cập trang https://material.playwrightvn.com/", async ({ page }) => {
  // Truy cập trang chính
  await page.goto("https://material.playwrightvn.com/");

  // 2. Click vào link Bài học 1: Register Page
  await page.locator('a[href="01-xpath-register-page.html"]').click();

  // 3. Điền form
  await page.locator('input[id="username"]').fill("tai@email.com");
  await page.locator('input[id="email"]').fill("Tai123!");
  await page.locator('input[name="gender"][value="male"]').check();
  await page.locator('input[name="hobbies"][value="traveling"]').check();
  await page.locator('input[name="hobbies"][value="reading"]').check();
  await page.locator('select[name="interests"]').selectOption("Music");
  await page.locator('select[id="country"]').selectOption("usa");
  await page.locator('input[name="dob"]').fill("1998-03-02");

  await page
    .locator('input[id="profile"]')
    .setInputFiles("tests/lesson-5/data/avt.jpg");

  await page.locator('textarea[id="bio"]').fill("Đây là một đoạn bio ");

  await page.locator('input[id="rating"]').fill("3");
  await page.locator('input[name="newsletter"]').check();
  await page.locator('[name="newsletter"]').hover();

  //await page.locator('input[id="toggleOption"]').check();
  //await page.locator('input[id="toggleOption"]').click();
  await page.locator("span.slider.round").click();
  //Star Rating: => câu này mình không biết làm
  //await page.locator('input[id="customDate"]').fill('1998-03-02');

  // 4. Click nút Register
  await page.locator('button[type="submit"]').click();
});
