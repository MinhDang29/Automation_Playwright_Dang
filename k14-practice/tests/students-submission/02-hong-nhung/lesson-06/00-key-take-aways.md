# Git, JS advanced (lesson 6)
## Git
1. Git clone
- Clone: lấy dự án đã có sẵn (remote) về máy tính của bạn "local"
- Câu lệnh: git clone (url)
- Lệnh clone về với tên thư mục khác: git clone (url) (new-name)

2. Git branch
- Branch = nhánh
- Chia branch giúp việc code trở nên thuận tiện hơn
- Câu lệnh: 
    - git branch (branch_name): Tạo 1 nhánh mới branch_name
    - git checkout (branch_name): chuyển sang nhánh branch_name đã tồn tại
    - git checkout -b (branch_name): tạo và chuyển sang nhánh mới branch_name

3. Git push
- Push = đưa code từ vùng repository lên server
- Câu lệnh: git push (remote_name) (branch_name)
- Ví dụ: git push origin main

4. Git pull
- pull = lấy dữ liệu về
- pull vs. clone
    - clone: lấy cả repo về
    - pull: chỉ lấy dữ liệu của nhánh đó về máy
- ex: git pull origin main
    A: branchA
    B: branchB
    git pull origin branchA
    git pull <remote_name> <branch_name>

5. Git stashing
- Stash: lưu các công việc đang làm lại vào 1 vùng nhớ "tạm"
- Unstash: lấy các công việc trong vùng nhớ tạm ra
- Câu lệnh stash: git stash
- Lệnh thực hiện unstash: git stash pop

6. Git merge request, reviewer
- Merge request = gộp code từ 1 nhánh sang nhánh còn lại
- Reviewer = người review code

7. Git convention
- Đặt tên branch: type/short-description
    - Type: 
        - feat: tính năng mới
        - fix: sửa lỗi
        - conf: thay đổi cấu hình (config)
        - chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...
    - short-description: Mục đích của branch được tạo ra
- Commit message: type: short-desc

## JS: Class
1. Class là gì:
- Class dùng để khai báo kiểu dữ liệu
- Là một khuôn mẫu định nghĩa các thuộc tính và phương thức mà các đối tượng thuộc class đó sẽ có

2. Tại sao cần Class
- Tái sử dụng code
- Tăng tính linh hoạt

3. Phương thức (method)
- Là các hàm được gắn với class
- Thường để thực hiện các hành động liên quan đến đối tượng (class) đó

4. Method with param
- Khai báo
    - Tên class
    - Constructor
    - Property
    - Methods
    - Methods with parameter
- Sử dụng
    const student = new Student();
    student.sayMyName();
- Ví dụ
    - Khai báo class LoginPage với method: fillLogin(username, password)
class FillLogin {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    
    fillLogin(username, password) {
        console.log(`${username} : ${password}`)
    }
}

const loginPage = new FillLogin("Nhung", "1234");
loginPage.fillLogin("Nhung", "1234");

