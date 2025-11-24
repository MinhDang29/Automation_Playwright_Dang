# Key Takeaways - Lesson 6

## 1. Git  
### **Git Clone**  
- Dùng để sao chép toàn bộ repository từ remote về máy local.  
- **Lệnh:**  
  ```sh
  git clone <url>

ví dụ: git clone https://github.com/example-user/example-repo.git

Git Branch

Branch giúp chia nhánh để làm việc độc lập với code chính.

Lệnh:

- git branch <branch_name>

- git checkout <branch_name>

- git checkout -b <branch_name>  # Tạo mới và chuyển luôn vào branch

### **Git Push**
Đẩy code từ máy lên repository trên GitHub.

Lệnh:


git push origin <branch_name>
Ví dụ:git push origin feature-login

### **Git Pull**
Kéo dữ liệu mới nhất từ branch trên remote về local.

Lệnh:

git pull origin main


## Khác biệt giữa clone và pull:

**clone**: Tải toàn bộ repository về máy.

**pull**: Cập nhật branch hiện tại với dữ liệu mới từ remote.

## Git Stash
Lưu tạm thời các thay đổi mà chưa commit.

Lệnh:

git stash
git stash pop  # Lấy lại dữ liệu đã stash
Git Merge Request & Reviewer
Merge request: Gộp code từ một branch vào một branch khác.

Reviewer: Người review code giúp đảm bảo chất lượng.

Lưu ý khi đặt tên branch:

Tốt: feat/lesson-5, fix/update-timeout

Không tốt: branch1, feat


## Giới thiệu về Class
Class là khuôn mẫu để tạo các đối tượng có thuộc tính và phương thức.

Ví dụ:

js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const student = new Person("Nguyễn", 21);
student.sayHello(); // "Hello, my name is Nguyễn"

## Tại sao cần Class?
### Tái sử dụng code → Viết một lần, dùng nhiều lần.

Tăng tính linh hoạt → Dễ mở rộng chức năng.

**Method trong Class**


Các hàm được định nghĩa trong class để thao tác với dữ liệu của đối tượng.

Ví dụ:

js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const myRect = new Rectangle(10, 5);
console.log(myRect.calcArea()); // Output: 50
Method có tham số


Phương thức có thể nhận tham số để xử lý dữ liệu.

Ví dụ:

js

class LoginPage {

  fillLogin(username, password) {
    
    console.log(`Logging in with ${username} and password ${password}`);
  }
}

const login = new LoginPage();
login.fillLogin("user123", "mypassword");
