import {test, expect}  from '@playwright/test';
test.describe("AUTH - Authentication", async () => {
const input ={
    usernamesai: "k13",
    passwordsai: "123456",
    usernamedung: "1104-nhatanh",
    passworddung: "ERD4S2)#9^Nb!YjCGwqa)6XQ"
}

const messloi =
  `Error: The username ${input.usernamesai} is not registered on this site. If you are unsure of your username, try your email address instead.`;

     test.beforeEach(async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
     })

         test.afterEach(async ({ page }) => {
        await page.close();
    });
    
    test("@AUTH_001: Login fail", async ({ page }) => {
await test.step("Nhập thông tin user, password bị sai", async () => {
  // nhập user, password sai
  await page.locator("//input[@id='user_login']").fill(input.usernamesai);
  await page.locator("//input[@id='user_pass']").fill(input.passwordsai);
  
// kiểm tra giá trị nhập vào và hiển thị đúng trên ô input
  const username = await page.locator("//input[@id='user_login']").inputValue();
  const password = await page.locator("//input[@id='user_pass']").inputValue();
  console.log(username);
  console.log(password);
  expect(username).toBe(input.usernamesai);
  expect(password).toBe(input.passwordsai);


  // click button login
  await page.locator("//input[@name='wp-submit']").click();
  await page.waitForTimeout(1000);

// hiển thị mess lỗi
  await expect(page.locator("//div[@id='login_error']")).toBeVisible();
  const mess = await expect(page.locator("//div[@id='login_error']//p")).toContainText(messloi);

})
    })

test ("@AUTH_002:Login pass", async ({ page }) => {
    await test.step("Nhập thông tin user, password đúng", async () => {
    
     // nhập user, password đúng
  await page.locator("//input[@id='user_login']").fill(input.usernamedung);
  await page.locator("//input[@id='user_pass']").fill(input.passworddung);
  
  // kiểm tra giá trị nhập vào và hiển thị đúng trên ô input
  const username = await page.locator("//input[@id='user_login']").inputValue();
  const password = await page.locator("//input[@id='user_pass']").inputValue();
  console.log(username);
  console.log(password);
  expect(username).toBe(input.usernamedung);
  expect(password).toBe(input.passworddung);
    
    // click button login
  await page.locator("//input[@name='wp-submit']").click();
  await page.waitForTimeout(1000);

  // login thành công, kiểm tra url sau khi login thành công
    await expect(page).toHaveURL(/.*\/wp-admin.*/);// url chứa
    await expect(page).toHaveURL('https://pw-practice-dev.playwrightvn.com/wp-admin/');

    // có tiêu đề h1 dashboard
    await expect(page.locator("//h1[text() = 'Dashboard']")).toBeVisible();
    await expect(page.locator("//h2[text() = 'At a Glance']")).toBeVisible();
    await expect(page.locator("//h2[text() = 'Activity']")).toBeVisible();

    })

})
})