import { test } from "@playwright/test";

test("Truy cập trang https://material.playwrightvn.com/", async ({ page }) => {
  // Truy cập trang chính
  await page.goto("https://material.playwrightvn.com/");

  // 2. click vào “Bài học 2: Product page”
  await page.locator('a[href="02-xpath-product-page.html"]').click();
  await page.locator('[data-product-id="1"]').click({ clickCount: 2 });
  await page.locator('[data-product-id="2"]').click({ clickCount: 3 });
  await page.locator('[data-product-id="3"]').click({ clickCount: 1 });
});
