const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

//chia name thành mảng các từ
let nameArr= name.split(' ')
console.log (nameArr)

///chia email thành mảng các email
let mailArr= emails.split(',')
console.log (mailArr)

//chia date thành ngày, tháng, năm
let datelArr= date.split('-')
console.log (datelArr)