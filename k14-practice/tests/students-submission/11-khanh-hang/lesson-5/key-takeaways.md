# DOM

- DOM = Document Object Model
- biểu diễn nội dung HTML như một cây (tree)

```
<option value="usa">United States</option>
<img src="image.jpg" alt="Image description"/>
```

- **Thẻ mở**: `<option>`
- **Thẻ đóng**: `</option>`
- **Thuộc tính**: `value="usa"`
- **Giá trị thuộc tính**: `"usa"`
- **Text**: `United States`
- **Thẻ tự đóng**: `<img />, <br />, <hr />`

# 2. Thẻ HTML thường gặp:

- `<div>`: dùng để chia layout
- `<h1> → <h6>`: tiêu đề phân cấp
- `<form>`: biểu mẫu
- `<input>`: text, email, radio, checkbox, file, color, range, date
- `<textarea>`: khung nhập văn bản lớn
- `<button>`: nút bấm
- `<table>`: bảng dữ liệu
  - `<thead>`: phần đầu bảng
  - `<tr>`: dòng
  - `<th>`: ô tiêu đề (in đậm)
  - `<tbody>`: thân bảng
  - `<td>`: ô dữ liệu
- `<iframe>`: nhúng trang khác
  ...

# Selector

- cách để chọn phần tử HTML trên trang
- Các loại selector:
  - XPath selector
  - CSS selector
  - Playwright selector

## XPath Selector

- XPath = XML Path
- Có 2 loại:
  **Tuyệt đối**: bắt đầu bằng `/`

```
 `/html/body/div[1]/h1`
```

**Tương đối** (nên dùng): bắt đầu bằng `//`

```
`//tag[@attribute="value"]`
```
```
Format:
//thẻ[@thuoc tính = '...'
thuộc tính cần lấy ưu tiên duy nhất (vd: id)

-----
lấy theo text:
//thẻ[text() = "...."

------
lấy khi text quá dài:
//thẻ[containts(text(),"....")]
```

# Playwright Basic Syntax

## Tạo một test case tự động dùng thư viện Playwright.

```
import { test } from "@playwright/test";

test("Tên test", async ({ page }) => {
  // Code
});
```

## Sử dụng `step`

```
await test.step("Tên step", async () => {
  // Code ở đây
});
```

# Playwright Basic Actions

## Navigate

```
await page.goto("https://pw-practice.playwrightvn.com/");
```

## Click

```
await page.locator("//button").click(); // Single click
await page.locator("//button").dblclick(); // Double click
await page.locator('selector xpath').click({clickCount: 3}); // click n lần
await page.locator('selector xpath').click({clickCount: 3, button: 'right',modifiers: ['Shift', 'Alt']});
await page.locator("//button").click({ button: "right" }); // Right click
await page.locator("//button").click({ modifiers: ["Shift"] }); // Click + phím
```

## Input

```
page.locator("//input").fill("text");
page.locator("//input").pressSequentially("text"); // Gõ từng ký tự
```

## Checkbox / Radio:

```
const isChecked = page.locator("//input").isChecked();
page.locator("//input").check(); // Check
page.locator("//input").setChecked(false); // Uncheck
```
## Hover
```
await page.locator("<xpath here>").hover();
```

# Note
## Confirmation dialog
```
page.on('dialog', dialog => dialog.accept());
```