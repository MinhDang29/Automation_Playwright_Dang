import { test } from '@playwright/test';
test("Verify that an user can add todo items and delete todo items with odd number", async ({ page }) => {
    await test.step('Step 1: Navigate to https://material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Step 2: Click on "Bài học 3: Todo page"', async () => {
        await page.locator('//a[contains(text(), "Bài học 3: Todo page")]').click();
    });
    await test.step('Step 3: Add new 100 todo item with format "Todo <i>"', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    });
    await test.step('Step 4: Delete todo items with odd number', async () => {
        page.on('dialog', dialog => dialog.accept());
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 1) {
                const todo = page.locator(`//span[contains(text(), 'Todo ${i}')]`);
                if (await todo.count() > 0) {
                    const deleteButton = page.locator(`//button[@id="todo-${i}-delete"]`);
                    await deleteButton.click();
                }
            }
        }
    });
})