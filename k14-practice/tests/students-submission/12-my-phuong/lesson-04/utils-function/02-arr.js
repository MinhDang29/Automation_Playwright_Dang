// File utils/function/02-arr.js
// Data:
const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

// 1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
console.log(numbers.push(4));
console.log("Them 4 vao cuoi numbers: ", numbers);
console.log(names.push("David"));
console.log("Them David vao cuoi names: ", names);

// 2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
const lastNumber = numbers.pop();
console.log("Loai bo phan tu cuoi cua numbers: ", numbers);

// 3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
numbers.unshift(0);
console.log("Them 0 vao dau numbers: ", numbers);
names.unshift("David");
console.log("Them David vao dau names: ", names);

//4. shift: Loại bỏ phần tử đầu của numbers = [0, 1, 2, 3].
const firstNumber = numbers.shift();
console.log("Loai bo phan tu dau tien cua numbers: ", numbers);