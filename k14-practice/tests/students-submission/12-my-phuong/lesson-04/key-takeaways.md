# Javascript Advance Concept (Lesson 4)

## 1. Phạm vi của biến var và let

### 1.1 Phạm vi của biến:
- Global
- Scope: {}

Hoisting
- Var: có thể truy cập được vào biến trước khi được khai báo: Giá trị undefined
- Let: KHÔNG thể truy cập trước khi khai báo

Ví dụ:

```
for (var i=0; i<5; i++)
{
    console.log(i);
};
console.log(i);

Kết quả in ra:  0
                1
                2
                3
                4
                5

```

```
for (let i=0; i<5; i++)
{
    console.log(i);
};
console.log(i);

Kết quả in ra: i is not defined

```
### 1.2 Điều kiện nâng cao

#### 1.2.1 Điều kiện if... else

```
if (condition){
    //execute when code = true
} else {
        //execute when code = true
}

```

```
Ví dụ: In ra màn hình 1 số là chẵn hay lẻ

let number = 8;
if (number % 2 ==0)
{
    console.log(`{number} la so chan`)
} else {
    console.log(`{number} la so le`)
}

```

#### 1.2.2 Điều kiện if ... else if ... if

```
if (condition){
    //execute when code = true
} else if{
        //execute when code = true
} else {
        //execute when code = true
}

```

```
Ví dụ: 
- Nếu điểm <5: Học sinh yếu
- 5<= điểm <8: Học sinh khá 
- điểm >=8: Học sinh giỏi

let score =  8;
if (score <5 && score >=0){

    console.log("Hoc sinh yeu")

} else if (score >=5 && score <8){

    console.log("Hoc sinh kha")

} else if (score >=8 && score <=10) {

    console.log("Hoc sinh gioi")

} else {

    console.log("Khong hop le")

};

```

#### 1.2.3 Điều kiện switch ... case default

```
switch (tham so) {
    case cond1:
        // code cond1;
        break;
    case cond2:
        // code cond2;
        break;      
    case cond3:
        // code cond3;
        break;            
    ...
    default:
        // code default;
        break;
}
```

```
Ví dụ: Nhập vào 1 số và in ra số đó là tháng mấy trong năm

let month = 10
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
        console.log("Thang 10");
        break;
    default:
        console.log ("Thang khong hop le");
        break;                                
}

```

### 1.3 So sánh == và !=

- So sánh kiểu “lỏng lẻo”
- Convert giá trị về kiểu “lớn hơn”

```
Ví dụ:

let doubleEqual = ("5" == 5);
console.log (doubleEqual);

Kết quả in ra: true
```

### 1.4 So sánh tuyệt đối ===, !==:

```
Ví dụ:

let tripleEqual = ("5" === 5);
console.log (tripleEqual);

Kết quả in ra: false
```

## 1.5 Vòng lặp nâng cao:
### 1.5.1 Vòng lặp for...in

- for...in: sẽ dùng để lặp các thuộc tính trong 1 object
- Cú pháp:
```
    for (let i in objects) {
        //code here
    }
```
- Ví dụ:

```
let student = {
    "name" : "Andy",
    "age": 18,
    "address": "HCM",
    "job": {
        "title" : "QC"
        "companyAddress": "Tan Binh"
    }
}

for (let property in student) {
    console.log(property);
};

Kết quả in ra:  name
                age
                address
                job

```

### 1.5.2 Vòng lặp forEach

- forEach là 1 hàm được hỗ trợ để dùng cho mảng
- Cú pháp:
```
    array.forEach((value, index) => {
        //code here
    })
```
- Ví dụ:
```
let fruits = ["banana", "orange", "apple"];
fruits.forEach((value, index) =>{
    console.log(value, index);
})

Kết quả in ra:
banana 0
orange 1
apple 2

fruits.forEach((value) =>{
    console.log(value);
})

Kết quả in ra:
banana
orange
apple

```

### 1.5.3 Vòng lặp for... of

- for ... of sẽ dùng để lặp các giá trị trong mảng/string
+ Đối với array
+ Đối với object

- Cú pháp:
```
for (let i of objects) {
    // code here
}
```

- Ví dụ:

```
Ví dụ 1: 

let fruits = ["banana", "orange", "apple"];

for (let fruit of fruits) {
    console.log(fruit);
}

Kết quả in ra:
banana
orange
apple

Ví dụ 2: 

let string1 = "banana"
for (let char of string1) {
    console.log(char);
}

Kết quả in ra:
b
a
n
a
n
a

```

## 1.6 Vòng lặp nâng cao: break and continue

Ví dụ:

```
for (let i=0; i<=10; i++) {
    if ((i%2) === 0) {
        console.log (`{i} la so chan`);
        continue;
    }
    console.log(`{i} la so le`);
}

for (let i=0; i<=10; i++) {
    if ((i%2) === 0) {
        console.log (`{i} la so chan`);
        break;
    }
    console.log(`{i} la so le`);
}
```

# 2. Utils funtions

Util = tiện ích
- Util function = các hàm tiện ích có sẵn
- Giúp xử lý code nhanh gọn hơn
- Util:
    - String util
    - Array util

## 2.1 String utils function

- trim() : loại bỏ space ở đầu và cuối của chuỗi string

```
let str = "  Hello K14 class  ";
console.log(str.trim());

Kết quả in ra không có khoảng trắng đầu cuối:
Hello K14 class

```
- toLowerCase(): chuyển tất cả ký tự sang ký tự thường

```
let str = "Hello K14 class";
console.log(str.toLowerCase());

Kết quả in ra: hello k14 class

```
- toUpperCase(): chuyển tất cả ký tự sang ký tự in hoa

```
let str = "Hello K14 class";
console.log(str.toLowerCase());

Kết quả in ra: HELLO K14 CLASS
```
- includes(): kiểm tra xem chuỗi có chứa 1 chuỗi con bên trong hay không. Return True - False

```
let str = "Hello K14 class";
console.log(str.includes("class"));

Kết quả in ra: true

```
- replace(): thay thế 1 chuỗi con bằng một chuỗi khác

```
let str = "Hello K14 class";
str= str.replace("K14", "K15");
console.log(str);

Kết quả in ra: Hello K15 class

```
- split(): chia chuỗi ban đầu thành các chuỗi con (1 mảng), dựa theo ksy tự phân chia (delimiter)

```
let str = "Hello K14 class";
let words = str.split(" ")
console.log (words); 

Kết quả in ra: ["Hello", "K15", "class"]

```
- substring(): trả về 1 phần của chuỗi, bắt đầu từ số index được chỉ định đến số index kết thúc

```
let str = "Hello K14 class";
console.log(str.substring(0,5));

Kết quả in ra: Hello

let str = "Hello K14 class";
console.log(str.substring(6));

Kết quả in ra: K14 class

```
- indexOf(): trả về vị trí đầu tiên của chuỗi con trong chuỗi ban đầu, nếu không tìm thấy thì trả về -1.

```
let str = "Hello K14 class";
console.log(str.indexOf("K14"));

Kết quả in ra: 6

```

## 2.2 Array utils function

- map(): tạo ra 1 mảng mới bằng cách áp 1 hàm lên từng phần tử của mảng gốc

```
let arr = ["Andy", "Miku", "Yuki", "Hana", "Sakura"];
let upperName = arr.map(nameValue => nameValue.toUpperCase());
console.log(upperName);

Kết quả in ra: [ "ANDY", "MIKU", "YUKI", "HANA", "SAKURA" ];

```
- filter(): tạo 1 mảng mới, chỉ bao gồm phần tử thoả mãn điều kiện được chỉ định

```
let arr = [1,2,3,4,5];
let evenNumber = arr.filter(num => num % 2 ===0);
console.log(evenNumber);

Kết quả in ra: 2, 4


```
- find(): trả về giá trị phần tử đầu tiên mà thoả mãn điều kiện trong mảng, nếu không có phần tử thoả mãn thì trả về undefined

```
let arr = [1,"2",3,4,5];
let evenNumber = arr.find(num => num % 2 ===0);
console.log(evenNumber);

Kết quả in ra: 2

```
- reduce(): áp dụng từng phần tử trong mảng và trả về 1 kết quả duy nhất

```
let arr = [1,2,3,4,5];
let sum = arr.reduce((total,num) => total + num, 0);
console.log(sum);

Kết quả in ra: 15

```
- some(): check có tồn tại phần tử nảo trong mảng thoả mãn điều kiện không, có trả về True, không thì trả về False

```
let arr = [1,2,3,4,5];
let checkNum= arr.some(num => num > 6);
console.log(checkNum);

Kết quả in ra: false
```
- every(): check toàn bộ phần tử trong mảng thoả mãn điều kiện không, có trả về True, không thì trả về False

```
let arr = [2,4,6,8,10];
let checkNum= arr.every(num => num % 2 === 0);
console.log(checkNum);

Kết quả in ra: true

```
- push(): thêm 1 hoặc nhiều phần tử vào phía cuối mảng và trả về độ dài của mảng mới

```
let arr = [2,4,6,8,10];
console.log(arr.push(1,3));
console.log(arr);

Kết quả trả về: 
7
[
    2, 4, 6, 8, 10, 1,3
]

```
- shift(): loại bỏ phần tử đầu tiên của mảng và trả về phần tử đấy, có thể thay đổi mảng

```
let arr = [2,4,6,8,10];
console.log(arr.shift());
console.log(arr);

Kết quả in ra: 
2
[4,6,8,10]

```
- sort(): sắp xếp các phần tử trong mảng theo từ điển Unicode, chuyển từ phần tử về dạng chuỗi, sau đó so sánh chuỗi rồi mới sắp xếp

```
let arr = [4,2,6,8,5];
console.log(arr.sort());

Kết quả in ra:
[2,4,5,6,8]

```

# 3. Lambda & Anonymous
## 3.1 Lambda function (Arrow function)

- Một cách ngắn gọn viết hàm trong JS.
- Sử dụng dấu => thay vì từ khoá function
- Cú pháp:
```
(parameters) => {
    // Code here
}
```

## 3.2 Anonymmous function

- Hàm không có tên
- Thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác
- Cú pháp:
```
function (parameters) {
    // Code here
}
```