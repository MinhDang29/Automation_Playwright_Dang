import { Page } from "playwright";

export class DashboardPage {
    page: Page;

    xpathHeadingDashboard = "//h1[text()='Dashboard']";
    xpathHeadingAtAGlance = "//h2[text()='At a Glance']";
    xpathHeadingActivity = "//h2[text()='Activity']";

    constructor(page: Page) {
        this.page = page;
    };

}