const name = "Dang";
const age = 25;
const address = "Dong Nai";

const student = {
    "nameStudent": "Dang",
    age: 25,
    "address": "Dong Nai",
    "job": {
        "jobTitle": "QC Tester",
        "jobLocation": "TP HCM"
    }
};
console.log(student)
student.age = 26; // cập nhật giá trị
student["address"] = "Binh Duong"; // cập nhật giá trị
console.log(student);

const jobLocation = student.job.jobLocation; // truy xuất giá trị

//const// không  //được thêm tên biến còn let thì thêm được
