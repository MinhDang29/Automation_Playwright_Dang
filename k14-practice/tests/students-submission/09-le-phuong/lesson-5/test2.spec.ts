import { expect, test } from '@playwright/test';
import { verify } from 'crypto';

test("Verify that user can add product", async ({ page }) => {
    await test.step("Step 1 Open web page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2 Click Product page link ", async () => {
        await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
    });

    await test.step("Step 3: Add 2 product 1, 3 product 2, 1 product 3 to ", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick(); //add 2 product 1
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });// add 3 sản phẩm
        await page.locator("//button[@data-product-id='3']").click();
    });

    await test.step("Step 4: Verify that number of Product  1, 2,3 is added correctly in the the shopping cart ", async () => {
        const TotalProduct1 = await page.locator("//tbody[@id='cart-items']//td[contains(text(),'Product 1')]//following-sibling::td[2]").textContent();
        console.log(TotalProduct1);
        expect(TotalProduct1).toEqual("2");

        const TotalProduct2 = await page.locator("//tbody[@id='cart-items']//td[contains(text(),'Product 2')]//following-sibling::td[2]").textContent();
        expect(TotalProduct2).toEqual("3");
        const TotalProduct3 = await page.locator("//tbody[@id='cart-items']//td[contains(text(),'Product 3')]//following-sibling::td[2]").textContent();
        expect(TotalProduct3).toEqual("1")
    });
});
