const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//6.1 Tính tổng các giá trị trong scores.

const sum = scores.reduce((total, score) => total + score);
console.log(sum);

//6.2 Tính tích các giá trị trong numbers.

const mult = numbers.reduce((total, number) => total * number);
console.log(mult);

//6.3 Tính tổng các giá trị trong expenses.

const sum1 = expenses.reduce((total, expense) => total + expense);
console.log(sum1);
