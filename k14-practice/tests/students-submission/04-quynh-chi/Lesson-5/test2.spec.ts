import { test } from "@playwright/test";

test("Product page", async ({ page }) => {
  await test.step("Navigate to Product Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page
      .locator("//a[contains(text(),'Bài học 2: Product page')]")
      .click();
  });
  await test.step("Add product to cart", async () => {
    await page
      .locator("//div[text()='Product 1']/following-sibling::button")
      .click({ clickCount: 2 });
    await page
      .locator("//div[text()='Product 2']/following-sibling::button")
      .click({ clickCount: 3 });
    await page
      .locator("//div[text()='Product 3']/following-sibling::button")
      .click();
  });
});
