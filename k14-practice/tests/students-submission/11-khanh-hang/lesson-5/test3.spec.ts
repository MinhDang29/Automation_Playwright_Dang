import { test } from "@playwright/test";

test("Todo Page", async ({ page }) => {
    await test.step("navigate to Todo page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('//a[contains(text(),"Bài học 3: Todo page")]').click();
    });
    await test.step("add task", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    });
    
    await test.step("delete task", async () => {
        page.on('dialog', dialog => dialog.accept());
        const items = await page.locator('//li').all();
        for (let i = items.length-1; i >=0; i--){
            if ((i +1) % 2 === 1) {
                await items[i].locator('//button[text()="Delete"]').click();
            }
        }
    });
});
