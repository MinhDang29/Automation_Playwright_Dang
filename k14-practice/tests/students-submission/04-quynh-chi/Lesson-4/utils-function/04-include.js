const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 1.1 Kiểm tra "Nguyễn" trong name.
let isNameContainsNguyen = name.includes("Nguyễn");
console.log(`Kiểm tra "Nguyễn" trong name: ${isNameContainsNguyen}`);

// 1.2 Kiểm tra "@" trong email.
let isEmailContainsAt = email.includes("@");
console.log(`Kiểm tra "@" trong email: ${isEmailContainsAt}`);

// 1.3 Kiểm tra "Pro" trong productName.
let isProductNameContainsPro = productName.includes("Pro");
console.log(`Kiểm tra "Pro" trong productName: ${isProductNameContainsPro}`);
