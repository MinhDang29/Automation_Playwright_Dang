import { test } from "@playwright/test";
//code 1:
test("Personal notes Page", async ({ page }) => {
    await test.step("navigate to Personal notes  page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('//a[contains(text(),"Bài học 4: Personal notes")]').click();
    });
    await test.step("add note", async () => {
        for (let i=1; i<=10; i++){
            await page.locator('//input[@id="search"]').fill(`search note ${i}`);
            await page.locator('//input[@id="note-title"]').fill(`title ${i}`);
            await page.locator('//textarea[@id="note-content"]').fill(`content ${i}`);
            await page.locator('//button[@id="add-note"]').click();
        }
        
    });
    await test.step("search note", async () => {
        await page.locator('//input[@id="search"]').fill(`title 6`);
        await page.locator('//button[@id="add-note"]').click();
    });
});

// code 2:
test("Personal notes Page1", async ({ page }) => {
    await test.step("navigate to Personal notes  page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('//a[contains(text(),"Bài học 4: Personal notes")]').click();
    });
    await test.step("add note then search", async () => {
        const notes = [
            {title: 'title 1', content: 'content 1'},
            {title: 'title 2', content: 'content 2'},
            {title: 'title 3', content: 'content 3'},
            {title: 'title 4', content: 'content 4'},
            {title: 'title 5', content: 'content 5'},
            {title: 'title 6', content: 'content 6'},
            {title: 'title 7', content: 'content 7'},
            {title: 'title 8', content: 'content 8'},
            {title: 'title 9', content: 'content 9'},
            {title: 'title 10', content: 'content 10'},
        ]
        for (let i=1; i<=10; i++){
            await page.locator('//input[@id="search"]').fill(`search note ${i}`);
            await page.locator('//input[@id="note-title"]').fill(`title ${i}`);
            await page.locator('//textarea[@id="note-content"]').fill(`content ${i}`);
            await page.locator('//button[@id="add-note"]').click();
        }
        
        const searchTit = notes[5].title;
        await page.locator('//input[@id="search"]').fill(searchTit);
        await page.locator('//button[@id="add-note"]').click();
    });
});