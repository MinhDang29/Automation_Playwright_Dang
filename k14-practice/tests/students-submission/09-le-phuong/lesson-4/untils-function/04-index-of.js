const name = "Nguyễn Văn A";
const emails = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

//2.1 Tìm vị trí "a" trong name.
let nameArr= name.split(' ')
console.log(nameArr.indexOf("A"))

//2.2 Tìm vị trí "@" trong email.
let mailArr= emails.split("")
console.log(mailArr.indexOf("@"))


//2.3 Tìm vị trí "JavaScript" trong description.
let desArr= description.split(' ')
console.log(desArr.indexOf("JavaScript"))