const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//2.1 Lọc các giá trị tron scores > 80
const scoreAbove80 = scores.filter(score => score > 80)
console.log(scoreAbove80);
//2.2 Lọc các giá trị trong ages >= 18
const ageAboveEqual18 = ages.filter(age => age >= 18);
console.log(ageAboveEqual18);
//2.3 Lọc các từ trong word có độ dài > 5
const filterWord = words.filter(word => word.length > 5);
console.log(filterWord);