const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

//1. Thay khoảng trắng bằng "." trong phoneNumber.
const changePhone = phoneNumber.replace(/ /g, ".");
console.log(changePhone);

//2. Thay "lỗi" bằng "bug" trong report.
const changeReport = report.replace("lỗi", "bug");
console.log(changeReport);

//3. Thay "," bằng "." trong numbersStr.
const changeNumberStr = numbersStr.replace(/,/g, ".");
console.log(changeNumberStr);