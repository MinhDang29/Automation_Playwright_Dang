

import { Page } from "playwright";

/*
- Name: BasePage
- Property: url;
- Method: goto()
*/

class BasePage {
    page: Page;
    url: string;

    constructor(page: Page) {
        this.page = page;
    }

    goto() {
        // go to a website 
    }
}

/*
- Class name: LoginPage
- Properties: xpathUsername, xpathPassword, xpathBtnLogin
- Methods: fillUsername, fillPassword, clickBtnLogin
*/

class LoginPage extends BasePage {
    // Properties
    xpathUsername = "";
    xpathPassword: string;
    xpathBtnLogin: string;

    // constructor
    constructor(page: Page) {
        super(page);
    }

    fillUsername() {
        // fill username
    }
}




