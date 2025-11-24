import { Page } from '@playwright/test';
import { DashboardPage } from './dashboard-page'


export class TagsPage extends DashboardPage {

    locatorTagPage = {
        inputTagName: '#tag-name',
        inputTagSlug: '#tag-slug',
        btnAddTag: '#submit',
    }

    constructor(page: Page) {
        super(page);
    }

    async inputTagName(tagName: string) {
        await this.page.fill(this.locatorTagPage.inputTagName, tagName);
    }

    async inputTagSlug(slug: string): Promise<void> {
        await this.page.fill(this.locatorTagPage.inputTagSlug, slug);
    }

    async clickBtnAddNewTag() {
        await this.page.click(this.locatorTagPage.btnAddTag);
    }

    async createNewTag(tagName: string, slug: string) {
        await this.inputTagName(tagName);
        await this.inputTagSlug(slug);
        await this.clickBtnAddNewTag();
    }


    getXpathTagName(tagName: string) {
        return this.page.locator(`//tbody[@id='the-list']/descendant::a[text()='${tagName}']`);
    }

    getXpathSlugName(tagName: string, slugName: string) {
        return this.page.locator(`//td[contains(., '${tagName}')]/following-sibling::td[text() = '${slugName}']`);
    }

    getXpathDelete(tagName: string) {
        const xpathDelete = this.getXpathTagName(tagName);
        return xpathDelete.locator(`//parent::*/following-sibling::div[@class='row-actions']/span[@class='delete']`);
    } // Viết hàm xóa Tag.
}