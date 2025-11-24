import { PersonalNotePage, VnExpressPage } from './base-page/personal-note-pate';
import { Page } from "playwright";
import { expect, test } from "@playwright/test";

let vnExpressPage: VnExpressPage;
let personalNotePage: PersonalNotePage;

const urlVnExpress = "https://vnexpress.net/";
const url = "https://material.playwrightvn.com/";
const dataVNExpress: { title: string; content: string }[] = [];

test.describe("Personal Note", async () => {
  test.beforeAll(async ({ page }) => {
    vnExpressPage = new VnExpressPage(page, urlVnExpress);

    // get data from VNExpress
    await vnExpressPage.gotoVnExpress();
    const titleArticles = await vnExpressPage.getTitleArticles();
    const contentArticles = await vnExpressPage.getContentArticles();
    // console.log(titleArticles);
    for (let i = 0; i < 10; i++) {
      dataVNExpress.push({
        title: titleArticles[i],
        content: contentArticles[i],
      });
    }
  });

  test.beforeEach(async ({ page }) => {
    personalNotePage = new PersonalNotePage(page, url);

    // Go to personal Page
    await personalNotePage.goToPage();
    await personalNotePage.clickPersonalNote();
  });

  test("Add personal note", async ({ page }) => {
    await test.step("Add 10 notes", async () => {
      for (let i = 0; i < dataVNExpress.length; i++) {
        await personalNotePage.inputTitleNote(dataVNExpress[i].title);
        await personalNotePage.inputContentNote(dataVNExpress[i].content);
        await personalNotePage.clickButtonAddNote();
      }
    });
    await test.step("Search with note title", async () => {
      await personalNotePage.inputSearchNote(dataVNExpress[1].title);
      const titleNoteList = await personalNotePage.getTitleNoteSearch();
      expect(titleNoteList).toContain(dataVNExpress[1].title);
    });
  });
});
