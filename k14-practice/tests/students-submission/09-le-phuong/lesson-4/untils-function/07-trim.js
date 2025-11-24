const name = " Nguyễn Văn A ";
const userInput = " 12345 ";
const email = " example@gmail.com "

//Loại bỏ khoảng trắng đầu và cuối name
let nameStart = name.trimStart(" ")
let nameEnd = nameStart.trimEnd(" ")
console.log(nameEnd)

//Loai bỏ khoảng trắng của input
console.log(userInput.trim(" "))

//Loại bỏ khoảng trắng đầu của email
console.log(email.trimStart(" "))

