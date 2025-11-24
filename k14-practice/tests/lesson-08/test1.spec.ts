// HEAD

// // import { expect, test } from '@playwright/test';

// // test.describe("AUTH - Authentication", () => {
// //     // Data test
// //     let invalidUserCredential;
// //     const xpathUserName = "//input[@id = 'user_login']";
// //     const xpathPassword = "//input[@id = 'user_pass']";
// //     const xpathBtnLogIn = "//input[@id = 'wp-submit']";
// //     const xpathErrMsg = "//div[@id = 'login_error']//p";
// //     const xpathLogin = {
// //         userName: "",
// //         password: 
// //     }

// //     test.beforeAll(() => {
// //         invalidUserCredential = {
// //             userName: "K14-class",
// //             password: "wrong password"
// //         };


// //     })

// //     test.beforeEach(async ({ page }) => {
// //         await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
// //     })

// //     test("@AUTH_001 - Login fail", async ({ page }) => {
// //         await test.step("Nhập vào thông tin username, password bị sai", async () => {
// //             // Nhập vào thông tin username, password bị sai
// //             await page.locator(xpathUserName).fill(invalidUserCredential.userName);
// //             await page.locator(xpathPassword).fill(invalidUserCredential.password);

// //             // Giá trị của username, password được điền vào  ô input
// //             const actualUsername = await page.locator(xpathUserName).inputValue();
// //             const actualPassword = await page.locator(xpathPassword).inputValue();

// //             expect(actualUsername).toEqual(invalidUserCredential.userName); // Assertion
// //             expect(actualPassword).toEqual(invalidUserCredential.password);
// //         });

// //         await test.step("Click btn Login", async () => {
// //             // Click button login
// //             await page.locator(xpathBtnLogIn).click();

// //             // Kiem tra msg loi 
// //             const expMsg = `Error: The username ${invalidUserCredential.userName} is not registered on this site. If you are unsure of your username, try your email address instead.`;
// //             await expect(page.locator(xpathErrMsg)).toHaveText(expMsg);  // web-first assertion
// //         });

// //     });

// //     test("@AUTH_002 - Login success", async () => {

// //     });
// // })

// // // Before all > Before each > Chay TC 1 > After each > Before each > Chay TC2 > After each > After all 
// import { expect, test } from '@playwright/test';

// // import { expect, test } from '@playwright/test';
// // test.describe("AUTH - Authentication", () => {
// //     // Data test
// //     let invalidUserCredential;
// //     const xpathUserName = "//input[@id = 'user_login']";
// //     const xpathPassword = "//input[@id = 'user_pass']";
// //     const xpathBtnLogIn = "//input[@id = 'wp-submit']";
// //     const xpathErrMsg = "//div[@id = 'login_error']//p";
// //     const xpathLogin = {
// //         userName: "",
// //         password: 
// //     }

// //     test.beforeAll(() => {
// //         invalidUserCredential = {
// //             userName: "K14-class",
// //             password: "wrong password"
// //         };


// //     })

// //     test.beforeEach(async ({ page }) => {
// //         await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
// //     })

// //     test("@AUTH_001 - Login fail", async ({ page }) => {
// //         await test.step("Nhập vào thông tin username, password bị sai", async () => {
// //             // Nhập vào thông tin username, password bị sai
// //             await page.locator(xpathUserName).fill(invalidUserCredential.userName);
// //             await page.locator(xpathPassword).fill(invalidUserCredential.password);

// //             // Giá trị của username, password được điền vào  ô input
// //             const actualUsername = await page.locator(xpathUserName).inputValue();
// //             const actualPassword = await page.locator(xpathPassword).inputValue();

// //             expect(actualUsername).toEqual(invalidUserCredential.userName); // Assertion
// //             expect(actualPassword).toEqual(invalidUserCredential.password);
// //         });

// //         await test.step("Click btn Login", async () => {
// //             // Click button login
// //             await page.locator(xpathBtnLogIn).click();

// //             // Kiem tra msg loi 
// //             const expMsg = `Error: The username ${invalidUserCredential.userName} is not registered on this site. If you are unsure of your username, try your email address instead.`;
// //             await expect(page.locator(xpathErrMsg)).toHaveText(expMsg);  // web-first assertion
// //         });

// //     });

// //     test("@AUTH_002 - Login success", async () => {

// //     });
// // })

//  HEAD
// // Before all > Before each > Chay TC 1 > After each > Before each > Chay TC2 > After each > After all 

// // // Before all > Before each > Chay TC 1 > After each > Before each > Chay TC2 > After each > After all 
//  a54605d (feat: add content lesson 11)
