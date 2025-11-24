# DOM terminology and Playwright basic
## DOM
1. Các thẻ HTML thường gặp
- Thẻ <div> (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ <h1></h1> đến <h6></h6> (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé.
- Thẻ <form></form>: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
- thead = table heading
    - tr = table row = 1 dòng
    - th: table heading: text in đậm
- tbody
    - tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

## Selector
- Là cách chọn phần tử trên trang
- Có nhiều kiểu:
    - XPath selector
    - CSS selector
    - Playwright selector

1. XPath selector
- XPath = XML Path
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM
        - bắt đầu bởi 1 /
    - Tương đối: tìm dựa vào đặc tính
        - bắt đầu bởi 2 //
        - //tenthe[@thuoctinh=”giatri”]
-  Nên dùng XPath tương đối

## Playwright basic syntax
1. test: 
    - Đơn vị để khai báo 1 test
    - Syntax:
    import { test } from '@playwright/test';

    test('<tên test>', async ({ page }) => {
        // Code của test
    });

2. step: 
    - Đơn vị nhỏ hơn test, để khai báo từng step của test case
    - Syntax:
    await test.step('Tên step', async () => {
    // Code here
    });
    - Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain
        - Ví dụ:
       test('<tên test>', async ({ page }) => {
            await test.step('Tên step', async () => {
             // Code here
            });
        }); 

![Hình ảnh](tests/lesson5/tests/files/ex-test-step.png)

3. Basic actions
- Navigate: await page.goto('https://pw-practice.playwrightvn.com/');

- Click: 
    - Single click: await page.locator("//button").click();
    - Double click: await page.locator("//button").dblclick();
    - Click chuột phải: 
        page.locator("//button").click({
        button: 'right'
        })
    - Click chuột kèm bấm phím khác:
        page.locator("").click({
        modifiers: ['Shift'],
        })

- Input:
    - Fill: giống việc paste content vào 1 ô input:
        page.locator("//input").fill('Playwright Viet Nam');
    - pressSequentially: giống việc gõ từng chữ cái vào ô input
        page.locator("//input").pressSequentially('Playwright
        Viet Nam', {
            delay: 100,
        });

- Radio/ checkbox: 
    - Lấy giá trị hiện tại đang là check hay không:
        const isChecked = page.locator("//input").isChecked();
    - Check/ uncheck
        page.locator("//input").check();
        page.locator("//input").setChecked(false);

- Select option: để chọn một tùy chọn (option) trong dropdown (thẻ <select>) => sử dụng hàm selectOption()
    await page.selectOption('//selector đến thẻ select', '//value');

- Set Input File: để thiết lập (upload) file cho thẻ <input type="file"> => dùng hàm setInputFiles()
    await page.setInputFiles('//input[@type="file"]', 'path/to/file.txt');

- Hover: để hover vào phần tử: 
    await page.locator("<xpath here>").hover();

- text(): tìm ra phần tử có giá trị tương ứng. Ví dụ 
Với DOM sau: 
    <div @class=”playwright”>This is a text</div> 
Thì để chọn phần tử này, ta dùng cú pháp như sau: 
    //div[text()=’This is a text’] 

- contains(): Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. Ví dụ:
    <div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi <div>
=> Để chọn các phần tử này, ta dùng hàm contains(<giá trị>, <giá trị contains>). Ví dụ: 
    //div[contains(text(), ‘Tôi là Alex’)] 



    
