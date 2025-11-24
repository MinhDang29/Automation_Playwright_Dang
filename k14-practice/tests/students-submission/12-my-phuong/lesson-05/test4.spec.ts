import { test } from '@playwright/test';
test('Verify that an user can add and search notes', async ({ page }) => {
  let notes = [
    { title: '', description: '' }
  ];
  notes.pop();
  await test.step('Step 1: Get 10 notes from vnexpress', async () => {
    await page.goto('https://vnexpress.net/khoa-hoc-cong-nghe');
    for (let i = 0; i < 10; i++) {
      const articles = page.locator("//*[contains(@class, 'item-news')]").nth(i);
      const titleLocator = articles.locator("//*[contains(@class, 'title-news')]//a");
      const hasTitle = await titleLocator.count();
      if (hasTitle > 0) {
        const title = await titleLocator.innerText();
        const descriptionLocator = articles.locator("//*[contains(@class, 'description')]");
        let description = '';
        if (await descriptionLocator.count() > 0) {
          description = await descriptionLocator.innerText();
          const sentences = description.split('.');
          let newDescription = '';
          let count = 0;

          for (let i = 0; i < sentences.length; i++) {
            if (sentences[i].trim() !== '') {
              newDescription += sentences[i].trim() + '.';
              count++;
            }
            if (count === 3) break;
          }
          description = newDescription;
        }
        notes.push({
          title,
          description
        });
      }
    }
  });
  await test.step('Step 2: Add 10 notes', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[contains(text(), "Bài học 4: Personal notes")]').click();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].title) {
        await page.locator('//input[@id="note-title"]').fill(notes[i].title);
      } else {
        console.log('Null title');
      }
      await page.locator('//textarea[@id="note-content"]').fill(notes[i].description);
      await page.locator('//button[@id="add-note"]').click();
      await page.waitForTimeout(1000);
    }
  });
  await test.step('Step 3: Search article title', async () => {
    const index = 2;
    const title = notes[index].title;
    await page.locator('//input[@placeholder="Search notes..."]').fill(title);
  });
});