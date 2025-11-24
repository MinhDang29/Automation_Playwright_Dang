import { Locator, Page } from '@playwright/test';
import { ProductPage } from './03-product-page';
import { TodoPage } from './03-todo-page';

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async openMaterialPage() {
        await this.page.goto('https://material.playwrightvn.com/');
    }

    async gotoPage(pageName: string): Promise<ProductPage | TodoPage | null> {
        await this.page.locator(`//a[contains(text(),'${pageName}')]`).click();

        if (pageName === 'Product page') {
            return new ProductPage(this.page);
        } else if (pageName === 'Todo page') {
            return new TodoPage(this.page);
        }

        return null;
    }
}