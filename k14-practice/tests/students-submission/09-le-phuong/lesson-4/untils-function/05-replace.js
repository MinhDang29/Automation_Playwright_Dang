const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";
//1. Thay khoảng trắng bằng "." trong phoneNumber.
const repPhone=phoneNumber.replaceAll(" ",".")
console.log(repPhone)

//2. Thay "lỗi" bằng "bug" trong report.
const repRe=report.replace("lỗi","bug")
console.log(repRe)

//3. Thay "," bằng "." trong numbersStr.
const repnumbersStr=numbersStr.replaceAll(",",".")
console.log(repnumbersStr)