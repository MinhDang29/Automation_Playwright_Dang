//Yeu cau 1
const numbers = [1, 2, 3];
numbers.forEach((num) => {
    console.log(num)
});

//Yeu cau 2
let sum = 0;
let min = numbers[0];
let max = numbers[0];
numbers.forEach((num) => {
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;
});
console.log(`Tổng là ${sum}`);
console.log(`Số nhỏ nhất là ${min}`);
console.log(`Số lớn nhất là ${max}`);

//Yeu cau 3
let newNumbers = [];
numbers.forEach((num) => {
    newNumbers.push(num * 2)
});
console.log(newNumbers);

