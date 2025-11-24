import { test, expect, type Page } from '@playwright/test';

test('exercise 4', async ({ page }) => {
    const news = [];
    await test.step("Navigate to vnexpress", async () => {
        await page.goto('https://vnexpress.net/khoa-hoc-cong-nghe');        
        for (let i = 5; i <= 15; i++) {
            // get title
            const titleNew = `//h4[@class="title-news"]/a[@data-medium="Item-${i}"]`;
            let textContent_01 = await page.locator(titleNew).textContent();
            console.log(textContent_01);
            //get description
            const descriptionNew = `//p[@class="description"]/a[@data-medium="Item-${i}"]`;
            let textContent_02 = await page.locator(descriptionNew).textContent();
            console.log(textContent_02);

            const news_object = {
                "title": textContent_01,
                "description": textContent_02,
            }
            news.push(news_object);
        }
        // console.log(news[0].title); 
    })

    await test.step("Go to User Register page/ Bài học 4", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[contains(text(),"Bài học 4: Personal")]').click();
    })
    await test.step("Add 10 notes", async () => {
        for (let i = 0; i < 10; i++) {
            await page.locator('//input[@id="note-title"]').fill(news[i].title);
            await page.locator('//textarea[@id="note-content"]').fill(news[i].description);
            await page.locator('//button[@id="add-note"]').click();
        }
    })
})