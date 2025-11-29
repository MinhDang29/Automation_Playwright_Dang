import { test, expect } from "@playwright/test"

test.describe("AUTH - Authentication", async () => {
    let emailInp = "//*[@id='username']";
    let passwordInp = "//*[@id='password']";
    let loginBtn  = "//button[text()='Đăng nhập']";
    let xpathErrorMsg = "//ul[@class='woocommerce-error']";
   
    let xpathAccount = "//*[text()='Trang tài khoản']";
    let xpathOrders = "//*[text()='Đơn hàng']";
    let xpathLogout = "//*[text()='Thoát']";
    let invalidUserCredential = {
        userName: "mdangdn29@gmail.com",
        password: "D@ng29119922"
    };
    let userCredential = {
        userName: "mdangdn29@gmail.com",
        password: "D@ng291199"
    };

    test.beforeEach(async ({ page }) => {
        await page.goto("https://bantheme.xyz/hathanhauto/tai-khoan/");
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test("@AUTH_001 - Login fail", async ({ page }) => {
        await test.step("Fill username and password invalid", async () => {
            // Fill user name + password with invalid value
            await page.locator(emailInp).fill(invalidUserCredential.userName);
            await page.locator(passwordInp).fill(invalidUserCredential.password);

            const actualUsername = await page.inputValue(emailInp);
            const actualPassword = await page.inputValue(passwordInp);
            // verify value
            expect(actualUsername).toBe(invalidUserCredential.userName);
            expect(actualPassword).toBe(invalidUserCredential.password);
        })

        await test.step("Click btn Login", async () => {
            // Click button Login
            await page.click(loginBtn);

            // Verify error msg
            const expectedMsgError = `Mật khẩu bạn nhập cho địa chỉ email ${invalidUserCredential.userName} không đúng`
            //await expect(page.locator(xpathErrorMsg)).toHaveText(expectedMsgError);
            await expect(page.locator(xpathErrorMsg)).toContainText(expectedMsgError);

        })
    })

    test("@AUTH_002 - Login sucess", async ({ page }) => {
        await test.step("Fill username and password valid", async () => {
            // Fill user name + password with valid value
            await page.locator(emailInp).fill(userCredential.userName);
            await page.locator(passwordInp).fill(userCredential.password);

            const actualUsername = await page.inputValue(emailInp);
            const actualPassword = await page.inputValue(passwordInp);
            // verify value 
            expect(actualUsername).toBe(userCredential.userName);
            expect(actualPassword).toBe(userCredential.password);
        })

        await test.step("Click btn Login", async () => {
            // Click btn Login 
            await page.click(loginBtn);
            // await page.waitForLoadState("domcontentloaded");

            // Verify url
            await expect(page).toHaveURL(/.*tai-khoan/);

            // Verify heading h1 "Dashboard" display
            await expect(page.locator(xpathAccount)).toBeVisible();

            // Verify heading 2 "At a Glance" and "Activity" display
            await expect(page.locator(xpathOrders)).toBeVisible();
            await expect(page.locator(xpathLogout)).toBeVisible();
        })
    })
})