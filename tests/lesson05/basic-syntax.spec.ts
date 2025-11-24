/*
- Dòng này import hàm test() từ thư viện @playwright/test.
- test() là hàm dùng để định nghĩa một test case (bài kiểm thử).
- Đây là cú pháp chuẩn trong Playwright khi bạn viết automation test.
 
*/
import { test } from'@playwright/test';

test("tên test case", async ({ page})=> {
// là 1 tc độc lập, bao gồm nhiều bước kiểm thử bên trong nếu cùng 1 luồng kiểm thử
// cần tạo nhiều test(...) khi muốn kiểm thử nhiều chức năng khác nhau, các luồng riêng biệt 
    await test.step("tên step", async () =>{
        // navigate
await page.goto("https://material.playwrightvn.com/");
    
// click()
//await page.locator(' //a[contains(text(), "Bài học 1: Register Page")]').click();//click({clickCount: 5, button:"right",modifiers: ["Control", "Alt"], ...});Click chuột phải 5 lần, Trong khi giữ phím Ctrl và Alt
await page.click(' //a[contains(text(), "Bài học 1: Register Page")]');

// input()
await page.locator('//input[@id="username"]').fill("K14 playwright");

await page.locator('//input[@id="email"]').pressSequentially("K14 playwright test basic syntax");// có thể dùng type()

// radio / checkbox
await test.step("", async () =>{
    const ischeked1 = await page.locator('//input[@value = "male"]').isChecked();

    await page.locator('//input[@value = "male"]').check();
    const isCheked2= await page.locator('//input[@value = "male"]').isChecked();
    console.log(isCheked2);

    // Select option
await page.locator('//select[@id ="country"]').selectOption('canada');

// Set input file
await page.locator('//input[@id = "profile"]').setInputFiles("tests/lesson-2/key-takeaways.md");

// hover():
await page.locator('//*[text()="Tìm hiểu thêm"]').hover();
});

}); 

// Tương tác với confirmation dialog
   await test.step('confirmation dialog', async () =>{
await page.goto("https://material.playwrightvn.com/");
await page.click('//a[@href="03-xpath-todo-list.html"]');
await page.locator("//input[@id='new-task']").fill("xe qua trạm");
await page.click("//*[@id='add-task']");
// dialog: page.on và page.one đều dùng để lắng nghe sự kiện
// page.on: lắng nghe liên tục, page.once: lắng nghe 1 lần duy nhất
page.on('dialog', async dialog =>{
    console.log("Hộp thoại hiện ra:", dialog.message());// in ra tiêu đề dialog
    dialog.accept();
})
// phải đăng ký xuất hiện dialog trước hành động có khả năng gây ra dialog, để khi mà hộp thoại bật ra Playwright đã biết xử lý nó như thế nào.

await page.click('//*[text()="Delete"]');

    })



});