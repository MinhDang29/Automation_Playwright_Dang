import { test } from "@playwright/test";

const dataVNExpress: { title: string; content: string }[] = [];

test("Personal notes", async ({ page }) => {
  await test.step("Get data from VNExpress", async () => {
    await page.goto("https://vnexpress.net/", {
      waitUntil: "domcontentloaded",
    });
    const titleArticles = await page
      .locator("//h3[@class='title-news']/a")
      .allTextContents();
    const contentArticles = await page
      .locator("//p[@class='description']/a")
      .allTextContents();
    for (let i = 0; i < 10; i++) {
      dataVNExpress.push({
        title: titleArticles[i],
        content: contentArticles[i],
      });
    }
    console.log("dataVNExpress: ", dataVNExpress);
  });
  await test.step("Navigate to Personal Notes Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page
      .locator("//a[contains(text(),'Bài học 4: Personal notes')]")
      .click();
  });
  await test.step("Add 10 notes", async () => {
    for (let i = 0; i < dataVNExpress.length; i++) {
      await page
        .locator("//input[@id='note-title']")
        .fill(dataVNExpress[i].title);
      await page
        .locator("//textarea[@id='note-content']")
        .fill(dataVNExpress[i].content);
      await page.locator("//button[@id='add-note']").click();
    }
  });
  await test.step("Search with note title", async () => {
    await page.locator("//input[@id='search']").fill(dataVNExpress[1].title);
  });
});
