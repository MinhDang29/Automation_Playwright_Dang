import { Page, Locator } from '@playwright/test';


export class LoginPage {
    page: Page;
    locator = {
        inputUserName: '#user_login',
        inputPassWord: '#user_pass',
        btnLogin: '#wp-submit',
    }

    constructor(page: Page) {
        this.page = page;
    }

    async inputUserName(userName: string) {
        await this.page.fill(this.locator.inputUserName, userName);
    }

    async inputPassWord(password: string) {
        await this.page.fill(this.locator.inputPassWord, password);
    }

    async clickBtnLogin() {
        await this.page.click(this.locator.btnLogin);
    }

    async login(username: string, password: string) {
        await this.inputUserName(username);
        await this.inputPassWord(password);
        await this.clickBtnLogin();
    }


}