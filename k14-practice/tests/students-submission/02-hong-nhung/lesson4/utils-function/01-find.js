const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//Yeu cau 1
const firstScoreAboveExpect = scores.find(score => score > 80);
console.log(firstScoreAboveExpect);

//Yeu cau 2
const firstAgeAboveExpect = ages.find(age => age > 20);
console.log(firstAgeAboveExpect);

//Yeu cau 3
const firstWordAboveExpect = words.find(word => word.length > 5);
console.log(firstWordAboveExpect);