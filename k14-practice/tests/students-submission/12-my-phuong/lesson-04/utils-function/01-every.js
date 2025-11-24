// File utils-function/01-every.js
// Data:
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1.1 Kiểm tra tất cả các giá trị trong scores có >70 không.
const checkNumber = scores.every(num => num > 70);
console.log("Ket qua kiem tra tat ca cac gia tri cua scores co >70: ", checkNumber);

// 1.2 Kiểm tra tất cả các giá trị trong ages có >17 không.
const checkAge = ages.every(age => age > 17);
console.log("Ket qua kiem tra tat ca cac gia tri cua ages co >17: ", checkAge);

// 1.3 Kiểm tra tất cả các giá trị trong words có >3 ký tự không.
const checkWord = words.every(word => word.length > 3);
console.log("Ket qua kiem tra tat ca cac gia tri cua words co >3 ky tu: ", checkWord);
