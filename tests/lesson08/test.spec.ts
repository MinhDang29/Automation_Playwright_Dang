import {expect, test } from '@playwright/test';

  test.describe("AUTH - Authentication",()=>{
    //Date test
      const invalidUserCredentials = {
        username: "admin",
        password: "123456"    
      };
      const xpathLogin = {
        username: "//input[@id='user_login']",
        password: "//input[@id='user_pass']",
        login: "//input[@id='wp-submit']",
        errorMessage: "//div[@id='login_error']//p"
      }
      
    test.beforeEach(async({page}) => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    })
   
    test('@AUTH_001 - Login fail', async ({page}) => {
      await test.step("Nhập vào thông tin username,password bị sai",async()=> {
        // Nhập vào thông tin username, password bị sai
        await page.locator(xpathLogin.username).fill(invalidUserCredentials.username);
        await page.locator(xpathLogin.password).fill(invalidUserCredentials.password);
       
        // Giá trị được điền vào ô input
        const actualUsername = await page.locator(xpathLogin.username).inputValue();
        const actualPassword = await page.locator(xpathLogin.password).inputValue();

        expect(actualUsername).toEqual(invalidUserCredentials.username);
        expect(actualPassword).toEqual(invalidUserCredentials.password);

      });
      await test.step("Click login",async()=>{
        //Action
        await page.locator(xpathLogin.login).click();
        //Expect result
        const expMsg = `Error: The username ${invalidUserCredentials.username} or password you enteredis not registered on this 
        site. If you are unsure of your username, try your email address instead.`;
        await expect(page.locator(xpathLogin.errorMessage)).toHaveText(expMsg);

      });

    });
   
    test('@AUTH_002 - Login success', async () => {
      
    
    });
  
})