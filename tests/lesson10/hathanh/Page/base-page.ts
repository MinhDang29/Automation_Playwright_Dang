import { Page } from "playwright";

export class BasePage {
    page: Page;
    url: string;
    xpathHeadingDashboard = "//h1[text()='Dashboard']";
    xpathHeadingAtAGlance = "//h2[text()='At a Glance']";
    xpathHeadingActivity = "//h2[text()='Activity']";

    constructor(page: Page, url: string) {
        this.page = page;
        this.url = url;
    };

    async goTo() {
        await this.page.goto(this.url);
    };

    async navigateToSubMenu(menu: string, subMenu: string) {
        // navigate to sub menu
    }
}