import { test, expect } from "@playwright/test"
import { LoginPage } from "./login-page";
import { DashboardPage } from "./dashboard-page";

test.describe("AUTH - Authentication", async () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let invalidUserCredential = {
        userName: "k12",
        password: "invalid"
    };
    let userCredential = {
        userName: "k12-mentor",
        password: "M8kPNkjOoph4hYE#g%ERf0tr"
    };
    let url = "https://pw-practice-dev.playwrightvn.com/wp-admin";

    test.beforeEach(async ({ page }) => {
        // Khoi tao gia tri cho Login page
        loginPage = new LoginPage(page, url);
        dashboardPage = new DashboardPage(page);
        await loginPage.goTo();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test("@AUTH_001 - Login fail", async ({ page }) => {
        await test.step("Fill username and password invalid", async () => {
            // Fill user name + password with invalid value
            await loginPage.fillUsername(invalidUserCredential.userName);
            await loginPage.fillPassword(invalidUserCredential.password);
        
            const actualUsername = await loginPage.getInputValue(loginPage.xpathUserName);
            const actualPassword = await loginPage.getInputValue(loginPage.xpathPassword);

            // verify value
            expect(actualUsername).toBe(invalidUserCredential.userName);
            expect(actualPassword).toBe(invalidUserCredential.password);
        })

        await test.step("Click btn Login", async () => {
            // Click button Login
            dashboardPage = await loginPage.clickBtnLogin();

            // Verify error msg
            const expectedMsgError = `Error: The username ${invalidUserCredential.userName} is not registered on this site. If you are unsure of your username, try your email address instead.`
            await expect(loginPage.page.locator(loginPage.xpathErrMsg)).toHaveText(expectedMsgError);

        })
    })

    test("@AUTH_002 - Login sucess", async ({ page }) => {
        await test.step("Fill username and password valid", async () => {
            // Fill user name + password with valid value
            await loginPage.fillUsername(userCredential.userName);
            await loginPage.fillPassword(userCredential.password);

            const actualUsername = await loginPage.getInputValue(loginPage.xpathUserName);
            const actualPassword = await loginPage.getInputValue(loginPage.xpathPassword);

            // verify value 
            expect(actualUsername).toBe(userCredential.userName);
            expect(actualPassword).toBe(userCredential.password);
        })

        await test.step("Click btn Login", async () => {
            // Click btn Login 
            await loginPage.clickBtnLogin();

            // Verify url
            await expect(page).toHaveURL(/.*wp-admin/);

            // Verify heading h1 "Dashboard" display
            await expect(loginPage.page.locator(dashboardPage.xpathHeadingDashboard)).toBeVisible();

            // Verify heading 2 "At a Glance" and "Activity" display
            await expect(loginPage.page.locator(dashboardPage.xpathHeadingAtAGlance)).toBeVisible();
            await expect(loginPage.page.locator(dashboardPage.xpathHeadingActivity)).toBeVisible();
        })
    })
})