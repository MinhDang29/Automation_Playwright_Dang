/*
- for in sẽ dùng  để lặp các thuộc tính trong object

- Cú pháp
for (let i in object) {
    // code block to be executed
}
*/
let student = {
    "nameStudent": "Dang",
    age: 25,
    "address": "Dong Nai",
    "job": {
        "jobTitle": "QC Tester",
        "jobLocation": "TP HCM"
    }
};


for (let property in student) {
    console.log(property);
    console.log(student[property]); // undefined
};


/*
- forEach là 1 hàm được hỗ trợ ddeerdungf cho mảng
- Cú pháp
 arr.forEach((value, index) => {
    // code block to be executed
 });

*/

let fruits = ["Apple", "Banana", "Mango", "Orange"];

  fruits.forEach((fruit, index) => {
    console.log("Index:", index, "Fruit:", fruit);
});


/*
- for of sẽ dùng để lặp qua các giá trị trong mảng
- Cú pháp
for (let value of array) {
    // code block to be executed
}
*/
let string1  = "Banana";
for (let char of string1) {
    console.log(char);
};

for (let fruit of fruits) {
    console.log(fruit);
}   