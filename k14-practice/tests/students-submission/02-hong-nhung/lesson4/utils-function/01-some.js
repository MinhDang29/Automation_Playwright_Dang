const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//Yeu cau 1
const scoreAboveExpect = scores.some(score => score > 80);
console.log(scoreAboveExpect);

//Yeu cau 2
const ageUnderExpect = ages.some(age => age < 18);
console.log(ageUnderExpect);

//Yeu cau 3
const wordAboveExpect = words.some(word => word.length > 5);
console.log(wordAboveExpect);