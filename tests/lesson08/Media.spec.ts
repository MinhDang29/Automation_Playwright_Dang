import { test, expect } from "@playwright/test";
test.beforeEach(
    "tiền đk đã login vào trang admin, đứng tại menu Post/Tags",
    async ({ page }) => {
  const input = {
    usernamedung: "1104-nhatanh",
    passworddung: "ERD4S2)#9^Nb!YjCGwqa)6XQ",
  };
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
      await page.locator("//input[@id='user_login']").fill(input.usernamedung);
      await page.locator("//input[@id='user_pass']").fill(input.passworddung);
      await page.locator("//input[@name='wp-submit']").click();
      await page.waitForTimeout(1000);
      await page.locator("//div[contains(text(),'Media')]").focus();
      await page
        .locator("(//a[contains(text(),'Library')])[1]")
        .click({ timeout: 1000 });
});

    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
  test("@MEDIA_FILE_001: Media - upload file successfully", async ({ page }) => {
    await test.step("Upload file", async () => {
        await page.locator('//*[@role ="button" and text()="Add Media File"]').click();
        await page.locator('//*[@type ="button" and text()="Select Files"]').setInputFiles('tests/bt_js_lesson08_playwright/sy.txt')
        await page.reload();
    })
  })