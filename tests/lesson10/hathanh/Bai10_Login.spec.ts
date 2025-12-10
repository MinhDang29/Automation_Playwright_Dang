import { test, expect } from "@playwright/test";
import { log } from "console";
import { LoginPage } from "./Page/login-page";
import { AccountPage } from "./Page/account-page";
import { ProductPage } from "./Page/product-page";

test.describe("AUTH - Authentication", async () => {
  let loginPage: LoginPage;
  let accountPage: AccountPage;
  let productPage: ProductPage;

  let userCredential = {
    userName: "mdangdn29@gmail.com",
    password: "D@ng291199",
  };
  let searchKeyword = "merc";
  let url = "https://bantheme.xyz/hathanhauto/tai-khoan/";

  test.beforeEach(async ({ page }) => {
    // Khoi tao gia tri cho Login page
    loginPage = new LoginPage(page, url);
    await loginPage.goTo();
    accountPage = new AccountPage(page);
    productPage = new ProductPage(page);
  });

  test.afterEach(async ({ page }) => {
    //await page.close();
  });
  test("@AUTH_001 - Login sucess", async ({ page }) => {
    await test.step("Fill username and password valid", async () => {
      // Fill user name + password with valid value
      await loginPage.fillUsername(userCredential.userName);
      await loginPage.fillPassword(userCredential.password);

      const actualUsername = await loginPage.getInputValue(
        loginPage.xpathEmailInp
      );
      const actualPassword = await loginPage.getInputValue(
        loginPage.xpathPassword
      );
      // verify value
      expect(actualUsername).toBe(userCredential.userName);
      expect(actualPassword).toBe(userCredential.password);
    });

    await test.step("Click btn Login", async () => {
      // Click btn Login
      await loginPage.clickBtnLogin();
      // await page.waitForLoadState("domcontentloaded");

      // Verify url
      await expect(page).toHaveURL(/.*tai-khoan/);
    });

    await test.step("Search keyword", async () => {
      // search keyword
      await accountPage.search(searchKeyword);
      // Verify search
      const actualSearch = await accountPage.getInputValue(
        accountPage.xpathsearchInput
      );
      expect(searchKeyword).toBe(actualSearch);
      await accountPage.clickSearchResult();
     
    });

    await test.step(" Add to cart", async () => {
      // Click option xuat xu
      await productPage.clickOptionElement();
      // click option English
      await productPage.clickResultEnglish();
      // add to cart
      await productPage.addToCart();
      // verify add to cart success
      // Verify url
      await expect(page).toHaveURL(/.*gio-hang/);
    });
  });
});
