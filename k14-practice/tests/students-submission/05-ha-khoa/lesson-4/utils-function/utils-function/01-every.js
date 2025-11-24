const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150]

1.1
let checkNum = scores.every(num => num > 70);
console.log(checkNum);

1.2
let checkAge = ages.every(num => num > 15);
console.log(checkAge);

1.3
let checkWord = words.every(str => str.length > 3);
console.log(checkWord);