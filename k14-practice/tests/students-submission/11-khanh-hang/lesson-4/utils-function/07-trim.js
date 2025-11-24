const name = " Nguyễn Văn A "; 
const userInput = " 12345 "; 
const email = " example@gmail.com ";

//1. Loại bỏ khoảng trắng đầu và cuối của name.

const newName = name.trim();
console.log(name);

//2. Loại bỏ khoảng trắng của userInput. 

const newUserInput = userInput.trim();
console.log(newUserInput);

//3. Loại bỏ khoảng trắng đầu của email.

const newEmail = email.trimStart();
console.log(newEmail);