const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//1.1 In lần lượt từng phần tử của numbers. 

for (let i = 0; i < numbers.length; i++){ 
 console.log(numbers[i]); 
} 

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers 
// Tổng: 
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`Tổng của numbers là: ${sum}`); 
// Lớn nhất:
let max = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(`Giá trị lớn nhất trong numbers là: ${max}`); 

// Nhỏ nhất:

let min = numbers[0]; 
for (let i = 1; i < numbers.length; i++) { 
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(`Giá trị nhỏ nhất trong numbers là: ${min}`); 


// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi 

const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(`mảng mới từ numbers, mỗi phần tử nhân đôi là: ${doubledNumbers}`); 