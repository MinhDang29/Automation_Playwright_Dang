// /*
// - if ... else: 
//     if (condition) {
//         // execute code when = true
//     } else {
//         // execute code when = true

//     }
// */

// //VD: In ra man hinh 1 so la chan hay le
// let a = 6;

// if (a / 2 === 0) {
//     console.log("a la so chan");
// } else {
//     console.log("a la so le");
// };


// // VD: Neu diem < 5: Hoc sinh yeu
// // 5 <= diem < 8: Hoc sinh kha
// // diem => 8: Hoc sinh gioi

// let diem = -2;
// if (diem < 5 && diem >= 0) {
//     console.log("Hoc sinh yeu")
// } else if (diem >= 5 && diem < 8) {
//     console.log("Hoc sinh kha");
// } else if (diem >= 8 && diem <= 10) {
//     console.log("Hoc sinh gioi");
// } else {
//     console.log("Khong hop le");
// };


/* 
- Nhap vao 1 so, in ra so ay la thang may trong nam
- switch case: 
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
        .....
        default: 
            //code default; 
            break; 
    }
*/
let month = -2;
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
        console.log("Thang 5");
        break;
    case 5:
        console.log("Thang 5");
        break;
    default: 
        console.log("Thang ko hop le");
}