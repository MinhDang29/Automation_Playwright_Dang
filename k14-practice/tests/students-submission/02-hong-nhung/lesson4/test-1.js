//1. Khoi dong tau vu tru K14
let departurePlanet = "Trái Đất";
let mission = "Khám phá vũ trụ K14";
let crew = ["Nhung", "Nhi", "Hồng", "Tài", "Quang"];
function launchShip(crew, mission) {
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}`)
};
launchShip(crew, mission);
//2. Du hanh den hanh tinh bi an
function calculateDistance(speed, time) {
    const distance = speed * time;
    console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km`)
}
let speed = 1000;
let time = 24;
calculateDistance(speed, time);
//3. Hanh tinh ky la
function convertTimeToHex(time) {
    const hexadecimalTime = time.toString(16);
    console.log(`${time} giây trên trái Đất bằng ${hexadecimalTime} giây trên hành tinh bí ẩn`)
}
let decimalTime = 120;
convertTimeToHex(decimalTime);
//4. Kham pha kho bau
//Cach 1
function decryptCode(code) {
    const codeSplit = code.split('');
    const newCode = codeSplit.map((item) => {
        if (item === item.toUpperCase()) {
            return item.toLowerCase();
        } else {
            return item.toUpperCase();
        }
    })
    return newCode.join('');
}

//Cach 2
function decryptCode(code) {
    const newCode = [];
    const codeSplit = code.split('');
    codeSplit.forEach((char) => {
        if (char === char.toUpperCase()) {
            newCode.push(char.toLowerCase());
        } else {
            newCode.push(char.toUpperCase());
        }
    })
    return newCode.join('');
}

//Cach 3
function decryptCode(code) {
    const codeSplit = code.split('');
    codeSplit.forEach((char, index) => {
        if (char === char.toUpperCase()) {
            codeSplit[index] = char.toLowerCase();
        } else {
            codeSplit[index] = char.toUpperCase();
        }
    })
    return codeSplit.join('');
}

//Cach 4
function decryptCode(code) {
    const newCode = [];
    const codeSplit = code.split('');
    for (let i = 0; i < codeSplit.length; i++) {
        let char = codeSplit[i];
        if (char === char.toUpperCase()) {
            newCode.push(char.toLowerCase());
        } else {
            newCode.push(char.toUpperCase());
        }
    }
    return newCode.join('');
};
//Cach 5
function decryptCode(code) {
    let newCode = "";
    for (const char of code) {
        if (char >= 'a' && char <= 'z') {
            newCode += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            newCode += char.toLowerCase();
        } else {
            newCode += char;
        }
    }

    return newCode;
}

let code = "K14 Challenge";
console.log(`Mật mã là : ${decryptCode(code)}`);

//5. Tro ve Trai Dat
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất")
}
returnToEarth();
