// File utils-function/01-filter.js
// Data:
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 2.1 Lọc các giá trị trong scores > 80.
const filterScores = scores.filter(score => score > 80);
console.log("Loc cac gia tri trong scores >80: ", filterScores);

// 2.2 Lọc các giá trị trong ages >= 18.
const filterAges = ages.filter(age => age >= 18);
console.log("Loc cac gia tri trong scores >=18: ", filterAges);

// 2.3 Lọc các từ trong words có độ dài > 5.
const filterWords = words.filter(word => word.length > 5);
console.log("Loc cac gia tri trong words co do dai >5: ", filterWords);