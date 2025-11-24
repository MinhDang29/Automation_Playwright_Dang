const number = [1, 2, 3];
const name = ["Alice", "Bob", "Charlie"]

//1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
number.push(4);
console.log(number);
//2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
number.pop();
console.log(number);
//3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
number.unshift(0);
name.unshift("David");
console.log(number, name);
//. shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
number.shift();
console.log(number);