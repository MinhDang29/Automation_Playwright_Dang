# Git & Javascript Basic (Lesson 2)

## 1. Version Control System
### 1.1 VCS 
Version control system (VCS)là hệ thống quản lý các phiên bản

### 1.2 Types of VCS
- Local VCS : Lưu ở máy cá nhân
- Centralize VCS: Lưu ở 1 máy chủ tập trung
- Distributed VCS: Lưu ở nhiều máy khác nhau

## 2. Git

- Git được viết bởi **Linus Torvalds**, cha đẻ của **Linux**
- Dùng git do nhu cầu quản lý phiên bản và làm việc giữa nhiều người với nhau

### 2.1 Git & GitHub

| Git       | GitHub |
|-----------|--------|
| Là một phần mềm | Là một dịch vụ web | 
| Là một dịch vụ web | Là một dịch vụ web  |
| Là một commandline tool | Là công cụ có giao diện  |
|Là công cụ quản lý phiên bản, đưa file vào Git repository |Là công cụ quản lý phiên bản, đưa file vào Git repository|
|Là công cụ quản lý phiên bản, đưa file vào Git repository |Có các tính năng của Version Control System và một số tính năng khác|

### 2.2 Git - three states

|Working Directory|Staging Area|Repository|
|-----------------|------------|----------|
|Các file mới hoặc file có thay đổi|Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)|Các commit (phiên bản)|

### 2.3 Git - key takeaways (Câu lệnh thường dùng)

1. Khởi tạo thư mục được quản lý bởi Git: git init
2. Cấu hình: 
- Cho 1 repo:
    - git config user.name "{name}"
    -  git config user.email "{email}"
- Cho toàn bộ máy tính (default)
    - git config --global user.name "{name}"
    - git config --global user.email "{email}"
3. Thêm file vào vùng Staging
    - Thêm 1 file: git add <file_name>
    - Thêm toàn bộ: git add .
4. Xem trạng thái file: git status
    - File màu xanh: vùng staging
    - File màu đỏ: vùng working directory
5. Commit: git commit -m "<{message}>"
6. Kiểm tra lịch sử commit: git log

### 2.4 Git - commit convention
- Commit message cần rõ ràng, chuyên nghiệp
- <{type}>: <{short_description}>
    - type: loại commit
        - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
        - feat: thêm tính năng mới, test case mới
        - fix: sửa lỗi 1 test trước đó
    - short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

### 2.5 Git - simple workflow

- Không dùng global config
    - init -> config -> add -> commit -> push

- Dùng global config
    - init -> add -> commit -> push

## 3. Javascript Basic

- Là một ngôn ngữ lập trình.
- Ra đời năm 1995 bởi Brendan Eich.
- Để chạy được trên máy tính không cần trình duyệt, cần Node Js

### 3.1 Variable, constant, data types: 

#### 3.1.1 Variable:  

Variable dùng để lưu trữ giá trị, có thể thay đổi giá trị được.

- Khai báo:
    - var <{ten_bien}> = <{gia tri}>;
    - let <{ten_bien}> = <{gia tri}>;
- Trong đó: <{ten_bien}>
    - Bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $
    - KHÔNG chứa dấu cách
    - KHÔNG là các "từ khóa", tức là các từ đã có trong Javascript (ví dụ: var, let, for, if,...)
- Phạm vi của biến
    - var: phạm vi toàn cục (global)
    - let: phạm vi trong cặp ngoặc {}
    - Nên dùng: let, vì dễ kiểm soát phạm vi của biến

#### 3.1.2 Constant: 

- Constant là hằng số. Dùng để khai báo các giá trị không thể thay đổi

- Khai báo: const <{name}> = <{value}>

- **Khi nào dùng var/let, khi nào dùng const?**

    - var/let: khi biến sẽ gán lại
    - const: khi biến không gán lại
    - Thường sẽ dùng let và const, KHÔNG dùng var  

#### 3.1.3 Data types

- Có 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.
    - Kiểu String: dùng để khai báo một chuỗi
    - Kiểu Number: dùng để khai báo một số
    - Kiểu Boolean: dùng để khai báo một giá trị kiểu đúng sai (true hoặc false)

### 3.2 Comparison operator

- Comparison operator là toán tử so sánh.
- Dùng để so sánh giá trị giữa 2 biến với nhau. Kết quả sẽ trả về Boolean (true hoặc false).
- Các toán tử so sánh:
    - So sánh hơn kém: >, <
    - So sánh bằng: ==, ===,!=, !==, >=, <=

### 3.3 Unary operator

- Unary operator là toán tử một ngôi.
-  Dùng để tăng hoặc giảm giá trị
    - i++ bằng với i=i+1
    - i-- bằng với i=i-1

### 3.4 Arithmetic operator

- Arithmetic operator là toán tử số học.
- Dùng tính toán giá trị biểu thức
-  Các phép toán: +, -, *, /

### 3.5 Conditional

- Conditional là điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.
- Cú pháp: if (<điều kiện>) { // code }. Nếu điều kiện đúng, sẽ chạy đoạn code.

### 3.6 Loops

- Loops là vòng lặp
- Dùng để thực hiện một đoạn logic một số lần nhất định
- Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {// code }   