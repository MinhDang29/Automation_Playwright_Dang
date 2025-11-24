import { Page } from "playwright";

export class LoginPage {
    page: Page;
    url: string;
    xpathUsername = "//input[@id='user_login']";
    xpathPassword = "//input[@id='user_pass']";
    xpathLoginButton = "//input[@id='wp-submit']";
    xpathErrorMessage = "//div[@id='login_error']";

    constructor(page: Page, url: string) {
        this.page = page;
        this.url =url;
    };

    async goto() {
        await this.page.goto(this.url);
    };

    // fill user nam
    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);

    };
    // fill password
    async fillPassword(password: string) {
        await this.page.locator(this.xpathPassword).fill(password);

    };
    // click login button
    async clickLoginButton() {
        await this.page.locator(this.xpathLoginButton).click();

    };
    // login
    async login(username: string, password: string): Promise<void> {
        //await this.page.goto(this.url);
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    };

    async getInputValue (field: string): Promise<string> {
        return this.page.locator(field).inputValue();
    }
}