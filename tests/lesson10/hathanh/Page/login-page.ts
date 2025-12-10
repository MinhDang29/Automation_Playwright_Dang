import { Page } from "playwright";
import { BasePage } from "./base-page";
import { DashboardPage } from "../dashboard-page";

export class LoginPage extends BasePage {
    xpathEmailInp = "//*[@id='username']";
    xpathPassword = "//*[@id='password']";
    xpathBtnLogIn = "//button[text()='Đăng nhập']";
    
   
    constructor(page: Page, url: string) {
        super(page, url);
    };

    // fill username
    async fillUsername(username: string) : Promise<void>{
        await this.page.locator(this.xpathEmailInp).fill(username);
    };  

    // fill password
    async fillPassword(password: string): Promise<void> {
        await this.page.locator(this.xpathPassword).fill(password);
    };

    // click btn login
    async clickBtnLogin() {
        await this.page.locator(this.xpathBtnLogIn).click();
        return new DashboardPage(this.page); 
    };

    /**
     * Login to pw-practive website
     * @param userName: username of user 
     * @param password: password of user
     */
    async logIn(userName: string, password: string): Promise<void>{
        await this.fillUsername(userName);
        await this.fillPassword(password);
        await this.clickBtnLogin();
    }

    async getInputValue(field: string): Promise<string>{
        return await this.page.inputValue(field);
    }
}