/* 
Class trong JavaScript là một khuôn mẫu để tạo ra các đối tượng có cùng cấu trúc và hành vi, bao gồm:
Dùng class khi muốn tạo nhiều đối tượng có cùng cấu trúc và hành vi
Thuộc tính (properties) – dữ liệu của đối tượng
Phương thức (methods) – hành vi của đối tượng
*/

// Cấu trúc của class:
/* Quy ước đặt tên trong class:
- Bắt đầu = chữ cái viết hoa, và mỗi từ đều viết hoa chữ cái đầu
VD: class StudentProfile {}
- Không được bắt đầu bằng số, chữ thường, không có dấu cách khoảng trắng và ký tự đặc biệt
*/
class Person {
  constructor(name, age) {       // Hàm khởi tạo, name và age là tham số của hàm constructor
  // constructor() là hàm đặc biệt được gọi khi đối tượng mới được tạo bằng new
  // this đại diện cho đối tượng đang được tạo, thuộc tính được tạo trong class thông qua từ khoá this 
  
  this.name = name;// name là thuộc tính
  this.age = age;// age là thuộc tính
// Ở đây this.name và this.age là thuộc tính của class Person.  
}

  greet() {                     // Phương thức: đại diện cho các hành động trong class
  //không cần khai báo hàm phải có thêm function đằng trước trong class
    console.log(`Xin chào, tôi là ${this.name}, ${this.age} tuổi.`);
  }
}

// Cách sử dụng class:
const person1 = new Person("Mạnh Sỹ", 26);
person1.greet();  // 👉 "Xin chào, tôi là Mạnh Sỹ, 26 tuổi."

// Kế thừa inheritance trong class
class Student extends Person {
  constructor(name, age, className) {
    super(name, age);              // Gọi constructor của lớp cha
    this.className = className;
  }

  study() {
    console.log(`${this.name} đang học lớp ${this.className}.`);
  }
}

const student1 = new Student("Sỹ", 20, "12A");
student1.greet();    // từ lớp cha
student1.study();    // từ lớp con