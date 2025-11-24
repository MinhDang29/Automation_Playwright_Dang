# Kiến thức tổng hợp Lesson 3: Git & JavaScript (2)
## Git
### Thay đổi commit message
* Sử dụng câu lệnh: **git commit --amend**<br>- Gõ i -> vào chế độ insert & chỉnh sửa thông tin comment cần thay đổi<br>- Gõ esc để thoát chế độ insert<br>- Gõ :wq -> write and quit
* Hoặc thực hiện câu lệnh: **git commit --amend -m "mess thay đổi"**<br>*Note: Chỉ thay đổi được commit gần nhất*
### Đưa từ vùng staging về vùng working directory
* Dùng câu lệnh nếu chuyển 1 file: **git restore --staged <tên file>**
* Dùng câu lệnh nếu chuyển toàn bộ file: **git restore --staged .**
### Đưa từ vùng repository về vùng working directory
* Dùng câu lệnh: **git reset HEAD~x (undo x commit)**
### Branching model
* Dùng branch để tạo ra 1 vùng làm việc mới mà không ảnh hưởng đến vùng làm việc đang ổn định 
* Tạo branch: **git branch <tên nhánh>**
* Chuyển nhánh: **git checkout <tên nhánh>**
* Tạo branch và chuyển nhánh luôn: **git checkout -b <tên nhánh>**
* Check các nhánh: **git branch**<br>
*Note: Đứng tại đâu để tạo nhánh -> trong nhánh mới bao gồm file nhánh trước đó + file của nhánh vừa tạo*
### Gitignore file
* Dùng để bỏ qua các file không cần git theo dõi
* Nếu ignore file: <tên file>
* Nếu ignore folder: <tên folder>/ *(Có thể có / hoặc không)*<br>
*Note: Nếu file ở vùng repository không đưa được vào gitignore*
## JavaScript 
### Convention - Cách đặt tên
* snake_case: chưa dùng 
* kebab-case: đặt tên file
* camelCase: đặt tên biến 
* PascalCase: đặt tên class
### Console
Các cách sử dụng console: 
* console.log("Nội dung")
* console.log('Nội dung')
* console.log(\`Nội dung\`)
* console.log(\`${variable}\`)
### Object
* Đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số
* Cách khai báo Object: **let/const <tên object> = {thuộc tính: giá trị, ...}**<br>- thuộc tính: cách đặt tên giống quy tắc đặt tên biến<br>- giá trị: có kiểu dữ liệu giống biến hoặc là 1 object khác
* Update: **<tên object>.<thuộc tính thay đổi> = new value** hoặc **<tên object>["thuộc tính thay đổi"] = new value**<br>
*Note: Nếu khai báo là const, với object có thể thay đổi thông tin thuộc tính nhưng không thể add thêm thuộc tính*
* Deleted thuộc tính: **delete <tên object>.<thuộc tính cần xóa>**
### Logic Operator
* && : và
* || : hoặc
* ! : phủ định -> đảo ngược giá trị mệnh đề
### Array
* Mảng
* Khai báo: **<tên mảng> = [value 1, value 2,...]**
* Sử dụng: gọi như 1 biến thông thường
* Truy xuất mảng: dùng **Array.length**
* Lấy phần tử theo index: **Array[index]**
* Thêm phần tử vào trong Array: **Array.push(value)**
* Bỏ phần tử cuối cùng trong Array: **Array.pop()**
* Bỏ phần tử đầu tiên trong Array: **Array.shift()**
### Function
* Hàm, đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể 
* Khai báo: **function <tên function>() {//code}**
* Parameter: trong 1 function có thể truyền thêm các param
* Return value: đối với các function cần trả ra 1 giá trị -> khi viết function cần return