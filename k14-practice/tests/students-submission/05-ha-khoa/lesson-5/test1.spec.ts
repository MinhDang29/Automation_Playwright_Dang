import { test } from '@playwright/test';

test("TC1: Register Page", async ({ page }) => {
    await test.step("Truy cập trang web", async () => {
        //Truy cập trang web
        await page.goto("https://material.playwrightvn.com/");

    })
    await test.step("Click Bài học 1: Register Page", async () => {
        await page.locator('//a[contains(text(), "Bài học 1: Register Page")]').click();

    })
    await test.step("Điền thông tin đăng ký", async () => {
        //Điền thông tin đăng ký
        await page.locator('//input[@id="username"]').fill("Nguyen Ha Khoa");

        await page.locator('//input[@id="email"]').pressSequentially("khoa1999.81@gmail.com");

    })
    await test.step("Tick chọn thông tin", async () => {
        //Tích chọn thông tin
        const isChecked = await page.locator('//input[@id="male"]').check();

        await page.locator('//input[@id="reading"]').check();

        await page.locator('//label[@for = "interests"]').selectOption('sports');

        await page.locator('//label[@for = "country"]').selectOption('Australia');

        await page.locator('//input[@id = "dob"]').click();

        await page.locator('//input[@id="profile"]').setInputFiles('input-file.txt');


    })
    await test.step("Tải file lên trang", async () => {
        //Tải file lên trang
        await page.locator('//input[@id="profile"]').setInputFiles('input-file.txt');
    })

    await test.step("Điền tiểu sử", async () => {
        //Điền tiểu sử
        await page.locator('//label[@for = "bio"]').fill('K14 Playwright member');

    })
    await test.step("Đăng ký", async () => {
        //Đăng ký
        await page.locator('//button[@type="submit"]').click();

    })
})