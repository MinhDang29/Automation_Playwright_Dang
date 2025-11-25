import { Page } from '@playwright/test';
import { MaterialBasePagePomManager } from './02-material-page';
import { ProductPagePomManager } from './02-product-page'

export class POMManager {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getBasePage() {
        return new MaterialBasePagePomManager(this.page);
    }

    getProductPage() {
        return new ProductPagePomManager(this.page);
    }
}