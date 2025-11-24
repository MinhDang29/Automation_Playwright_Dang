const numbers = [1, 2, 3]; 
const str = "Playwright"; 
const student = { "name": "Alex", "age": 10, "salary": 20 }; const arr = [1, 2, 3, 4, 3, 55, 23]; 
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//2.1 In lần lượt từng ký tự của str 

for (let i = 0; i < str.length; i++){ 
 console.log(str[i]); 
}

//2.2 Tạo mảng đảo ngược từ str 

const charArray = str.split('');
charArray.reverse();
const reversedStr = charArray;
console.log(`Chuỗi đảo ngược: "${reversedStr}"`);

//2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr 



const firstIndex = arr.indexOf(3);
const lastIndex = arr.lastIndexOf(3);

console.log(`Vị trí đầu tiên của số 3 là: ${firstIndex}`);
console.log(`Vị trí cuối cùng của số 3 là: ${lastIndex}`); 

//2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr 
