import { Locator, Page } from "@playwright/test";

class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async openMaterialPage() {
    }

    async gotoPage(pageName: string) {
    }
}

class RegisterPage extends MaterialBasePage {
    xpathUserName: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;

    constructor(page: Page) {
        super(page);
    }

    async fillUsername() {
    }

    async fillEmail() {
    }

    async checkGender(gender: string) {
    }
}