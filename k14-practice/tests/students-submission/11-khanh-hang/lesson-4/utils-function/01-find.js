const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//3.1 Tìm giá trị đầu tiên trong scores > 80.

const value = scores.find((score) => score > 80);
console.log(value);

//3.2 Tìm giá trị đầu tiên trong ages > 20.

const value1 = ages.find((age) => age > 20);
console.log(value1);

//3.3 Tìm từ đầu tiên trong words có độ dài > 5.

const value2 = words.find((word) => word.length > 5);
console.log(value2);
