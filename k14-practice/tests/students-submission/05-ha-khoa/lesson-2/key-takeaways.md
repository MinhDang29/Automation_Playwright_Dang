# Version Control System
- Là hệ thống quản lý các phiên bản
1. Local: lưu trên máy cá nhân (cho 1 cá nhân sử dụng)
2. Centralize: máy chủ tập trung (nhiều người sử dụng, gg docs, sheets, ...)
3. Distributed: lưu ở nhiều máy chủ khác nhau
# Git
- Là 1 phần mềm
- Cài trên máy của bạn
- Là 1 commandline tool
- **Là công cụ quản lý phiên bản**, đưa file vào Git repository
- Có các tính năng của **Version Control System**

# GitHub
- Là 1 dịch vụ web
- Host trên website
- Là công cụ có giao diện
- **Là nơi để upload Git repository lên**
- Có các tính năng của **Version Control System** và 1 số tính năng khác

## Git - three states

![Git three states](https://nulab.com/static/d13cdc1344230f603d17b31a5cbd1dae/5a190/02.png)
### git init
- cấu hình 1 repo:
1. git config user.name "Khoa"
2. git config user.email "khoa1999.81@gmail.com"
- cấu hình toàn bộ máy tính:
1. git config --global user.name "user"
2. git config --global user.name "email"
### Thêm file vào vùng staging
1. Thêm 1 file: git add "file name"
2. Thêm toàn bộ: git add.
### Xem trạng thái file
- git status
màu xanh: vùng staging
màu đỏ: vùng working
### Commit
- git commit -m"message"
- git log
**convention dùng trong lớp**
*<type>: <short_description>
- *git add*
- *git commit -m "feat: " thêm tính năng mới, test case mới*
- *git commit -m "chore: " thêm sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...*

# JavaScript Basic
## Hello world
console.log("Hello World!");
> chạy lệnh: node lesson-2/javascript/01-hello.js
> lấy đường dẫn = cách trỏ chuột phải vào file > chọn Copy Relative Path
## Variable
- Variable = biến, dùng để lưu trữ giá trị, có thể thay đổi được

Khai báo:
- var <ten_bien> = <gia tri>;
- let <ten_bien> = <gia_tri>;


`KHÔNG chứa dấu cách`

`KHÔNG là các từ khóa JavaScript: var, let, for, if, ...)`

Ví dụ:
- var firstName = "Playwright";
- let lastName = "Automation
class";

Ví dụ:
- console.log("firstname = " + firstName);
- console.log("lastName = " + lastName);

*var khai báo lại được, let thì không*

**Nên dùng** let vì dễ kiểm soát phạm vi của biến

## Constant = hằng số. Dùng để khai báo các giá trị không thể thay đổi.
- Khai báo
- const <"name"> = <"value">


Ví dụ
- const framework = “Playwright”;
> console.log(framework);
- Gán lại
>framework = “Cypress”

## Data type = kiểu dữ liệu.
-  Có 8 loại kiểu dữ liệu: String, Number,
Bigint, Boolean, Undefined, Null,
Symbol, Object.

Ví dụ:

>"Phong", "Playwright class",
"Playwright Việt Nam"

- Kiểu Number: dùng để khai báo một số.

Ví dụ:

> 100, 0, 100.5, -100.005
- Kiểu Boolean: dùng để khai báo một
giá trị kiểu đúng sai (true hoặc false):

Ví dụ:

>true, false.

## Comparison operator = toán tử so sánh.

- Dùng để so sánh giá trị giữa 2 biến với
nhau. Kết quả sẽ trả về Boolean (true
hoặc false).

- Các toán tử so sánh:

*So sánh hơn kém: >, <*

*So sánh bằng: ==, ===,!=, !==, =, <=*

## Unary operator = toán tử một ngôi.
- Dùng để tăng hoặc giảm giá trị

> i++ bằng với i=i+1

> i-- bằng với i=i-1

## Arithmetic operator = toán tử số học.
- Dùng tính toán giá trị biểu thức
- Các phép toán: +, -, *, /

## Conditional = điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.

- Cú pháp: if (<điều kiện>) { // code }. Nếu điều kiện đúng, sẽ chạy đoạn code

Ví dụ:
> if (5 > 3) { console.log("5 lớn hơn 3") }

## Loops = vòng lặp
- Dùng để thực hiện một đoạn logic một số lần nhất định
- Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {
// code }

Ví dụ:

> for (let i = 1; i <= 10; i++) { console.log("Giá trị của i là: ", i);}

**Format code - Mac: Option + Shift + F / Window: Alt + Shift + F**