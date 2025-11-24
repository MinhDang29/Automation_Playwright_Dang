// File 01-forEach.js
// Data:
const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 1.1 In lần lượt từng phần tử của numbers.
numbers.forEach((number) => {
    console.log(`Value: ${number}`);
});

// 1.2 Tính tổng các phần tử trong mảng numbers.
let sum = 0;
numbers.forEach((number) => {
    sum += number;
});
console.log(`Sum: ${sum}`);

// Tìm giá trị lớn nhất trong mảng numbers.
let maxNumber = arr[0];
numbers.forEach((number) => {
    if (number > maxNumber) {
        maxNumber = number;
    }
});
console.log(`Max number: ${maxNumber}`);

// Tìm giá trị nhỏ nhất trong mảng numbers.
let minNumber = arr[0];
numbers.forEach((number) => {
    if (number < minNumber) {
        minNumber = number;
    }
});

console.log(`Min number: ${minNumber}`);

// 1.3 In từng ký tự của str.
numbers.forEach((number) => {
    console.log(`Value: ${number * 2}`);
});