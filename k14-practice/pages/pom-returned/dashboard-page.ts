import { Page } from "playwright";

export class DashboardPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // async logIn(userName, password) {
    //     // fill user name
    //     // fill pw
    //     // click btn login
    //     return 
    // }
}