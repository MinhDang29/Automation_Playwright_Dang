# GIT AND CSS SELECTOR, PLAYWRIGHT SELECTOR
## Git
1. Git merge
a. Khái niệm
- Merge code = gộp code từ nhánh A vào nhánh B
b. Merge strategy
- Fast-forward merge
    - Khi merge không tạo ra commit merge
    - Xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo nhánh feature
- Three way merge
    - Khi merge có tạo ra commit merge
    - Xảy ra khi muốn merge feature branch vào branch chính mà lịch sử của 2 branch này đã có sự khác nhau

2. Git conflict
a. Khái niệm
- Conflict là xung đột
- Xảy ra khi 2 người cùng sửa 1 file, sau đó merge lại với nhau

b. How conflict construct
- Construct:
<<<<<<< HEAD
a simple line
===========
A new line
>>>>>>> feature/2 
- Giải thích
Phần nằm giữa <<< HEAD và ==== là các nội dung đang ở nhánh của mình
Phần nằm giữa ==== và >>>>(< branch_name >) là nội dung của nhánh muốn merge vào
Incoming change
Current branch

c. Xử lý conflict
- Accept Current Change (chấp nhận thay đổi hiện tại). 
    - Giữ phần bên HEAD (nhánh đang làm việc). 
    - Bỏ qua phần thay đổi từ nhánh đang merge.
- Accept Incoming Change (chấp nhận thay đổi mới vào)
    - Giữ phần bên incoming (nhánh bạn đang merge vào).
    - Bỏ qua thay đổi trong nhánh hiện tại.
- Accept Both Changes (giữ cả hai thay đổi). Kết hợp cả hai đoạn code (thứ tự phụ thuộc vào bạn sắp xếp).

3. Git rebase
- Dùng để di chuyển hoặc kết hợp các commit từ nhánh này sang nhánh khác
- Thay vì tạo merge commit, rebase dán commit của bạn lên đầu nhánh khác

4. Git squash
- Dùng để gộp nhiều commit nhỏ thành 1 commit lớn duy nhất, làm sạch lịch sử trước khi merge lên nhánh chính
- Câu lệnh: git rebase -i HEAD~{soluongcommit}

5. Sử dụng VIM
- Để vào chế độ insert, gõ phím i (màn hình hiện INSERT ở góc dưới bên trái). 
- Để thoát khỏi chế độ insert, gõ phím “ESC” (màn hình biến mất INSERT ở góc dưới bên trái). 
- Để lưu và thoát: Gõ :wq (lưu ý có dấu “:” ở đầu. wq = write and quit) - Để thoát mà không lưu thay đổi, gõ q! (q! = force quit) 

6. Git commands
- Để merge nhánh, dùng lệnh: git merge < tên_nhánh_cần_merge > 
- Để rebase nhánh, dùng lệnh: git rebase < tên_nhánh_cần_rebase > 
- Để squash 3 commit gần nhất, dùng lệnh: git rebase -i HEAD~3 

## CSS Selector và Playwright selector
1. CSS Selector 
- Cú pháp đơn giản, ngắn gọn hơn XPath
- Không sử dụng được cho các case phức tạp: contains text
- Full link: https://css-selectors-cheatsheet.fullstack.edu.vn/assets/answers/CSS-selectors-cheatsheet.pdf
- 1 số dạng hay dùng:
    - Tag: div
    - id: #registrationForm
    - class: .form-group
    - child: #parent > input
    - descendant: #ancestor div
    - combine: div, input
    - adjacent sibling: #parent + div

2. Playwright Selector
- Những playwright locator thường dùng:
    - page.getByRole()
    - page.getByText()
    - page.getByLabel()
    - page.getByPlaceholder()
    - page.getByAltText()
    - page.getByTitle()
    - page.getByTestId()
- Full link: https://playwright.dev/docs/locators


