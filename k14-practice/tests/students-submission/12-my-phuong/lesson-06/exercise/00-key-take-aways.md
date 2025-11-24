# Git, Javascript advanced (Lesson 6)

## 1. Git

### 1.1 Git: clone

- Clone: Lấy dự án đã có sẵn (remote) về máy tính của bạn (local)
- Câu lệnh clone:
```
    git clone <url>

    Ví dụ:

    git clone git@github.com:better-bytes-academy/k14-practice.git
```
- Câu lệnh clone về với tên thư mục khác:

```
    git clone <url> <new-name>

    Ví dụ:

    git clone git@github.com:better-bytes-academy/k14-practice.git andy-learn-pw

```
### 1.2 Git: branch

- Chia branch giúp cho việc code trở nên thuận tiện
- Câu lệnh:

```
    git branch <branch_name>

    - Ý nghĩa: Tạo nhánh mới với tên <branch_name>.
    - Ví dụ:
        git branch feat/lesson-6-exercises-myphuong
```
```
    git checkout <branch_name>
    
    - Ý nghĩa: Chuyển sang làm việc trên nhánh <branch_name>.
    - Ví dụ:
        git checkout feat/lesson-6-exercises-myphuong
```
```
    git checkout -b <branch_name>
    
    - Ý nghĩa: Tạo mới và chuyển luôn sang nhánh <branch_name>.
    - Ví dụ:
        git checkout -b feat/lesson-6-exercises-myphuong
```
### 1.3 Git: push

- Đưa code từ vùng repository lên server
- Câu lệnh:
```
    git push <remote_name> <branch_name>

    Ví dụ:
    git push origin main
```
### 1.4 Git: pull

- Chỉ lấy dữ liệu của nhánh đó về máy
- Câu lệnh:
```
    git pull <remote_name> <branch_name>
    
    Ví dụ:
    - A: branchA
    - B: branchB
    git pull origin branchA
```

### 1.5 Git: stash

- Lưu các công việc đang làm lại vào 1 vùng nhớ “tạm”
- Câu lệnh:
```
    git stash
```

### 1.6 Git: unstash

- Lấy các công việc trong vùng nhớ tạm ra
- Câu lệnh:
```
    git stash pop
```

### 1.7 Git: Merge request, reviewer

- Merge request: gộp code từ 1 nhánh sang nhánh còn lại
- Reviewer: Người review code

### 1.8 Git: convention

- Convention là bộ quy tắc
- Convention giúp:
    - Gọn gàng, đồng bộ
    - Dễ đoán được ý đồ của PR/commit
- Convention:
    
```
Đặt tên branch
    - feat/checkout
    - fix/fill-info
    - feat/lesson-6-phuong

Viết commit message: <type>/<short-description>
    - type:
        + feat: tính năng mới
        + fix: sửa lỗi
        + conf: thay đổi cấu hình (config)
        + chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...
    - short-description: Mục đích của branch được tạo ra
```
### 1.9 Git: Good and bad

#### Branch name:

|Bad     |Good   |
|--------|--------|
|branch1    |feat/lesson-5|
|feat       |conf/update-timeout|
|feat/lan1  ||
|tmp        ||

#### Commit:

|Bad     |Good   |
|--------|--------|
|fix code |feat: add solution for test 1|
|fix 1 |fix: add missing continue|
|abccdef  |conf: update global setup conf|
|feat: add solution and subtract method and add method to test 1 ||
|feat: lesson1||

```
- Lưu ý một good commit có format: "feat: <short-desc>"
- Ví dụ : feat: add solution for test 1
```

## 2. Javascript: Class

### 2.1 Class là gì?

- Dùng để khai báo kiểu dữ liệu
- Là một khuôn mẫu định nghĩa các **thuộc tính** và **phương thức** mà các đối tượng thuộc class đó sẽ có.

### 2.2 Tại sao cần Class?

- Tái sử dụng code
- Tăng tính linh hoạt

### 2.3 Phương thức (method)

- Là các hàm được gắn với class.
- Thường để thực hiện các hành động liên quan đến đối tượng (class) đó.
- Ví dụ:

```
class Student {
    constructor (name, grade) {
        this.name = name;
        this.grade = grade;
    }    
    sayHi() {
        console.log(`Hi, my name is ${this.name}`)
    };
}
```

### 2.4 Phương thức với tham số (Methods with Parameter)

Ví dụ:
```
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting(message) {
    return `${this.name} says: ${message}`;
  }
}
const student1 = new Student("Andy", 20);
console.log(student1.greeting("Hello, everyone!"));
```
    
## 3. Kiến thức bổ sung "Typescript"

- TypeScript (TS) là JavaScript cải tiến, thêm kiểu dữ liệu để code rõ ràng hơn.
- Giúp phát hiện lỗi ngay khi viết code (ví dụ: gán sai kiểu dữ liệu).
- TS được biên dịch thành JavaScript để chạy.

```
Ví dụ:
    let age: number = 25; // Phải là số
    let name: string = "John"; // Phải là chuỗi
    let teams: string[] = ["Team A", "Team B"]; // Mảng chuỗi
    // age = "30"; // Lỗi: TS báo không thể gán chuỗi cho số
```
- Interface trong TypeScript
- Interface định nghĩa cấu trúc cho đối tượng (như cầu thủ trong đội bóng).
- Đảm bảo đối tượng có đúng các thuộc tính và kiểu dữ liệu.

``` 
Ví dụ:
    interface Player {
        name: string;
        position: string;
        jerseyNumber: number;
    }
    let player: Player = { name: "John", position: "Forward", jerseyNumber: 10 };
```
- Trong class: Class trong TS giống JavaScript nhưng có thêm
    - Khai báo kiểu dữ liệu cho thuộc tính và phương thức.
    - Ví dụ:
```
    class Team {
        name: string;
        players: Player[];
        constructor(name: string) {
            this.name = name;
            this.players = [];
        }
    addPlayer(player: Player): void {
        this.players.push(player);
        }
    }
```
- Run TS:

```
    npx ts-node <path_file>
    npx tsx <path_file>
```
    