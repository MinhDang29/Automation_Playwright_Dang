let doubleEqual = ("5" == 5);  // so sánh lỏng lẻo, convert về hiểu dữ liệu lớn hơn rồi so sánh giá trị
let tripleEqual = ("5" === 5);  // so sánh cả kiểu dữ liệu và giá trị

console.log(doubleEqual); // true
console.log(tripleEqual); // false