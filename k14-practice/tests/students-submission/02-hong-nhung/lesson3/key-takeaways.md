# Git & JS (Part2)
## Git
1. Thay đổi commit message 
- git commit --amend
    - Gõ i -> vào chế độ insert
    - Gõ esc để thoát insert
    - Gõ :wq -> write and quit
- git commit --amend -m"message"
2. Đưa từ vùng staging về working directory:
git restore --staged file
3. Đưa từ vùng repo về working directory (uncommit)
git reset HEAD~1 (undo 1 commit)
4. Branching model
- Tạo branch:
    - git branch ten_branch
    - git checkout ten_branch
    - git checkout -b ten_branch
- Tips: Luôn tạo branch mới trước khi thực hiện một lệnh copy từ 
internet
5. Bỏ qua các file không cần git theo dõi: .gitignore file
Ignore file file_name
Ignore folder folder_name/

## JS 
1. Convention:
- snake_case: chưa dùng
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class
2. Console.log with ' and "
- console.log(‘Toi la A’);
- console.log(“Toi la B);
- console.log(`${variable_name}`)
- let name = “Nga”;
- console.log(`Toi la ${name}`);
- console.log(“Toi ten la” + name+ “”)
3. Object
- Cấu trúc: let/const <ten_object> = {<thuoc_tinh>: <gia_tri>,...}
    - Trong đó:
        - <thuoc_tinh>: giống quy tắc đặt tên biến
        - <gia_tri>: có kiểu giống biến, hoặc là 1 object khác
- Ví dụ:
let user = {
    "name": "Nhung",
    "age": 25,
    "job": {
        "jobTitle": "Tester",
        "jobRank": "Middle"
    }
}
console.log("name = " + user.name);
console.log("Job title = ", user["job"]["jobTitle"]);
user.age = 18 //Gán lại
4. Logical operator
- && : cả 2 vế của mệnh đề đều đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của mệnh đề
5. Array
- Tạo mảng: 
const arr = ["A", "B", "C", "D"];
console.log(arr);
- Truy xuất mảng: 
    - Độ dài mảng: length
    - Lấy phần tử theo index: [0], [1], [2]
6. Function
- Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
- Khai báo:
function <nameFunction>() {
// code
}



