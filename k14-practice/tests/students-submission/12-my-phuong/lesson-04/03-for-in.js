// File 01-forIn.js
const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 3.1 In tên và giá trị mỗi thuộc tính của student.
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 3.2 Tính tổng các giá trị số trong student
let sum = 0;
for (let value in student) {
    if (value === "age" || value === "salary") {
        sum += student[value];
    }
}
console.log(`Tong gia tri so trong student: ${sum}`);

// 3.3 Tạo mảng chứa tên các thuộc tính của student.
let arr1 = [];
for (let property in student) {
    arr1.push(property);
}
console.log(arr1);