# GIT
## Clone
- **Câu lệnh**: Git clone < url > < file name >: Clone dự án về và đặt tên cho thư mục (URL là ssh hoặc https)
## Branch (nhánh)
- Chia branch giúp việc code dễ dàng hơn
- Các câu lệnh
        
        - git branch <branch-name>: Tạo ra 1 nhánh mới
        - git checkout <branch-name>: Chuyển sang nhánh hiện có của dự án
        - git checkout -b <branch-name>: Tạo nhánh mới và chuyển sang nhánh đó
## Push
- Đẩy các file từ vùng repository lên Github
- **Câu lệnh**:

        - git push origin <branch-name> 
## Pull
- Lấy các dữ liệu như các file, nhánh về máy local
- So sánh clone và push
    - *Clone*: Lấy cả repo về máy
    - *Pull*: Chỉ lấy các file từ nhánh nhất định
- **Câu lệnh**:

        - git pull origin <branch-name>
## Stashing
- **Stash**: Lưu các công việc đang làm vào 1 vùng nhớ tạm
- **Câu lệnh**: git stash
- **Unstash**: Lấy các công việc trong vùng nhớ tạm ra
- **Câu lệnh**: git stash pop
## Merge request
- Gộp code từ 1 nhánh sang nhánh còn lại
## Convention
- Đặt tên cho branch: < type >/< short-description >
- **feat**: tính năng mới
- **fix**: sửa lỗi
- **conf**: thay đổi cấu hình (config)
- **chore**: các thay đổi “lặt vặt”:mXóa file không dùng, đổi tên file,...
# JAVASCRIPT
## Class
- Dùng để khai báo kiểu dữ liệu
- Là một khuôn mẫu định nghĩa các thuộc tính và phương thức màc các đối tượng thuộc class đó sẽ có.
- Phương thức (method): Là các hàm gắn trong class, thường thực hiện các hoạt động liên quan tới đối tượng
- VD: 

        class LoginPage {
            constructor(email,password){
                this.email = email;
                this.password = password;
            }
            fillLogin(){ //Day la method
                console.log(`Tài khoản đăng nhập là ${email} and ${password}`);
            }
        }
        const Login = new LoginPage("Quang",1234);
        Login.fillLogin();

# TypeScript
Interface trong TypeScript
- Interface định nghĩa cấu trúc cho đối tượng (như cầu thủ trong đội bóng).
- Đảm bảo đối tượng có đúng các thuộc tính và kiểu dữ liệu.
- Ví dụ:

        interface Player {
            name: string;
            position: string;
            jerseyNumber: number;
        }
        let player: Player = { name: "John", position: "Forward",jerseyNumber: 10 };

- Trong class: Class trong TS giống JavaScript nhưng có thêm khai báo kiểu dữ liệu cho thuộc tính và phương thức.