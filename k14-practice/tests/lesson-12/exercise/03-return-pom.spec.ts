import { expect, test } from '@playwright/test';
import { MaterialBasePage } from './page/03-material-page'
import { ProductPage } from './page/03-product-page';


test('Exercise 2: Product page', async ({ page }) => {
    const arrayProducts = [
        {
            name: 'Product 1',
            price: 10,
            quantity: 2
        },
        {
            name: 'Product 2',
            price: 20,
            quantity: 3
        },
        {
            name: 'Product 3',
            price: 30,
            quantity: 1
        }
    ]

    let productPage: ProductPage;

    await test.step('Truy cập trang Register Page', async () => {
        const basePage = new MaterialBasePage(page);
        await basePage.openMaterialPage();

        const myPage = await basePage.gotoPage('Product page');
        expect(myPage).toBeInstanceOf(ProductPage);
        productPage = myPage as ProductPage;
    })

    await test.step('Thêm sản phẩm để giỏ hàng', async () => {
        const size = arrayProducts.length;
        for (let i = 0; i < size; i++) {
            await productPage.addProductToCart(arrayProducts[i].name, arrayProducts[i].quantity);
        }
    })

    await test.step('Kiểm tra số lượng sản phẩm tại giỏ hàng đúng như đã thêm.', async () => {
        const size = arrayProducts.length;
        for (let i = 0; i < size; i++) {
            const actualQuantityProduct = (await productPage.getInfoProductInCart(arrayProducts[i].name)).quantity;
            const expectQuantityProduct = arrayProducts[i].quantity;
            expect(actualQuantityProduct).toEqual(expectQuantityProduct.toString());
        }
    })

    await test.step('Kiểm tra tổng tiền tại giỏ hàng đúng', async () => {
        const size = arrayProducts.length;
        for (let i = 0; i < size; i++) {
            const actualTotalProduct = (await productPage.getInfoProductInCart(arrayProducts[i].name)).total;
            const total = arrayProducts[i].quantity * arrayProducts[i].price;
            const expectTotalProduct = '$' + total.toFixed(2);
            expect(actualTotalProduct).toEqual(expectTotalProduct);
        }
    })

})