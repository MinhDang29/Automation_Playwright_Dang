# Git and Js basic
## Version control system
1. Định nghĩa:
VCS là hệ thống quản lý các phiên bản
2. Các loại VCS
- Local: lưu ở máy cá nhân
- Centralize: lưu ở 1 máy chủ tập trung
- Distributed: lưu ở nhiều máy khác nhau
## Git
1. Git được dùng để quản lý phiên bản và làm việc giữa nhiều với nhau
2. Phân biệt git vs github
- Git: 
    - Là một phần mềm được cài trên máy
    - Là một commandline tool
    - Công cụ quản lý phiên bản, đưa file vào Git repo
    - Có các tính năng của VCS
- GitHub:
    - Là 1 dịch vụ web host trên web
    - Là công cụ có giao diện
    - Là nơi để upload git repo lên
    - Có các tính năng của VCS và 1 số tính năng khác
3. Git - three states
- Working directory: các file mới hoặc có file có thay đổi (U)
- Staging area: các file đưa vào vùng chuẩn bị commit (A)
- Repo: các commit
4. Git keytakeaways
- Khởi tạo: git init
- Cấu hình: git config
- Thêm file vào vùng staging: git add
- Xem trạng thái file: git status
- commit: git commit -m"message"
- Kiểm tra lịch sử commit: git log
5. Git commit convention
Trong lớp dùng convention:
type: short-description
- Type:
    - chore: sửa nhỏ lẻ, chính tả, xoá file không dùng,...
    - feat: thêm tính năng, tc mới
    - fix: sửa lỗi 1 test trước đó
- Des: mô tả ngắn gọn, text không dấu
6. Git simple workflow
- Không dùng global config: init > config > add > commit > push
- Dùng global config: init > add > commit > push
## JS baisc
- in ra: console.log();
- chạy file: node relative_link file
- Khai báo biến: nên dùng let, const, hạn chế var trong khoá học này
    - var/let: dùng khi biến sẽ gán lại
    - const: khi biến không gán lại
- Data type: string, number, bigint, boolean, underfined, null, symbol, object
- Toán tử so sánh:
    - so sánh hơn kém: >, <
    - so sánh bằng: ==, ===, !=, !==, >=, <=
- Toán tử 1 ngôi: 
    - i++ = i+1
    - i-- = i-1
- Toán tử số học: +, -, *, /
- Điều kiện if: cú pháp if (điều kiện 1) {//code}
- Vòng lặp for: for (khởi tạo; điều kiện dừng; điều kiện tăng) {//code}
## VSCode
- Fomat code:
    - mac: option + shift + F
    - win: alt shift F

