import { Page } from "playwright";
import { BasePage } from "./base-page";
import { DashboardPage } from "../dashboard-page";

export class AccountPage  {
    page: Page;

    xpathsearchInput = "(//input[@name='s'])[1]";
    xpathsearchResult = "(//a[contains(text(),'Bơm nước xe ')])[1]";
    
    constructor(page: Page) {
        this.page = page;
    };

    

  async search(keyword: string): Promise<void> {
        // Playwright tự động wait visibility, không cần wait thủ công
        await this.page.locator(this.xpathsearchInput).fill(keyword);
    }

    // 2. Hàm clickSearchResult: Click vào kết quả
    async clickSearchResult(): Promise<void> {
        // Playwright tự động wait element clickable
        await this.page.locator(this.xpathsearchResult).click();
    }
    async getInputValue(field: string): Promise<string>{
        return await this.page.inputValue(field);
    }
}