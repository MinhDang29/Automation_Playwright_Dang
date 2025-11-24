# for  ... in: dùng để lặp các thuộc tính trong 1 object
## cú pháp:
for (let i in objects) {
// code here
} 


let person = {
    name: 'Khoa',
    adress: {
        street: 'Ho Dac Di',
        city: 'Hanoi',
        country: 'Vietnam',
    },
}

for (let property in person) {
    console.log(property);
    console.log(person[property]);
};


* neu dung person.property > java hiểu là sẽ thêm 1 thuộc tính mới 



## forEach là 1 hàm được hỗ trợ để dùng cho mảng
cú pháp:
    arr.forEach((value, index) => {
        code here
})

- for in: dùng với object
- for Each: dùng với mảng

let fruits = ["chuoi", "cam", "tao"];
fruits.forEach((value, index) => {
    console.log(value, index);
})


- for ... of: dùng để lặp các giá trị trong mảng/string
- cú pháp:
for (let i in objects) {
code here
}


for (let fruit of fruits) {
    console.log(fruit);
}


- if ... else;
if (condition) {
execute code when = true
} else {
execute code when = false
}



let a = 6;
if (a / 2 === 0) {
    console.log("a la so chan");
} else {
    console.log("a la so le");
};

VD: Neu diem < 5: Hoc sinh yeu
5 <= diem < 8: Hoc sinh kha
 diem => 8: Hoc sinh gioi

let diem = 6;
if (diem < 5 && diem >= 0) {
    console.log("hoc sinh yeu");
} else if (diem >= 5 && diem < 8) {
    console.log("hoc sinh kha");
} else if (diem >= 8 && diem <= 10) {
    console.log("hoc sinh gioi");
} else {
    console.log("khong hop le");
};


## - Nhap vao 1 so, in ra so ay la thang may trong nam
## - switch case:
switch (tham so) {
    case condition1:
        // code condition1;
        break;
    case condition2:
        // code condition2;
        break;
    ...
    default:
        //code default;
        break;
}
 

let month = 12;
switch (month) {
    case 1:
        console.log("Thang 1");
        break;
    case 2:
        console.log("Thang 2");
        break;
    case 3:
        console.log("Thang 3");
        break;
    case 4:
        console.log("Thang 4");
        break;
    case 5:
        console.log("Thang 5");
        break;
    default:
        console.log("Thang khong hop le");
}

# if else check khoảng giá trị, switch case check chính xác 

let doubleEqual = ("5" == 5);
let tripleEqual = ("5" === 5);


### ==: so sánh lỏng lẻo
### ===: so sánh chặt chẽ, kiểm tra cả kiểu dữ liệu, giá trị (chuỗi 5 hay số 5)
for (let i = 0; i <= 10; i++) {
     if (i % 2 === 0) {
         console.log('${i} la so chan');
         continue;
    }
     console.log('${i} la so le');
 }


 - continue: bỏ qua vòng lặp hiện tại, tiếp tục sang 1 vòng mới
 - break: thoát ra trực tiếp vòng for


string util
- trim(): loại bỏ space ở đầu và cuối của string

- let str = "    H ello K14 class ";
- console.log(str);
- console.log(str.trim());

- toLowerCase() chuyển tất cả ký tự sang ký tự thường
console.log(str.toLowerCase());
- toUpperCase() chuyển tất cả ký tự sang ký tự viết hoa
console.log(str.toUpperCase());

- inClude() check xem chuỗi có chứa 1 chuỗi con hay không. return True/False
console.log(str.includes("Glass"));

- replace() thay thế 1 chuỗi con = 1 chuỗi khác trong chuỗi ban đầu
str = str.replace("K14", "K15");
console.log(str);

- split() chia chuỗi ban đầu thành các chuỗi con, dựa theo ký tự phân chia (delimeter)
let str1 = 'Hello ca nha yeu';
let words = str1.split(' ');
console.log(words);

- substring() trả về 1 phần của chuỗi, bắt đầu từ số index được chỉ định đến số index kết thúc
console.log(str1.substring(0, 9));
console.log(str1.substring(6));

- indexOf() trả về vị trí đầu tiên của chuỗi con trong chuỗi ban đầu, nếu không tìm thấy thì trả về giá trị -1
console.log(str1.indexOf("ca"));

Arr util
let arr = ["khoa", "ha", "sau", "sua"];



- map() giúp tạo ra 1 mảng mới = cách áp 1 hàm lên từng phần tử của mảng gốc

 let upperName = arr.map(nameValue => nameValue.toLocaleUpperCase());
 console.log(upperName);

- filter() tạo 1 mảng mới, chỉ bao gồm phần tử thỏa mãn điều kiện được chỉ định
 let arr1 = [1, 2, 3, 4, 5, 6, 7];
 let evenNumber = arr1.filter(num => num % 2 === 0);
 console.log(evenNumber);

- find() trả về giá trị phần tử đầu tiên mà thỏa mãn điều kiện trong mảng, nếu không có phần tử nào thỏa mãn thì sẽ trả về Undefined
 let evenNumber1 = arr1.find(num => num % 3 === 0);

- reduce() áp dụng từng phần tử trong mảng và trả về 1 kết quả duy nhất
 let sum = arr1.reduce((total, num) => total + num, 0);
 console.log(sum);

 let arr2 = [1, 2, 3, 4, 5, 6, 7];


- some() check có phần tử nào trong mảng thỏa mãn điều kiện không, có > return: true / không > return: false
 let checkNum = arr2.some(num => num > 6);
 console.log(checkNum);

 let arr3 = [2, 4, 6];

- every()check toàn bộ phần tử trong mảng xem có thỏa mãn điều kiện hay không, có > return: true / không > return: false
 let checkNum1 = arr3.every(num => num % 2 === 0);
 console.log(checkNum1);

- push() thêm 1 hoặc nhiều phần tử vào phía cuối mảng và trả về độ dài của mảng mới
 arr3.push(8,10);
 console.log(arr3); 
 console.log(arr3.push(8,10));

- shift() loại bỏ phần tử đầu tiên của mảng và trả về phần tử đấy
 console.log(arr3.shift());

- sort() sắp xếp các phần tử trong mảng theo thứ tự từ điển Unicode, chuyển từng phần tử về dạng chuỗi, sau đó mới sắp xếp
 console.log(arr.sort());


for (let i = 0; i < 5; i++) { 
  if (i === 2) { 
       continue; 
   } 
  console.log(i); 
}

## pop()
Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc
let arr = [1, 2, 3];
let last = arr.pop(); // arr = [1, 2], last = 3
console.log(arr); // [1, 2]
console.log(last); // 3

## unshift()
Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi
mảng gốc.
let arr = [1, 2, 3];
arr.unshift(0); // arr = [0, 1, 2, 3]
console.log(arr); // [0, 1, 2, 3]]

## trim()
Loại bỏ khoảng trắng ở đầu và cuối chuỗi, không thay đổi chuỗi gốc mà trả về chuỗi
mới..
- const str = " Hello World ";
- Để xoá khoảng trắng ở đầu sử dụng trimStart()
- Để xoá khoảng trắng ở cuối sử dụng trimEnd()

## for of
Bản chất một chuỗi cũng là một mảng. Ví dụ chuỗi "Playwright" bản chất là một mảng
gồm các kí tự ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi và lấy ra từng
phần tử một theo index
Ví dụ:
const str = "K9 2024";
for (let i = 0; i < str.length; i++){
console.log(str[i]);
}
// Kết quả in ra
K
9
2
0
2
4