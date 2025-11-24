import { ProductPage } from "./base-page/product-page";
import { expect, test } from "@playwright/test";

const url = "https://material.playwrightvn.com/";
let productPage: ProductPage;

test.describe("Product Page", async () => {
  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page, url);

    await productPage.goToPage();
    await productPage.clickProductPage();
  });

  test("Add Product To Cart", async ({ page }) => {
    await test.step("Add product to cart", async () => {
      const quantityProduct1 = 2;
      const quantityProduct2 = 3;
      const quantityProduct3 = 1;
      // add item to card
      await productPage.addProductToCart("Product 1", quantityProduct1);
      await productPage.addProductToCart("Product 2", quantityProduct2);
      await productPage.addProductToCart("Product 3", quantityProduct3);

      // expect result
      const quantityProduct1Table = await productPage.getProductQuantityInTable(
        "Product 1"
      );
      const quantityProduct2Table = await productPage.getProductQuantityInTable(
        "Product 2"
      );
      const quantityProduct3Table = await productPage.getProductQuantityInTable(
        "Product 3"
      );
      expect(quantityProduct1Table).toEqual(quantityProduct1);
      expect(quantityProduct2Table).toEqual(quantityProduct2);
      expect(quantityProduct3Table).toEqual(quantityProduct3);

      // expect sum price
      const productName = ["Product 1", "Product 2", "Product 3"];
      let sum = 0;

      for (let item of productName) {
        const quantity = await productPage.getProductQuantityInTable(item);
        // console.log(quantity);
        const price = await productPage.getProductPrice(item);

        sum += Number(quantity) * Number(price);
      }
      let formatSumPrice = sum.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      // console.log(formatSumPrice);
      // console.log(await productPage.getTotalPriceInTable());
      const totalPriceTable = await productPage.getTotalPriceInTable();
      expect(formatSumPrice).toEqual(totalPriceTable);
    });
  });
});
