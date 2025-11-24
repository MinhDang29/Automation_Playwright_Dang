/*
- if else
    if (condition) {
        // code to execute if condition is true
    } else {
        // code to execute if condition is false
    }

*/

// VD: in ra màn hình 1 ố là chẳn hay lẻ
let number = 5;
if (number % 2 == 0) {
    console.log(number + " là số chẵn");
} else {
    console.log(number + " là số lẻ");
}   

// vd: nếu diem <5 học sinh yếu
//5<= diem <8 học sinh khá
// diem >8 học sinh giỏi

let diem = 6;
if (diem < 5 && diem >=0) {
    console.log("Học sinh yếu");
} else if (diem >= 5 && diem < 8) {
    console.log("Học sinh khá");
} else if (diem > 8 && diem <=10) {
    console.log("Học sinh giỏi");
} else {
    console.log("Điểm không hợp lệ");
};  

/*
nhấp vào 1 số in ra số ấy là tháng mấy trongnamw
- switch case:
    switch (tham so) {
        case 1:
            console.log("Tháng 1");         
            break;
        case 2:
            console.log("Tháng 2");
            break;
        case 3:
            console.log("Tháng 3");
            break;
        case 4:
            console.log("Tháng 4");
            break;
        case 5:
            console.log("Tháng 5");
            break;
        case 6:
            console.log("Tháng 6");
            break;
        case 7:
            console.log("Tháng 7");
            break;
        case 8:
            console.log("Tháng 8");
            break;
        case 9:
            console.log("Tháng 9");
            break;
        case 10:
            console.log("Tháng 10");
            break;
        case 11:
            console.log("Tháng 11");
            break;
        case 12:
            console.log("Tháng 12");
            break;
        default:
            console.log("Không phải tháng trong năm");
            break;
    }
*/
let month = 12;
switch (month) {        
    case 1:
        console.log("Tháng 1");         
        break;
    case 2:
        console.log("Tháng 2");
        break;
    case 3:
        console.log("Tháng 3");
        break;
    case 4:
        console.log("Tháng 4");
        break;
    case 5:
        console.log("Tháng 5");
        break;
    case 6:
        console.log("Tháng 6");
        break;
    case 7:
        console.log("Tháng 7");
        break;
    case 8:
        console.log("Tháng 8");
        break;
    case 9:
        console.log("Tháng 9");
        break;
    case 10:
        console.log("Tháng 10");
        break;
    case 11:
        console.log("Tháng 11");
        break;
    case 12:
        console.log("Tháng 12");
        break;          
};