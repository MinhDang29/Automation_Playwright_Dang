// File utils-function/01-map.js
// Data:
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores.
const sum1 = scores.reduce((total, score) => total + score, 0);
console.log("Total of scores: ", sum1);

// 6.2 Tính tổng các giá trị trong numbers.
const sum2 = numbers.reduce((total, number) => total + number, 0);
console.log("Total of numbers: ", sum2);

// 6.3 Tính tổng các giá trị trong expenses.
const sum3 = expenses.reduce((total, expense) => total + expense, 0);
console.log("Total of expenses: ", sum3);