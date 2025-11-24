const phoneNumber = "0123 456 789"; 
const report = "Có một lỗi trong hệ thống."; 
const numbersStr = "1,234,567"; 

//Yeu cau 1
const newPhoneNum = phoneNumber.replace(" ", ".");
console.log(newPhoneNum); 

//Yeu cau 2
const newReport = report.replace("lỗi", "bug");
console.log(newReport);

//Yeu cau 3
const newNumStr = numbersStr.replace(",", ".");
console.log(newNumStr);