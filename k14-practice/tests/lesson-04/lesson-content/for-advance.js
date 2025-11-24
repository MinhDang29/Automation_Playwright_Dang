// /*
// - for ... in se dung de lap cac thuoc tinh trong 1 object
// - Cu phap: 
//     for (let i in objects) {
//         // code here
//     }
// */

// let student = {
//     "name student": "Quang", 
//     "age": 24,
//     "address": "Ha Noi",
//     "job": {
//         "job_title": "QE", 
//         "companyAddress": "Cau Giay"
//     }
// };

// for (let property in student) {
//     console.log(property);
//     console.log(student[property]);
// };


/*
- forEach la 1 ham duoc ho tro de dung cho mang
- Cu phap: 
    arr.forEach((value, index) => {
        // code here
    })
*/

let fruits = ["banana", "orange", "apple"];
    // fruits.forEach((value) => {
    //     console.log(value); 
    // });

/*
- for ... of se dung de lap cac gia tri trong mang/string
- Cu phap: 
    for (let i in objects) {
        // code here
    }
*/
let string1 = "banana"
for (let char of string1) {
    console.log(char);
}
