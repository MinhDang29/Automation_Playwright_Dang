import { test, expect, type Page } from '@playwright/test';

test('add 100 todo', async ({ page }) => {
    await test.step("Go to User Register page/ Bài học 3", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[contains(text(),"Bài học 3: To")]').click();
    })

    await test.step("Get array value from 1 to 100", async () => {
        let arr_03 = [];
        for (let i = 1; i <= 100; i++) {
            arr_03.push(`Todo ${i}`);
        }
        console.log(arr_03);
        for (let value of arr_03) {
            await page.locator("//input[@id='new-task']").fill(value);
            await page.locator('//button[@id="add-task"]').click();
        }
    })
    await test.step("Delete todo having odd number", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                const xDeleteBtn = `//button[@id="todo-${i}-delete"]`;
                await page.locator(xDeleteBtn).click();
            }
        }
    })
})