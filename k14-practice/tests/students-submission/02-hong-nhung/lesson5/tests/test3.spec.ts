import { test } from '@playwright/test';

test('Ex3', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='03-xpath-todo-list.html']");
    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
        await page.click("//button[@id='add-task']");
    };
    const todoList = await page.locator("//li");
    const count = await todoList.count();
    page.on('dialog', dialog => dialog.accept());
    for (let i = count - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            await todoList.nth(i).locator("//button[text()='Delete']").click();
        }
    }
})