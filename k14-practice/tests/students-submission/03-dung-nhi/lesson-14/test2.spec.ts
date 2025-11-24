import { test, expect } from '@playwright/test';

test("Go to lesson 5 - Drag & Drop", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByText('Bài học 5: Puzzle drag and drop game').click();

    for(let i=1;i<5;i++){
        const dragFrom = page.locator(`//div[@class = "puzzle-piece" and @id = "piece-${i}"]`);
        const dropTo = page.locator(`//div[@class = "dropzone" and @data-piece="${i}"]`);
        await dragFrom.dragTo(dropTo);
    }
});


