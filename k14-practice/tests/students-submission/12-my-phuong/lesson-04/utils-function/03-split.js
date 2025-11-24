// Thêm vào file utils-function/03-split.js và thêm vào lời giải cho các bài sau:
// Data:
const fullName = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Chia name thành mảng các từ (dùng khoảng trắng).
const wordName = fullName.split(" ");
console.log("Ket qua dung split cho full name: ", wordName);

// 2. Chia emails thành mảng các email (dùng dấu phẩy).
const email = emails.split(",");
console.log("Ket qua dung split cho email: ", email);

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
const dateArr = date.split("-");
console.log("Ket qua dung split cho date: ", dateArr)