# DOM terminology and Playwright basic (Lesson 5)

## 1. DOM (Document Object Model)

### 1.1 Thẻ đóng và thẻ mở:

```
<option>United States</option>

- <option>: Thẻ mở
- </option>: Thẻ đóng
- United Stated: Text

```

### 1.2 Thẻ tự đóng:

```
<img src="image.jpg" alt="Image description"/>
```

### 1.3 Thuộc tính:

```
<option value="usa">United States</option>

- value: Thuộc tính
- "usa": Giá trị của thuộc tính

```

### 1.4 Thẻ HTML thường gặp

```
- Thẻ <div> (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ <h1></h1> đến <h6></h6> (viết tắt của heading): dùng để tạo ra các header phân cấp
theo thứ tự từ lớn đến bé.
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
```

## 2. Selector

- Là cách chọn phần tử trên trang
- Có nhiều kiểu:
    - Xpath selector
    - CSS selector
    - Playwright selector

### 2.1 Xpath selector

- XPath = XML Path

- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM và bắt đầu bởi 1 "/"

    - Tương đối: tìm dựa vào đặc tính và bắt đầu bởi 2 "//"
- Cú pháp: 

```
//tenthe[@thuoctinh="giatri"]
```
*Lưu ý: Nên dùng XPath tương đối*


## 3. Playwright basic syntax

### 3.1 test

Đơn vị cơ bản để khai báo một test

```
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});

```
### 3.2 step

Đơn vị nhỏ hơn test, để khai báo từng step của test case

```
await test.step('Tên step', async () => {
    // Code here
});
```
*Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.*

```
test('<tên test>', async ({ page }) => {
    await test.step('Tên step', async () => {
        // Code here
    });
});
```
### 3.3 Basic actions

#### 3.3.1 Navigate

```
await page.goto('https://material.playwrightvn.com/');

```
#### 3.3.2 Click

**- Single click**

```
await page.locator("//button").click();
```

**- Double click**

```
await page.locator("//button").dblclick();
```

**- Click chuột phải**

```
page.locator("//button").click({
    button: 'right'
})
```

**- Click chuột kèm bấm phím khác**

```
page.locator("").click({
    modifiers: ['Shift'],
})
```
#### 3.3.3 Input

**- Fill**

Giống paste content vào một ô input

```
page.locator('//input[@id="username"]').fill('Andy');

```
**- pressSequentially**

Giống gõ từng chữ cái vào ô input

```
page.locator("//input").pressSequentially('Playwright Viet Nam', {
    delay: 100,
});

```

#### 3.3.4 Radio/ checkbox

- Lấy giá trị hiện tại đang là check hay không:

```
const isChecked = page.locator("//input").isChecked();
```
- Check/ uncheck

```
page.locator('//input[@id="reading"]').check();
page.locator("//input").setChecked(false);

```

#### 3.3.5 Select option

- Ví dụ:

```
await page.locator('//select[@id="interests"]').selectOption('music');
```
#### 3.3.6 Set Input File

- Ví dụ:

```
await page.locator('//input[@id="profile"]').setInputFiles('data/input-file.txt');
```