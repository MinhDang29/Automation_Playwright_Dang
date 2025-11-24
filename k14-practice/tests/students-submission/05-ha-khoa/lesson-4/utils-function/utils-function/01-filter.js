const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150]

2.1
let filterNum = scores.filter(num => num > 80);
console.log(filterNum);

2.2
let filterAge = ages.filter(num => num >= 18);
console.log(filterAge);

2.3
let filterWord = words.filter(str => str.length > 5);
console.log(filterWord);