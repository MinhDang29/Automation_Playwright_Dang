function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();

//const student = "dang";
function studentInfo(student) 
    {
        console.log(`Tên học viên: ${student}`);
    }
const student = "dang";
studentInfo(student);

//viết hàm tính tổng

function sum(a, b) {
    const sum = a + b;
    //const d= a - b;
    return sum;
    return [sum ,d] ;// trả về nhiều giá trị
}
let total = sum(5, 10);
console.log(total);

const studentArr = ["dang", "tuan", "anh"];

for (let i = 0; i < studentArr.length; i++) {
    studentInfo(studentArr[i]);
};
