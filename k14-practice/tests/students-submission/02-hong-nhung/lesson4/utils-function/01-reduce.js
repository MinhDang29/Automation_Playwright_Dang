const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Yeu cau 1
const totalScore = scores.reduce((sum, num) => sum + num, 0);
console.log(totalScore);

//Yeu cau 2
const mulNum = numbers.reduce((mul, num) => mul * num, 1);
console.log(mulNum);

//Yeu cau 3
const totalExpense = expenses.reduce((sum, num) => sum + num, 0);
console.log(totalExpense);
