//4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
const scores = [85, 90, 78];
function myFunction(num) {
    if (num < 90) {
        return num + num * 0.1
    }
    if (num >= 90) {
        return num + num * 0.05
    }
}
let newScore = scores.map(myFunction)
console.log(newScore)

//Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
numbers = [1, 2, 3]
let newNum = numbers.map(num => num.toString())
console.log(newNum)

//4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.
let doubleNum = numbers.map(num => num * num)
console.log(doubleNum)
