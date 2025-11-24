const scores = [85, 90, 78];
//6.1 Tính tổng các giá tring trong scores
const sumTotal = scores.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumTotal);

//6.2 Tính tích các giá tring trong numbers
const numbers = [1, 2, 3, 4];
const mulValue = numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue
);
console.log(mulValue);

//6.3 Tính tổng các giá tri trong expenses
const expenses = [50, 100, 150];
const sumExpenses = expenses.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumExpenses);