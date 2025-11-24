const name = " Nguyễn Văn A ";
const userInput = " 12345 ";
const email = " example@gmail.com ";

// 1. Loại bỏ khoảng trắng đầu và cuối của name.
let trimName = name.trim();
console.log(`Name sau khi loại bỏ khoảng trắng: "${trimName}"`);

// 2. Loại bỏ khoảng trắng của userInput.
let trimUserInput = userInput.trim();
console.log(`User input sau khi loại bỏ khoảng trắng: "${trimUserInput}"`);

// 3. Loại bỏ khoảng trắng đầu của email. 
let trimEmail = email.trimStart();  
console.log(`Email sau khi loại bỏ khoảng trắng đầu: "${trimEmail}"`);