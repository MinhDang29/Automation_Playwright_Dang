// File utils-function/05-relace.js
// Data:
const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber.
const phone= phoneNumber.replace(" ", ".").replace(" ", ".");
console.log("Sau khi replace by '.' thi phone number la: ", phone);

// 2. Thay "lỗi" bằng "bug" trong report.
const reportBug = report.replace("lỗi", "bug");
console.log(reportBug);

// 3. Thay "," bằng "." trong numbersStr.

const numberStr = numbersStr.replace(",", ".").replace(",", ".");
console.log("Sau khi replace by '.' thi numbersStr la: ", numberStr);
