const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//Yeu cau 1
const scoreAboveExpect = scores.filter(score => score > 80);
console.log(scoreAboveExpect);

//Yeu cau 2
const ageAboveExpect = ages.filter(age => age >= 18);
console.log(ageAboveExpect);

//Yeu cau 3
const wordAboveExpect = words.filter(word => word.length > 5);
console.log(wordAboveExpect);