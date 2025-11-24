import { test } from "@playwright/test";

test("Todo Page", async ({ page }) => {
  await test.step("Navigate to Todo Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
  });
  await test.step("Add 100 todo items", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator("//input[@id = 'new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id = 'add-task']").click();
    }
  });
  await test.step("Delete todo items have odd", async () => {
    page.on("dialog", (dialog) => dialog.accept());
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 1) {
        await page.locator(`//button[@id='todo-${i}-delete']`).click();
        // console.log(`Deleted todo item ${i}`);
      }
    }
  });
});
