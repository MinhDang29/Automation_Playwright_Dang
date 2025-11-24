const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

//Yeu cau 1
numbers.push(4);
names.push("David");
console.log(numbers);
console.log(names);

//Yeu cau 2
numbers.pop();
console.log(numbers);

//Yeu cau 3
numbers.unshift(0);
names.unshift("David");
console.log(numbers);
console.log(names);

//Yeu cau 4
numbers.shift();
names.shift();
console.log(numbers);
console.log(names);
