const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores.
let sumScore = scores.reduce((score, currentScore) => score + currentScore, 0); // 0 là init value
console.log(`Tổng các giá trị trong scores: ${sumScore}`);

// 6.2 Tính tích các giá trị trong numbers.
let productOfNumbers = numbers.reduce((num, currentNum) => num * currentNum, 1); // 1 là init value
console.log(`Tích các giá trị trong numbers: ${productOfNumbers}`);

// 6.3 Tính tổng các giá trị trong expenses.
let sumExpenses = expenses.reduce(
  (expense, currentExpense) => expense + currentExpense,
  0
); // 0 là init value
console.log(`Tổng các giá trị trong expenses: ${sumExpenses}`);

