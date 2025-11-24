const numbers = [1, 2, 3];

// 1.1 In lần lượt từng phần tử của numbers.

numbers.forEach((number) => {
  console.log(number);
});
numbers.forEach((number, index) => {
  console.log(`${index}: ${number}`);
});

// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers

let sum = 0;
let max = numbers[0];
let min = numbers[0];
numbers.forEach((number) => {
  sum += number;
  if (number > max) {
    max = number;
  } else if (min > number) {
    min = number;
  }
});
console.log(sum);
console.log(max);
console.log(min);

//1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
let reNumbers = [];
numbers.forEach((number, index) => {
  reNumbers[index] = number * 2;
});
console.log(reNumbers);
