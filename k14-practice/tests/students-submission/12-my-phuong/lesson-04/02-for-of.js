// File 01-for-of.js
// Data:
const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của str.
console.log("In lan luot tung ky tu cua str: ");
for (let str1 of str) {
    console.log(str1);
}

// 2.2 Tạo mảng đảo ngược từ str.

let mangDaoNguoc = []
for (let char of str) {
    mangDaoNguoc = char + mangDaoNguoc;
}
console.log(`Mang dao nguoc: ${mangDaoNguoc}`);

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let first = -1;
let last = -1;
for (let index of arr) {
    if (arr[index] === 3) {
        if (first === -1) {
            first = index;
        }
        last = index;
    }
}
console.log(`Vi tri dau tien cua 3: ${first}`);
console.log(`Vi tri cuoi cung cua 3: ${last}`);

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
let result = [];
let count = {};

for (let i of dupArr) {
    count[i] = (count[i] || 0) + 1;
    if (count[i] === 1) {
        result.push(i);
    } else if (count[i] === 2) {
        result = result.filter(num => num !== i);
    } else
        return result;
}

console.log(`Nhung phan tu chi xuat hien 1 lan: ${result}`);