import { url } from "inspector";
import { LoginPage } from "./login-page";
import { test, expect } from "@playwright/test";
import { log } from "console";
const LOGIN_URL = "https://pw-practice-dev.playwrightvn.com/wp-admin";
test.describe("AUTH - Authentication", async () => {
  let loginPage: LoginPage;

  const input = {
    usernamesai: "k13",
    passwordsai: "123456",
    usernamedung: "1104-nhatanh",
    passworddung: "ERD4S2)#9^Nb!YjCGwqa)6XQ",
  };

  const messloi = `Error: The username ${input.usernamesai} is not registered on this site. If you are unsure of your username, try your email address instead.`;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page, LOGIN_URL);
    await loginPage.goto();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("@AUTH_001: Login fail", async ({ page }) => {
    await test.step("Nhập thông tin user, password bị sai", async () => {
      // nhập user, password sai
      //   await page.locator("//input[@id='user_login']").fill(input.usernamesai);
      //   await page.locator("//input[@id='user_pass']").fill(input.passwordsai);
      //code mới
      await loginPage.fillUsername(input.usernamesai);
      await loginPage.fillPassword(input.passwordsai);

      // Sử dụng hàm getInputValue của LoginPage cho tính nhất quán
      const username = await loginPage.getInputValue(loginPage.xpathUsername);
      const password = await loginPage.getInputValue(loginPage.xpathPassword);

      console.log(username);
      console.log(password);
      expect(username).toBe(input.usernamesai);
      expect(password).toBe(input.passwordsai);

      // click button login (Dùng phương thức của POM)
      await loginPage.clickLoginButton();

      // hiển thị mess lỗi (Dùng XPath từ LoginPage)
      await expect(page.locator(loginPage.xpathErrorMessage)).toBeVisible();
      // Kiểm tra nội dung
      await expect(page.locator(loginPage.xpathErrorMessage)).toContainText(
        messloi
      );
    });
  });

  test("@AUTH_002: Login pass", async ({ page }) => {
    await test.step("Nhập thông tin user, password đúng", async () => {
      // ✅ Thay thế locator/fill trực tiếp bằng phương thức POM
      await loginPage.fillUsername(input.usernamedung);
      await loginPage.fillPassword(input.passworddung);

      // ✅ Sử dụng hàm getInputValue của LoginPage để kiểm tra
      const username = await loginPage.getInputValue(loginPage.xpathUsername);
      const password = await loginPage.getInputValue(loginPage.xpathPassword);

      console.log(username);
      console.log(password);
      expect(username).toBe(input.usernamedung);
      expect(password).toBe(input.passworddung);

      // ✅ Click button login bằng phương thức POM
      await loginPage.clickLoginButton();
      // await page.waitForTimeout(1000); // Thường không cần trong Playwright

      // login thành công, kiểm tra url sau khi login thành công
      // URL mục tiêu chính xác sau khi đăng nhập thành công
      const DASHBOARD_URL =
        "https://pw-practice-dev.playwrightvn.com/wp-admin/";

      await expect(page).toHaveURL(/.*wp-admin/); // URL chứa
      await expect(page).toHaveURL(DASHBOARD_URL); // URL chính xác

      // có tiêu đề h1 dashboard
      // ✅ Tối ưu hóa kiểm tra hiển thị (toBeVisible)
      await expect(page.locator("//h1[text() = 'Dashboard']")).toBeVisible();
      await expect(page.locator("//h2[text() = 'At a Glance']")).toBeVisible();
      await expect(page.locator("//h2[text() = 'Activity']")).toBeVisible();
    });
  });
});
