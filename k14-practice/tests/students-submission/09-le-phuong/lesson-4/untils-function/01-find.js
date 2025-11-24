const scores = [85, 90, 78];
//2.1 Lọc các phần tử >80
console.log (scores.find(number =>number >80))

//2.2 Lọc các giá trị trong age >=18
const ages = [18, 21, 16, 25];
console.log (ages.find(number =>number >20))

//2.3 Lọc các từ trong word co dộ dài >5
const words = ["apple", "banana", "cherry", "date"];
console.log (words.find(number =>number.length >5))