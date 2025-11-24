function helloWorld() {
    console.log("Hello world!"); 
}

helloWorld();
 
function studentName(student) {
    console.log(`Ten hoc vien: ${student}`); 
}

const student = "Hang";
studentName(student);

// Viet ham tinh tong 

// function calculate(a, b) {
//     const sum = a + b; 
//     const d = a * b;
//     return [sum, d]; 
// }

// let total = sum(5, 6);
// console.log(total)

const studentArr = ["Nhi", "Trinh", "Duc", "Phung", "Tai"]

for (let i = 0; i < studentArr.length; i++) {
    studentName(studentArr[i]);
}




