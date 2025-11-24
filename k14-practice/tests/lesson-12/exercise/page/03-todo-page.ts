
import { Page } from "@playwright/test";

export class TodoPage {
    page: Page;

    xpathEnterANewTask = `//input[@id='new-task']`;
    xpathBtnAddTask = `//button[@id='add-task']`;

    getLocatorTask(content: string) {
        return this.page.locator(`//span[text()='${content}']`);
    }

    constructor(page: Page) {
        this.page = page;
    }

    async addNewTask(content: string) {
        await this.page.locator(this.xpathEnterANewTask).fill(content);
        await this.page.locator(this.xpathBtnAddTask).click();
    }

    async deleteTask(content: string) {
        const xpath = (content.replace(' ', '-')).toLowerCase();
        await this.page.locator(`//button[@id="${xpath}-delete"]`).click();
    }
}
