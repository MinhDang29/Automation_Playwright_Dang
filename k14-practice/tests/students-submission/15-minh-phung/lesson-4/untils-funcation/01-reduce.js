const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//6.1 Tính tổng các giá trị trong scores
const totalValue = scores.reduce((total, score) => total + score, 0);
console.log(totalValue);
//6.2 Tính tích các giá trị trong numbers
const tinhsTich = numbers.reduce((tich, num) => tich * num, 1);
console.log(tinhsTich);
//6.3 Tính tổng các giá trị trong expenses
const tinhTong = expenses.reduce((tong, num) => tong + num, 0);
console.log(tinhTong);