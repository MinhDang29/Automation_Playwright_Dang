import { Page } from "playwright";
import { MaterialBasePage } from "./material-base-page";

export class VnExpressPage {
  page: Page;
  url: string;
  // define xpath articles
  titleArticles = "//h3[@class='title-news']/a";
  contentArticles = "//p[@class='description']/a";

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  async gotoVnExpress(): Promise<void> {
    await this.page.goto(this.url, { waitUntil: "domcontentloaded" });
  }

  async getTitleArticles(): Promise<string[]> {
    return await this.page.locator(this.titleArticles).allTextContents();
  }

  async getContentArticles(): Promise<string[]> {
    return await this.page.locator(this.contentArticles).allTextContents();
  }
}

export class PersonalNotePage extends MaterialBasePage {
  // xpath element
  noteTitle = "//input[@id='note-title']";
  noteContent = "//textarea[@id='note-content']";
  buttonAddNote = "//button[@id='add-note']";
  inputSearch = "//input[@id='search']";
  noteListsTitle = "//ul[@id='notes-list']//strong";

  constructor(page: Page, url: string) {
    super(page, url);
  }

  async inputTitleNote(title: string): Promise<void> {
    await this.page.locator(this.noteTitle).fill(title);
  }

  async inputContentNote(content: string): Promise<void> {
    await this.page.locator(this.noteContent).fill(content);
  }

  async clickButtonAddNote(): Promise<void> {
    await this.page.locator(this.buttonAddNote).click();
  }

  async inputSearchNote(searchContent: string): Promise<void> {
    await this.page.locator(this.inputSearch).fill(searchContent);
  }

  async getTitleNoteSearch(): Promise<string | null> {
    return this.page.locator(this.noteListsTitle).textContent();
  }
}
