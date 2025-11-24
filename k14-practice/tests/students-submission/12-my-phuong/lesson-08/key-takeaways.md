# Playwright tests (Lesson 8)

## 1. Playwright describe

Test suite 
- Là tập hợp test cases
- Giúp **nhóm các test** lại cho dễ quản lý

```
test.describe('<tên suite>', async () => {
    test('test1', async ({ page }) => {
        // code ...
    });

    test('test 2', async ({ page }) => {
        // code ...
    });
})
```
## 2. Playwright Hooks

- Các thời điểm chạy test:
    - Trước khi chạy
    - Trong khi chạy
    - Sau khi chạy

![runtest](/tests/students-submission/12-my-phuong/lesson-08/images/Thoi-diem-runtest.png)

- Các thời điểm chạy suite
    - Trước khi chạy
    - Trong khi chạy
    - Sau khi chạy

![runtest](/tests/students-submission/12-my-phuong/lesson-08/images/Thoi-diem-runsuite.png)

Playwright gọi các thời điểm này là hooks. Các hooks:
- beforeAll

![beforeAll](/tests/students-submission/12-my-phuong/lesson-08/images/beforeAll.png)

- afterAll

![afterAll](/tests/students-submission/12-my-phuong/lesson-08/images/afterAll.png)

- beforeEach

![beforeEach](/tests/students-submission/12-my-phuong/lesson-08/images/beforeEach.png)

- afterEach

![afterEach](/tests/students-submission/12-my-phuong/lesson-08/images/afterEach.png)


## 3. Playwright Assertion & Web first assertion
- Dùng để kiểm tra một giá trị có đúng với mong muốn không.

- Ví dụ: kiểm tra một phần tử có chứa text "Playwright class" hay không
```
<p> Playwright class from Playwright Viêt Nam </p>
const elem = page.locator ('//p')
await expect (elem).toContainText("Playwright class");
```
![assertion-firstassertion](/tests/students-submission/12-my-phuong/lesson-08/images/assertion-firstassertion.png)

### 3.1 Assertion

|Assertion|Ý nghĩa|
|---------|-------|
|expect().toBe();|Kiểm tra phần tử đã được gắn vào DOM|
|expect().toEqual();|Kiểm tra 2 giá trị bằng nhau (so sánh sâu cho object/array)|
|expect().toContain();|Kiểm tra một phần tử có trong array hoặc chuỗi|
|expect().toBeTruthy();|Kiểm tra giá trị có "truthy" (không null, không false, không undefined)|
|expect().toBeFalsy();|Kiểm tra giá trị có "falsy" (null, undefined, 0 hoặc false)|
|expect().toBeGreaterThan();|Kiểm tra giá trị lớn hơn|
|expect().toBeLessThan();|Kiểm tra giá trị nhỏ hơn|

### 3.2 Web first assertion

|Web first assertion|Ý nghĩa|
|-------------------|-------|
|await expect(elem).toBeAttached();|Kiểm tra phần tử đã được gắn vào DOM|
|await expect(elem).toBeChecked();|Kiểm tra phần tử đã được check. Thường dùng cho checkbox, radio button|
|await expect(elem).toBeEditable();|Kiểm tra phần tử có thể sửa được. Thường dùng cho ô input|
|await expect(elem).toBeEmpty();|Kiểm tra phần tử rỗng. Thường dùng cho các phần tử warning, error|
|await expect(elem).toBeEnabled();|Kiểm tra phần tử có được enable hay không. Thường dùng cho button hoặc input|
|await expect(elem).toBeFocused();|Kiểm tra phần tử có được focus hay không. Thường dùng cho Input|
|await expect(elem).toBeHidden();|Kiểm tra phần tử có bị ẩn khỏi trang web hay không. Thường dùng cho các text thông báo|
|await expect(elem).toBeInViewport();|Kiểm tra phần tử có nằm trong viewport hay không|
|await expect(elem).toBeVisible();|Kiểm tra phần tử có visible (hiển thị) hay không|
|await expect(elem).toContainText("abc");|Kiểm tra phần tử có chứa text hay không|
|await expect(elem).toHaveAttribute("href");|Kiểm tra phần tử có thuộc tính hay không|
|await expect(elem).toHaveClass("class-name");|Kiểm tra phần tử có class hay không|
|await expect(elem).toHaveId('id');|Kiểm tra phần tử có id hay không|
|await expect(elem).toHaveText('');|Kiểm tra phần tử có text hay không|
|await expect(elem).toHaveValue('');|Kiểm tra inout có chứa giá trị hay không|
|await expect(elem).toHaveValues([]);|Kiểm tra select có select các option hay không|

## 4. Kiến thức bổ sung

Đặt nhánh mặc định:

```
git config --gloabal init.defaultBranch main
```