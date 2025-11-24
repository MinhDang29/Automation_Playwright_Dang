import { test } from '@playwright/test';

test("Drag & Drop manually", async ({ page}) => {
    const dragFrom = page.locator('//div[@class = "puzzle-piece" and @id = "piece-2"]');
    const dropTo = page.locator('//div[@class = "dropzone" and @data-piece="2"]');
    await page.goto("https://material.playwrightvn.com/05-xpath-drag-and-drop.html");

    // await dragFrom.hover();
    // await page.mouse.down();
    // await dropTo.hover();
    // await page.mouse.up();
    await dragFrom.dragTo(dropTo);

});
