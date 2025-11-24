# Git & CSS Selector, Playwright Selector (Lesson 9)

## 1. Git
### 1.1 Merge
- Lệnh git merge kết hợp các thay đổi từ một nhánh khác vào nhánh hiện tại, tạo ra một commit đặc biệt gọi là "merge commit" nếu cần.
- Cú pháp:
```
git merge <branch-name>
```
- Merge Strategy:
    - Fast-forward merge
        - Khi merge không tạo ra commit merge
        - Xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo ra nhánh feature
    - Three way merge
        - Khi merge có tạo ra commit merge
        - Xảy ra khi bạn muốn merge feature branch vào branch chính mà lịch sử của 2 branch này đã có sự khác nhau
### 1.2 Conflict
- Xung đột xảy ra khi Git không thể tự động merge các thay đổi từ hai nhánh vì cùng một phần của file được chỉnh sửa khác nhau ở cả hai nhánh.
- How conflict construct?
```
Phần nằm giữa <<< HEAD và
==== là các nội dung đang ở nhánh của mình
Phần nằm giữa ==== và >>>> (<branch_name>) là nội dung của nhánh muốn merge vào
Incoming change
Current branch
```
```
Ví dụ:
<<<<<<< HEAD
Chào, tôi là Andy!
=======
Xin chào, tôi là Andy Guo!
>>>>>>> feature

```

- Xử lý conflict:
```
Giải Quyết
- Chọn một phiên bản:
    + Giữ current branch: Chào, tôi là Andy!
    + Giữ incoming change: Xin chào, tôi là Guo!
- Kết hợp cả hai: Ví dụ, sửa thành: Xin chào, tôi là Andy Guo!
- Xóa các ký hiệu <<<<<<<, =======, >>>>>>>.
- Đánh Dấu Đã Giải Quyết: Chạy git add <file_name>
- Hoàn thành nếu merge thì: Chạy git commit (Git tự tạo thông điệp).
```

### 1.3 Rebase
- Lệnh git rebase di chuyển hoặc "tái định vị" các commit của nhánh hiện tại lên trên đầu của một nhánh khác.
- Cú pháp:
```
git rebase <base-branch>
```
### 1.4 Squash
- Squash là quá trình gộp nhiều commit thành một commit duy nhất, thường dùng khi merge hoặc rebase để làm gọn lịch sử.
- Cú pháp:
```
git rebase -i HEAD~{soluong commit}
```

## 2. Selector
### 2.1 CSS Selector
- Là một cú pháp được sử dụng trong CSS để chọn các phần tử HTML nhằm áp dụng kiểu dáng (styling) trên trang web
- Cú pháp đơn giản, ngắn gọn hơn XPath selector

| |CSS selector|XPath selector|
|-|-----------|--------------|
|Tag|div|//div|
|id|#registrationForm|//form[@id="registrationForm"]|
|class|.form-group|//div[@class='form-group']|
|child|#parent>input|//div[@id='parent']/input|
|descendant|#ancestor div|//div[@id='ancestor']/descendant::div|
|combine|div, input|//div|//input|
|Adjacent sibling|#parent+div|//div[@id='parent']/following-sibling::*[1]|

- Không sử dụng được cho các case phức tạp: contains text
- Link tham khảo: https://css-selectors-cheatsheet.fullstack.edu.vn/assets/answers/CSS-selectors-cheatsheet.pdf

### 2.2 Playwright Selector
- Là tập hợp các phương pháp định vị phần tử HTML trong Playwright, dùng để tương tác (nhấp, điền, lấy dữ liệu, v.v.) trong quá trình kiểm thử tự động hoặc cào dữ liệu.
- Link tham khảo: https://playwright.dev/docs/locators
- Những Playwright locator thường dùng:
    - page.getByRole()
    ```
    Dùng cho button, checkbox, heading, link, list, table, and many more
    
    Ví dụ:
    <h3>Sign up</h3>
    <label>
        <input type="checkbox" /> Subscribe
    </label>
    <br/>
    <button>Submit</button>

    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
    await page.getByRole('checkbox', { name: 'Subscribe' }).check();
    await page.getByRole('button', { name: Submit }).click();
    
    ```
    - page.getByText()
    ```
    <span>Welcome, John</span>
    page.getByText('Welcome, John')
    ```
    - page.getByLabel()
    ```
    <label>Password <input type="password" /></label>

    await page.getByLabel('Password').fill('secret');
    ```
    - page.getByPlaceholder()
    ```
    <input type="email" placeholder="name@example.com"/>

    await page.getByPlaceholder('name@example.com').fill('playwright@microsoft.com');
    ```
    - page.getByAltText()
    ```
    <img alt="playwright logo" src="/img/playwright-logo.svg" width="100" />
    await page.getByAltText('playwright logo').click();
    ```
    - page.getByTitle()
    ```
    <span title='Issues count'>25 issues</span>

    await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
    ```
    - page.getByTestId()
    ```
    mặc định dùng cho thuộc tính “data-testid”

    <button data-testid="directions">Itinéraire</button>
    <button id="directions">Itinéraire</button>

    await page.setTestIdAttribute(‘id’);
    await page.getByTestId('directions').click();
    ```
## 3. Kiến thức bổ sung
- Để vào chế độ insert, gỡ phím i (màn hình hiện INSERT ở góc dưới bên trái).
- Để thoát khỏi chế độ insert, gõ phím "ESC" (màn hình biến mắt INSERT ở góc dưới bên trái).
- Để lưu và thoát: Gõ :wa (lưu ý có dấu":" ở đầu. wq = write and quit)
- Để thoát mà không lưu thay đổi, gõ q! (q! = force quit)