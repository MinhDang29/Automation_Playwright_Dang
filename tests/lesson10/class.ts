/*
- Class name : LoginPage
-Properties :xpathUsername, xpathPassword, xpathLoginButton
-Methods: fillUsername, fillPassword, clickLoginButton
*/
import { Page }  from "playwright";
/*
- Name :BasePage
- Properties: url
-Methods: gotoPage
*/

class BasePage {
    page: Page;
    url: string | undefined;
    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto(this.url!);
    }
}
class LoginPage extends BasePage{
    // Properties
    //page: Page;
    xpathUsername: string | undefined;
    xpathPassword: string | undefined;
    xpathLoginButton: string | undefined;

    // contructor
    constructor(page: Page) {
        //this.page = page;
        super(page);

    }
    // Methods
    fillUsername(username: string) {
        // fill username
        this.page.locator(this.xpathUsername!).fill(username);
    }

}
// let page: Page;
// const loginPage = new LoginPage(page);
// loginPage.xpathLoginButton = "//input[@id='wp-submit']";
// loginPage.xpathPassword = "//input[@id='user_pass']";
// loginPage.xpathUsername = "//input[@id='user_login']";

