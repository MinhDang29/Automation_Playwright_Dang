import { expect } from "@playwright/test";
import { Page } from "playwright";

export class MaterialBasePage {
  page: Page;
  url: string;
  xpathRegisterPage = "//a[contains(text(),'Bài học 1: Register Page')]";
  xpathProductPage = "//a[contains(text(),'Bài học 2: Product page')]";
  xpathTodoPage = "//a[text()='Bài học 3: Todo page']";
  xpathPersonalNote = "//a[contains(text(),'Bài học 4: Personal notes')]";

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  async goToPage() {
    await this.page.goto(this.url);
  }

  async clickRegisterPage(): Promise<void> {
    await this.page.locator(this.xpathRegisterPage).click();
  }

  async clickProductPage(): Promise<void> {
    await this.page.locator(this.xpathProductPage).click();
  }

  async clickTodoPage(): Promise<void> {
    await this.page.locator(this.xpathTodoPage).click();
  }

  async clickPersonalNote(): Promise<void> {
    await this.page.locator(this.xpathPersonalNote).click();
  }
}
