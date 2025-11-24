const name4 = " Nguyễn Văn A ";
const userInput = " 12345 ";
const email = " example@gmail.com ";

//1 Loại bỏ khoảng trắng đầu và cuối của name
const removeSpace = name4.trim();
console.log(removeSpace);

//2 Loại bỏ khoảng trắng của userinput
const removeSpace2 = userInput.trim();
console.log(removeSpace2);

//3 Loại bỏ khoảng trắng của đầu email
const removeSpace3 = email.trimStart();
console.log(removeSpace3);