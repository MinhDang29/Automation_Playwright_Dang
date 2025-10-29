import { test } from '@playwright/test';

test(" Ten test case ", async ({page}) => {
    await test.step(" Ten step ", async () => { 
        //Navigate to URL
        await page.goto("https://material.playwrightvn.com");   
        
        //click
        await page.locator("//a[contains(text(),'Bài học 1: Register Page')]").click();
        // {clickCount: 1 , button: 'left' , modifiers: ['Alt'] });

        //fill
        await page.locator("//input[@type='text']").fill("Playwright");

        await page.locator("//input[@type='email']").pressSequentially("playwright@example.com");// nhập lần lượt

        await page.locator("//input[@id='male']").check();
        const isChecked = await page.locator("//input[@id='male']").isChecked();
        console.log("isChecked: ", isChecked);

        // select option
        await page.locator("//*[@id='country']").selectOption('canada');// value

        //choose file
        await page.locator("//input[@type='file']").setInputFiles("tests/lesson03/file1.txt");

    });

    await test.step(" test case 2 ", async () => {  
       

    });
    });   
 