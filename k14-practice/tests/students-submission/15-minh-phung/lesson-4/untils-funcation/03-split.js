const name1 = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

//1 Chia name thành mảng các từ (dùng khoảng trắng).
const newArr = name1.split(" ");
console.log(newArr);
//2. Chia emails thành mảng các email (dùng dấu phẩy).
const newEmail = emails.split(",");
console.log(newEmail);
//3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
const newDate = date.split("-");
console.log(newDate);