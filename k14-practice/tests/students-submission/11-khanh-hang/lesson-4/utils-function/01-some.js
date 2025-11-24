const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//5.1 Kiểm tra scores có giá trị nào > 80 không.

const value = scores.some((score) => score > 80);
console.log(value);

//5.2 Kiểm tra ages có giá trị nào < 18 không.

const value1 = ages.some((age) => age < 18);
console.log(value1);

//5.3 Kiểm tra words có từ nào dài > 5 không.

const value2 = words.some((word) => word.length > 5);
console.log(value2);
