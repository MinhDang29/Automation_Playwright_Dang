const scores = [85, 90, 78];
// 1.1 Kiểm tra tất cả các giá trị trong scores có >70 khong
const allBigger = scores.every(num => num > 70)
if (allBigger) {
    console.log("Tất cả các giá trị trong scores đều lớn hơn 70 ")
}

// 1.2 Kiểm tra tất cả các giá trị trong age có >15 không
const ages = [18, 21, 16, 25];
const ageBigger = scores.every(num => num > 15)
if (ageBigger) {
    console.log("Tất cả các phần tử trong age đều lớn hơn 15")
}

//1.3 Kiễm tra tất cả các phần tử trong mảng có chiều dài >3 không
const words = ["apple", "banana", "cherry", "date"];
const lengWord = words.every(num => num.length > 3)
if (lengWord) {
    console.log("Tất cả các phần tử trong word đều có độ dài >3")
}