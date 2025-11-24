let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K14";
let crew = ['Phát Tài', 'Hồng Nhung', 'Dung Nhi', 'Quỳnh Chi', 'Hà Khoa', 'Mạnh Sỹ', 'Ngọc Tân', 'Hồng Trinh', 'Lê Thị Phượng', 'Phương Trân', 'Trí Đức', 'Hằng', 'Mỹ Phương', 'Duy Quang', 'Hồng Hạnh', 'Sơn Thịnh', 'Minh Phụng', 'Ngọc Quang'];
function launchShip() {
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);
    return launchShip;
}
function calculateDistance(speed, time) {
    let distance = speed * time;
    console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km`);
    return distance;
}

function convertTimeToHex(decimalNumber) {
    let hexadecimalNumber = decimalNumber.toString(16);
    console.log(`Thời gian theo hệ lục phân là ${hexadecimalNumber}`);
    return hexadecimalNumber
}
// Cách 1
// function decryptCode(code) {
//     let decrypted = '';

//     for (let i = 0; i < code.length; i++) {
//         let char = code[i];

//         if (char >= 'a' && char <= 'z') {
//             decrypted = decrypted + char.toUpperCase();
//         }
//         else if (char >= 'A' && char <= 'Z') {
//             decrypted = decrypted + char.toLowerCase();
//         } else {
//             decrypted = decrypted + char;
//         }
//     }
//     console.log(decrypted);
//     return decrypted;
// }

//Cách 2
function decryptCode(code) {
    let decrypted = '';

    for (let i = 0; i < code.length; i++) {
        let char = code[i];

        if (char === char.toLowerCase()) {
            decrypted = decrypted + char.toUpperCase();
        }
        else if (char === char.toUpperCase()) {
            decrypted = decrypted + char.toLowerCase();
        } else {
            decrypted = decrypted + char;
        }
    }
    console.log(decrypted);
    return decrypted;
}

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!")
}
launchShip();
calculateDistance(1000, 24);
convertTimeToHex(120);
decryptCode('K14 Challenge')
returnToEarth();
