// 1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

console.log("Nam san xuat cua xe la:", car.year);

// 2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.

const person = {
  name: "Tai",
  address: {
    street: "Duong Quang Ham",
    city: "HCM",
    country: "Viet Nam",
  },
};

console.log("Ten duong cua " + person.name + " la: " + person.address.street);
// 3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english

const student = {
  name: "Tai",
  grades: {
    math: 1,
    english: 0,
  },
};
console.log(student.grades["math"]);

// 4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.

let settings = {
  volume: 1,
  brightness: 52,
};

settings.volume = 2;

console.log(settings);

//5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó 6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này

let bike = {};
bike.color = "hồng cánh sen";
console.log(bike);

// 6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này

let employee = { name: "Tai", age: 1 };
console.log(employee);
delete employee.age;
console.log(employee);

// 7. Một trường học có các lớp học và học sinh như sau:
// ○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang

let school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};

console.log(school);
