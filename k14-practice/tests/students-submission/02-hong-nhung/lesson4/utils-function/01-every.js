const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//Yeu cau 1
const scoreAboveExpect = scores.every(score => score > 70);
console.log(scoreAboveExpect);

//Yeu cau 2
const ageAboveExpect = ages.every(age => age > 15);
console.log(ageAboveExpect);

//Yeu cau 3
const wordAboveExpect = words.every(word => word.length > 3);
console.log(wordAboveExpect);