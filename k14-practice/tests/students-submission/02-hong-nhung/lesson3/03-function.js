//Yêu cầu 1
function multiply(a, b) {
    console.log(`a x b = ${a * b}`)
}
multiply(3, 4);
multiply(300, 14);
//Yêu cầu 2
function findMin(a, b, c) {
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    console.log(`Giá trị nhỏ nhất là: ${min}`);
}
findMin(19, 203, 18);
findMin(1000, 10, 100);
//Yêu cầu 3
function getTopStudents(students, threshold) {
    const result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name)
        }
    }
    console.log(`Những học sinh đạt điểm cao là: ${result}`)
};
let students = [
    { name: "Nhung", score: 100 },
    { name: "Lan", score: 80 },
    { name: "Mai", score: 40 },
    { name: "Tuấn", score: 50 },
    { name: "Thư", score: 95 },
    { name: "Dũng", score: 85 },
];
let threshold = 80;
getTopStudents(students, threshold);
// Yêu cầu 4
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    console.log(`Tổng gốc và lãi sau ${years} năm là: ${total}`)
}
calculateInterest(10000000, 10, 20);
