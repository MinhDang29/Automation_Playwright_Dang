const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Chia name thành mảng các từ (dùng khoảng trắng).
let nameArray = name.split(" ");
console.log(`Mảng tên: ${nameArray}`);

// 2. Chia emails thành mảng các email (dùng dấu phẩy).
let emailArray = emails.split(",");
console.log(`Mảng email: ${emailArray}`);

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
let dateArray = date.split("-");
console.log(`Mảng ngày tháng năm: ${dateArray}`);
