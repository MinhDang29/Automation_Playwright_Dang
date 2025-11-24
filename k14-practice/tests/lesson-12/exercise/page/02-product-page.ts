import { Page } from '@playwright/test';

export class ProductPagePomManager {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async addProductToCart(productName: string, quantity: number) {
        await this.page.locator(`//div[contains(text(), '${productName}')]/following-sibling::button`).click({ clickCount: quantity })
    }

    async getInfoProductInCart(productName: string) {
        const price = await this.page.locator(`//td[contains(text(),'${productName}')]/following::td[1]`).textContent();
        const quantity = await this.page.locator(`//td[contains(text(),'${productName}')]/following::td[2]`).textContent();
        const total = await this.page.locator(`//td[contains(text(),'${productName}')]/following::td[3]`).textContent();
        const infoProduct = {
            price,
            quantity,
            total
        }
        return infoProduct;
    }
}