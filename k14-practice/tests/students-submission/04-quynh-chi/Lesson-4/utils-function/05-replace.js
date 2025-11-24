const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber.
let formattedPhoneNumber = phoneNumber.replace(" ", ".");
console.log(`Thay thế khoảng trắng trong phone: ${formattedPhoneNumber}`);
// em tìm hiểu thì dùng replace " " chỉ thay đổi khoảng trắng đầu tiên tìm được -> Nếu muốn thay thế toàn bộ thì dùng regex nếu vẫn dùng replace hoặc dùng replaceAll() (không cần regex). Hoặc dùng split và join

// 2. Thay "lỗi" bằng "bug" trong report.
let formattedReport = report.replace("lỗi", "bug");
console.log(`Thay thế "lỗi" trong report: ${formattedReport}`);

// 3. Thay "," bằng "." trong numbersStr.
let formattedNumbersStr = numbersStr.replaceAll(",", ".");
console.log(`Thay thế "," trong numbersStr: ${formattedNumbersStr}`);
