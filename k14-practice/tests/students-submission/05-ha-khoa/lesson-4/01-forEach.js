const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23]
const dupArr = [1, 2, 3, 4, 5]

1.

1.1
numbers.forEach(value => {
    console.log(value);
})

1.2
let sum = 0;
numbers.forEach(value => {
    sum += value;
    console.log(sum);
});

1.3
const newNumbers = [];
numbers.forEach(value => {
    newNumbers.push(value *2);
})
console.log(newNumbers)