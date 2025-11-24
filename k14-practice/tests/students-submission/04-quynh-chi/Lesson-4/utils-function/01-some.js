const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 5.1 Kiểm tra scores có giá trị nào > 80 không.
let hasScoreAbove80 = scores.some((score) => score > 80);
console.log(`Có giá trị nào trong scores > 80 không: ${hasScoreAbove80}`);

// 5.2 Kiểm tra ages có giá trị nào < 18 không
let hasAgeBelow18 = ages.some((age) => age < 18);
console.log(`Có giá trị nào trong ages < 18 không: ${hasAgeBelow18}`);

// 5.3 Kiểm tra words có từ nào dài > 5 không.
let hasWordLongerThan5 = words.some((word) => word.length > 5);
console.log(`Có từ nào trong words dài > 5 không: ${hasWordLongerThan5}`);
