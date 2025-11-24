const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 2.1 Tìm vị trí "a" trong name.
let indexOfAInName = name.indexOf("a");
console.log(`Vị trí "a" trong name: ${indexOfAInName}`);

// 2.2 Tìm vị trí "@" trong email.
let indexOfAtInEmail = email.indexOf("@");
console.log(`Vị trí "@" trong email: ${indexOfAtInEmail}`);

// 2.3 Tìm vị trí "JavaScript" trong description.
let indexOfJavaScriptInDescription = description.indexOf("JavaScript");
console.log(
  `Vị trí "JavaScript" trong description: ${indexOfJavaScriptInDescription}`
);
