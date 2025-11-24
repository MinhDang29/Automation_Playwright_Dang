# Kiến thức tổng hợp Lession 5: DOM & Playwright Basic
## DOM - Document Object Model
Element: 
* <thẻ mở> property <thẻ đóng>
* thẻ tự đóng: `<img>, <br>, <hr>`
* thẻ chưa text: VD: `<h1>Playwright</h1>`
* thẻ chưa nhiều thẻ con 
<br>**Note: Thẻ có thể có nhiều thuộc tính và cách nhau bằng space**
## Thẻ html thường gặp
* div: Chia vùng trên trang web
* h1 -> h6: tạo ra header
* form: thẻ chưa thông tin
* input: email, text, color, radio button, range, date, checkbox, file
* textarea: input text dạng to
* radio button: chọn 1 giá trị
* checkbox: chọn >1 giá trị
* list & dropdown: thẻ select - option
* button
* thẻ table:
<br> - thead: table heading
<br>      + tr: row<br>+ th: table heading 
<br> - tbody: 
<br> + tr: row <br>+ td: table data in row
* date picker: Chọn ngày
* iframe: từ trang web khác nhúng vào
* slider: tạo thanh trượt
## Selector
* Là cách chọn phần tử trên trang
* Cách cách: 
<br> (1) Xpath: Bao gồm Xpath tương đối & Xpath tuyệt đối 
<br>**Note: Cách get xpath selector có thể xem chi tiết trong file: https://drive.google.com/file/d/1pAunOktrSGiGZBICx709bISkydYCYm7b/view?usp=sharing**
<br> (2) CSS Selector
<br> (3) Playwright selector
## Playwright basic
### Test
* Đơn vị cơ bản để khai báo 
* Syntax: <br>`import { test } from '@playwright/test';
test('<tên test>', async ({ page }) => {
// Code của test
}); `
### Step
* Đơn vị < test, khai báo từng step của testcase
* syntax: `await test.step('Tên step', async () => {
// Code here
});`
### Basic action: 
* Navigate: `await page.goto('<domain>');`
* Click: 
<br> Single Click: `await page.locator("//button").click();`
<br> Double Click: `await page.locator("//button").dblclick();`
<br> Click nhiều lần: `await page.locator("//button").click({clickCount: x});`
<br> Click chuột phải: `page.locator("//button").click({
button: 'right'
})`
<br> Click chuột kèm bấm nhiều phím khác: `page.locator("").click({
modifiers: [<tên phím>],
})`
* Input: 
<br> Fill = paste content: `page.locator("//input").fill('<content>');`
<br> Press sequentially = gõ từng char vào ô: `page.locator("//input").pressSequentially('<conten>', {
delay: 100,
});`
* Radio/ Checkbox: 
<br> Check hiện tại là check/uncheck: `const isChecked =
page.locator("//input").isChecked();` -> return boolean
<br> Check/uncheck: `page.locator("//input").check();` hoặc `page.locator("//input").setChecked(false);`
* Dropdown - Select Option: `page.locator("...").selectOption(...)` 
* Set input file: `page.locator("...").setInputFiles()`