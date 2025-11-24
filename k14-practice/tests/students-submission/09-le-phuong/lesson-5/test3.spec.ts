import { expect, test } from '@playwright/test';

test("Verify that user can add product", async ({ page }) => {
    await test.step("Step 1 Open web page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2 Click Bai hoc 3 link ", async () => {
        await page.locator("//a[contains(text(),'Bài học 3: Todo page')]").click();
    });

    await test.step("Step 3: Add 100 todo co noi dung Todo <>i ", async () => {
        for (let i = 1; i <= 100; i++) {
            let text = `Todo${i}`;
            await page.locator("//input[@id='new-task']").fill(text); //add 2 product 1
            await page.locator("//button[@id='add-task']").click();// add 3 sản phẩm
        }
    });

    await test.step("Step 4: Delete row chan ", async () => {
        page.on("dialog", async (dialog) => {
            await dialog.accept();
        });
        for (let i = 1; i <= 100; i++) {
            if (i % 2 != 0) {
                let locator = `//button[@id="todo${i}-delete"]`;
                await page.locator(locator).click();
            }
        }
    });

});
