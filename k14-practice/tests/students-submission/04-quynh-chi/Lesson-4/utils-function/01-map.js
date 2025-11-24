const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
let adjustedScores = scores.map((score) => {
  if (score < 90) {
    return (score += score * 0.1);
  } else {
    return (score -= score * 0.05);
  }
});
console.log(`Mảng mới từ scores: ${adjustedScores}`);

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
let stringNumbers = numbers.map((num) => num.toString());
console.log(`Mảng mới chuyển thành mảng chuỗi: ${stringNumbers}`);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.
let doubledNumbers = numbers.map((num) => num * 2);
console.log(`Mảng mới nhân đôi mỗi giá trị: ${doubledNumbers}`);
