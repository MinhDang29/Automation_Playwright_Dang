import { expect, test } from '@playwright/test';
import { RegisterPage } from '../../../pages/register-page'

let date: string = '2000-02-29';
let username: string = 'Playwright Viet Nam';
let email: string = 'playwrightvietnam@gmail.com';
let description: string = 'Đây là lớp Playwright K11';
let hobby: "reading" | "traveling" | "cooking" = 'cooking';
let gender: 'Male' | 'Female' = 'Female'
let filePath: string = 'data/dog-look.jpg';
let country: "usa" | "canada" | "uk" | "australia" = 'usa';
let interest: "technology" | "science" | "art" | "music" | "sports" = 'science';

test('Exercise 1: Register Page', async ({ page }) => {
    let registerPage = new RegisterPage(page);

    await test.step('Truy cập trang Register Page', async () => {
        await registerPage.goToRegisterPage();
    })

    await test.step('Nhập đầy đủ các thông tin, click button register', async () => {
        // fill info
        await registerPage.fillUsername(username);
        await registerPage.fillEmail(email);
        await registerPage.checkGender(gender);
        await registerPage.checkHobbies(hobby);
        await registerPage.selectInterests(interest);
        await registerPage.selectCountry(country);
        await registerPage.chooseFile(filePath);
        await registerPage.fillDateOfBirth(date);
        await registerPage.fillBiography(description);
        await registerPage.checkNewsletter();

        // click button register
        await registerPage.clickBtnRegister();
    })

    await test.step('Kiểm tra nội dung đã đăng kí ở bảng là đúng', async () => {
        const userInfo = await registerPage.getInfoNewestInTable();
        const actualUsername = userInfo.username;
        const actualEmail = userInfo.email;
        const actualInformation = userInfo.infomation;

        // verify username
        expect(actualUsername).toBe(username);

        // verify email
        expect(actualEmail).toBe(email)

        // verify information
        expect(actualInformation).toContain(gender.toLowerCase());
        expect(actualInformation).toContain(hobby);
        expect(actualInformation).toContain(country);
        expect(actualInformation).toContain(date);
        expect(actualInformation).toContain(description);
        expect(actualInformation).toContain('Yes');

    })
})