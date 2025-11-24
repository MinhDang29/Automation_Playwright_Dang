//1
function multiply(a, b) {
    let mulvalue = a * b
    console.log(mulvalue);
}
multiply(10, 5);

//2 
function findMin(a, b, c) {
    let numArr = []
    numArr.push(a, b, c)
    let min = a
    for (let i = 0; i <= numArr.length; i++) {
        if (min > numArr[i]) {
            min = numArr[i]
        }
    }
    console.log("Bài 2: Giá trị nhỏ nhất trong chuỗi là", min)
}
findMin(10, 5, 7);

//3
function getTopStudents(studentsArr, threshold) {
    for (let i = 0; i < studentsArr.length; i++) {
        if (studentsArr[i].score >= threshold) {
            console.log("Bài 3: Top Students: ", studentsArr[i]);
        }
    }
}
const studentsArr = [
    { name: "Phuong", score: 8 },
    { name: "Phuong2", score: 4 },
    { name: "Phuong3", score: 7 }]
getTopStudents(studentsArr, 7)

//4 
function calculateInterest(principal, rate, years) {
    let total = principal + ((principal * rate * years) / 100)
    return total
}
let principal = 500, rate = 5, years = 5
let total = calculateInterest(principal, rate, years)
console.log("Bài 4: Tổng gốc + lãi sau", years + " năm:", total)