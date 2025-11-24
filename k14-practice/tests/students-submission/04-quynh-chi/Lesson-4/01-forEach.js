const numbers = [1, 2, 3];

// 1.1 In lần lượt từng phần tử của numbers.
numbers.forEach((num) => {
  console.log(num);
});

// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
// Cách 1:
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Tổng của numbers là: ${sum}`);
let numbersDesc = numbers.sort((a, b) => b - a);
console.log(`Giá trị lớn nhất của numbers là: ${numbersDesc[0]}`);
let numbersAsc = numbers.sort((a, b) => a - b);
console.log(`Giá trị nhỏ nhất của numbers là: ${numbersAsc[0]}`);

// Cách 2 tìm min max
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log(`Giá trị lớn nhất của numbers là: ${max}`);
console.log(`Giá trị nhỏ nhất của numbers là: ${min}`);

// 1.3 Tạo ra mẳng mới từ numbers, mỗi phần tử nhân đôi
let doubleNumbers = numbers.map((num) => num * 2);
console.log(`Mảng mới: ${doubleNumbers}`);
