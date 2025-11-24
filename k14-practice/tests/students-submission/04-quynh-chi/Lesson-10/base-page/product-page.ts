import { Page } from "playwright";
import { MaterialBasePage } from "./material-base-page";

export class ProductPage extends MaterialBasePage {
  xpathProduct = (productName: string) =>
    `//div[text()='${productName}']/following-sibling::button`;
  xpathProductQuantityTable = (productName: string) =>
    `//td[text()='${productName}']/following-sibling::td[2]`;
  xpathProductPrice = (productName: string) =>
    `//div[text()='${productName}']/following-sibling::div[@class='product-price']`;
  totalPriceTable = "//tfoot//td[@class='total-price']";

  constructor(page: Page, url: string) {
    super(page, url);
  }

  // Add product to cart
  async addProductToCart(productName: string, count: number): Promise<void> {
    await this.page
      .locator(this.xpathProduct(productName))
      .click({ clickCount: count });
  }

  // expect
  async getProductQuantityInTable(productName: string): Promise<number> {
    const quantity = await this.page
      .locator(this.xpathProductQuantityTable(productName))
      .textContent();
    return Number(quantity);
  }

  async getProductPrice(productName: string): Promise<number> {
    const price = await this.page
      .locator(this.xpathProductPrice(productName))
      .textContent();
    return Number(price?.replace("$", ""));
  }

  async getTotalPriceInTable(): Promise<string | null> {
    return this.page.locator(this.totalPriceTable).textContent();
  }
}
