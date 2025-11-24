const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

//1. Chia name thành mảng các từ (dùng khoảng trắng).

const words = name.split(" ");
console.log(words);

//2. Chia emails thành mảng các email (dùng dấu phẩy).

const email = emails.split(",");
console.log(email);

//3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).

const dateArr = date.split("-");
console.log(dateArr);
