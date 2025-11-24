const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";

//1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6).

const lastName = fullName.substring(0, 6);
console.log(lastName);

//2. Trích xuất năm từ date (4 ký tự đầu).

const year = date.substring(0, 4);
console.log(year);

//3. Trích xuất tên miền từ email (từ sau "@").

const domain = email.substring(email.indexOf("@") + 1);
console.log(domain);
