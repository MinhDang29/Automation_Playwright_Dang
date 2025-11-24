const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com"

//Yeu cau 1
const lastName = fullName.substring(0, 6);
console.log(lastName);

//Yeu cau 2
const year = date.substring(0, 4);
console.log(year);

//Yeu cau 3
const tenMien = email.substring(email.indexOf("@") + 1);
console.log(tenMien);
