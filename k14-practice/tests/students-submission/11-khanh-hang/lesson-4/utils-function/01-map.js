const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];

//4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.

const newScores = scores.map((score) => {
  if (score < 90) {
    return (score * 10) / 100;
  } else {
    return (score * 5) / 100;
  }
});
console.log(newScores);

//4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.

const newNumbers = numbers.map((number) => {
  return number.toString();
});
console.log(newNumbers);

//4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.

const newNumbers1 = numbers.map((number) => {
  return number * 2;
});
console.log(newNumbers1);
