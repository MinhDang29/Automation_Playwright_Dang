const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150]

5.1
let someNum = scores.some(num => num > 80);
console.log(someNum);

5.2
let someAge = ages.some(num => num < 18);
console.log(someAge);

5.3
let someWord = words.some(str => str.length > 5);
console.log(someWord);