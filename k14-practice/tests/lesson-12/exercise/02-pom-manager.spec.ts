import { expect, test } from "@playwright/test";
import { POMManager } from "./page/02-pom-manager";


test("Exercise 2: Product page", async ({ page }) => {
    const arrayProducts = [
        {
            name: "Product 1",
            price: 10,
            quantity: 2
        },
        {
            name: "Product 2",
            price: 20,
            quantity: 3
        },
        {
            name: "Product 3",
            price: 30,
            quantity: 1
        }
    ]

    const pomManager = new POMManager(page);

    await test.step("Truy cập trang Register Page", async () => {
        // await productPage.goToProductPage();
        await pomManager.getBasePage().openMaterialPage();
        await pomManager.getBasePage().gotoPage("Product page");
    })

    await test.step("Thêm sản phẩm để giỏ hàng", async () => {
        const size = arrayProducts.length;
        for (let i = 0; i < size; i++) {
            await pomManager.getProductPage().addProductToCart(arrayProducts[i].name, arrayProducts[i].quantity);
        }
    })

    await test.step("Kiểm tra số lượng sản phẩm tại giỏ hàng đúng như đã thêm.", async () => {
        const size = arrayProducts.length;
        for (let i = 0; i < size; i++) {
            const actualQuantityProduct = (await pomManager.getProductPage().getInfoProductInCart(arrayProducts[i].name)).quantity;
            const expectQuantityProduct = arrayProducts[i].quantity;
            expect(actualQuantityProduct).toEqual(expectQuantityProduct.toString());
        }
    })

    await test.step("Kiểm tra tổng tiền tại giỏ hàng đúng", async () => {
        const size = arrayProducts.length;
        for (let i = 0; i < size; i++) {
            const actualTotalProduct = (await pomManager.getProductPage().getInfoProductInCart(arrayProducts[i].name)).total;
            const total = arrayProducts[i].quantity * arrayProducts[i].price;
            const expectTotalProduct = "$" + total.toFixed(2);
            expect(actualTotalProduct).toEqual(expectTotalProduct);
        }
    })
});
