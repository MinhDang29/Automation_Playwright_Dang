# Version Control System (VCS)
- **VCS** là hệ thống giúp quản lý các phiên bản file
- Các loại VCS:
  - **Local**: lưu trữ cục bộ trên máy cá nhân
  - **Centralized**: lưu tập trung trên một máy chủ
  - **Distributed**: lưu trên nhiều máy (eg: Git)

# Git
- Git là hệ thống VCS phổ biến, miễn phí, nhiều tính nawg vợt trội như branching, tốc độ xử lý nhanh so với các VCS khác
## So sánh Git & GitHub
1. Git
- Cài trên máy, dùng dòng lệnh
- Quản lý phiên bản, đưa file vào GIT repo
- Có các tính năng của VCS
2. GitHub
- Dịch vụ web, có giao diện
- Nơi để upload Git repo lên
- Có các tính năng của VCS và 1 số tính năng khác

## Git states
- **Working Directory**: file mới hoặc file có thay đổi
- **Staging Area**: nơi chuẩn bị để commit
- **Repository**: nơi lưu các phiên bản (commits)

## Các lệnh Git
1. Khởi tạo repo mới
```
git init
```
2. Cấu hình user.name và user.email
```
git config
```
3. Đưa file vào staging
```
git add <file_name>
```
4. Đưa tất cả file vào staging
```
git add .
```
5. Tạo phiên bản mới (commit)
```
git commit -m "message"
```
6. Kiểm tra trạng thái các file
```
git status
```
7. Xem lịch sử commit
```
git log
```
8. Thay đổi commit message
```
git commit --amend
```
- Gõ `i` để vào chế độ insert
- Gõ `esc` để thoát insert
- Gõ `:wq` để lưu và thoát
- Hoặc:
```
git commit --amend -m "message mới"
```
9. Đưa file từ vùng staging về working directory
```
git restore --staged <file>
```
10. Đưa từ vùng repository về working directory (undo 1 commit)
```
git reset HEAD~1
```

## Commit Convention
- Format: *<type>: <short_description>*
- Một số *type* phổ biến:
    - *feat*: thêm tính năng mới
    - *fix*: sửa lỗi
    - *chore*: chỉnh sửa nhỏ (xoá file unused, typo...)
  
## Branching model
- **Branch** = nhánh phát triển
- Dùng để tạo vùng làm việc riêng biệt không ảnh hưởng vùng ổn định
- Không dùng branch → phải copy file thủ công

### Tạo branch
```
git branch <ten_branch>
git checkout <ten_branch>
# hoặc gộp lại vừa tạo và checkout:
git checkout -b <ten_branch>
```

## .gitignore
- `.gitignore` = file cấu hình để **bỏ qua file/folder không cần Git theo dõi**
  ```
  file.txt       # bỏ qua file
  folder-name/   # bỏ qua thư mục
  ```
- Xem các thay đổi trong Source Control (trên VSC)


# JavaScript basic
## Cách chạy project
```
node file.js*
```

## Khai báo biến (Variables)
- **let**: dùng khi giá trị có thể thay đổi.
- **const**: dùng khi không thay đổi giá trị.
- Không nên dùng **var**

## Data types
- **String**: chuỗi - *"Hello"*
- **Number**: số - *100*, *-1*
- **Boolean**: đúng/sai - *true*, *false*

## Toán tử so sánh (Comparison)
- Kết quả trả về Boolean (true/false)
- Các toán tử so sánh:
    1. So sánh hơn kém: **>**, **<**
    2. So sánh bằng: **==**, **===**,**!=**, **!==**,**>=**, **<=**

## Toán tử một ngôi (Unary)
- **i++** bằng với i=i+1
- **i--** bằng với i=i-1

## Toán tử số học (Arithmetic)
- Các phép toán: +, -, *, /
- Toán tử chia dư: %  
    1. Nếu là số lẻ, chia dư cho 2 = 1: x % 2 === 1 
    2. Nếu là số chẵn, chia dư cho 2 = 0: x % 2 === 0

## Câu điều kiện (Conditional)
- Format: * if (<điều kiện>) { // code } *

## Vòng lặp (Loop)
- Format: * for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {// code } *

## In kết hợp giá trị chuỗi và biến
1. Dùng dấu cộng (+) để nối chuỗi và biến
- Format: * console.log("Dùng dấu cộng như sau: " + name); *
2. Dùng dấu phẩy (,) để in nhiều giá trị liên tiếp
- Format: * console.log("Hoặc dùng dấu phẩy: ", name); *

## Nối chuỗi với toán tử (+)
1. Dùng (+) để nối hai hoặc nhiều chuỗi
- Format: * console.log(str1 + str2); *
2. Nối (" ") vào giữa khi cần thêm khoảng trắng
- Format: * console.log(str1 + " " + str2);  *

# 4. Note
- Format code nhanh trong VSCode:
  - Mac: **Option + Shift + F**
  - Windows: **Alt + Shift + F**