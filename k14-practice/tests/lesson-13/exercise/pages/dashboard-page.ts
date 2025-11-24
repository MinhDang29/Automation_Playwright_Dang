import { Page } from '@playwright/test';
import { LoginPage } from './login-page';

export class DashboardPage extends LoginPage {
    page: Page;

    locatorPostMenu = {
        postMenu: `//div[text()='Posts']`,
        tagSubMenu: this.getXpathSubMenu('Tags'),
        categorySubMenu: this.getXpathSubMenu('Categories'),
    }

    constructor(page: Page) {
        super(page);
        this.page = page;
    }



    getXpathSubMenu(fields: string): string {
        return `//a[normalize-space()='${fields}']`;
    }

    async clickPostMenu() {
        await this.page.click(this.locatorPostMenu.postMenu);
    }
}