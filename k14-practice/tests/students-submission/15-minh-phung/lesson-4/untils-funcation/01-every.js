const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//1.1 Kiểm tra tất cả giá trị trong scores có > 70 không
const allScoresAbove70 = scores.every(score => score > 70);
console.log(allScoresAbove70);
//1.2 Kiểm tra tất cả giá trị trong ages có >15 không
const allAgeAbove15 = ages.every(age => age > 15);
console.log(allAgeAbove15);
//1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không
const lengthOfElement = words.every(Element => Element.length > 3);
console.log(lengthOfElement);