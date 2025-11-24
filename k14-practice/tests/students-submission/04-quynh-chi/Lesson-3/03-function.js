// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply(a, b) {
  return a * b;
}
console.log(multiply(11, 7));

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
// Cách 1:
function findMin1(a, b, c) {
  if (a < b && a < c) {
    return a;
  }
  if (b < a && b < c) {
    return b;
  }
  return c;
}
console.log(findMin1(-3, 5, 1));

// Cách 2:
function findMin2(a, b, c) {
  return Math.min(a, b, c);
}
console.log(findMin2(-3, -5, 1));

// 3. Viết hàm getTopStudents
function getTopStudents(students, threshold) {
  let topStudent = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topStudent.push(students[i].name);
    }
  }
  return topStudent;
}
const students = [
  { name: "An", score: 9.2 },
  { name: "Bình", score: 7.5 },
  { name: "Chi", score: 8.7 },
  { name: "Dũng", score: 6.8 },
  { name: "Hà", score: 9.5 },
  { name: "Hưng", score: 5.9 },
  { name: "Lan", score: 8.0 },
  { name: "Minh", score: 7.0 },
  { name: "Ngọc", score: 9.8 },
  { name: "Tú", score: 6.5 },
];
console.log(getTopStudents(students, 7.5));

// 4. Viết hàm calculateInterest
function calculateInterest(principal, rate, years) {
  let total = principal + (principal * rate * years) / 100;
  return total;
}
console.log(`Tổng số tiền gửi: ${calculateInterest(1000, 5, 2)}`);
