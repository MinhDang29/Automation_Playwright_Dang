import { Page } from "playwright";
import { DashboardPage } from "./dashboard-page";

export class LogIn {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async logIn(userName, password) {
        // fill user name
        // fill pw
        // click btn login
        return new DashboardPage(this.page); 
    }
}