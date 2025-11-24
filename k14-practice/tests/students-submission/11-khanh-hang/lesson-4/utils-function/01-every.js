const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.

const value = ages.every((age) => age > 15);
console.log(value);

//1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.

const word = words.every((word) => word.length > 3);
console.log(word);
