// File utils-function/01-map.js
// Data:
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu <90, giảm 5% nếu >=90.
const newScores = scores.map(score => {
    if (score < 90) {
        return score * (110 / 100);
    } else {
        return score * (95 / 100);
    }
});
console.log("Mang moi tu scores: ", newScores);

// 4.2 Từ numbers=[1,2,3], chuyển thành mảng chuỗi.
const numberToString = numbers.map(num => num.toString());
console.log("Chuyen numbers sang chuoi: ", numberToString);

// 4.3 Từ numbers=[1,2,3], nhân đôi mỗi giá trị.
const newNumbers = numbers.map(num => num * 2);
console.log("Nhan doi cac so trong numbers: ", newNumbers);
