// 1. Khoi dong tau vu tru
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ Trụ K14";
const crew = ["Andy", "Quang", "Tai", "Nhung", "Nhi", "Chi"];
console.log("Ket qua in ra BT1: Khoi dong tau vu tru");

// 1.1 Cách làm 1: Truyền mảng trực tiếp vào chuỗi cho sẵn
function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission} !`;
}
console.log(launchShip(crew));

// 1.2 Cách làm 2 voi split() và vòng lặp For nâng cao:
function launchShip1(crew) {
    let listStudent = "";
    for (let member of crew) {
        listStudent += member + ", ";
    }
    if (listStudent.length > 0) {
        let last = listStudent.split("");
        last.pop();
        last.pop();
        listStudent = "";
        for (let char of last) {
            listStudent += char;
        }
    }
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${listStudent} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission} !`;
}
console.log(launchShip1(crew));

// 2. Du hanh den hanh tinh bi an
let speed = 1000;
let time = 24;
console.log("\nKet qua in ra BT2: Du hanh den hanh tinh bi an");

// 2.1 Cach lam 1: Lưu kết quả vào biến và sử dụng biến để in ra kết quả
function calculateDistance(speed, time) {

    let distance = speed * time; // km
    return distance;
}
distance = calculateDistance(speed, time);
console.log("- Distance: " + distance + " km");

// 2.2 Cach lam 2: Gọi hàm trực tiếp trong console.log và vẫn sử dụng biến
function calculateDistance(speed, time) {
    return speed * time;
}
console.log("- Distance: " + calculateDistance(speed, time) + " km");

// 2.3 Cach lam 3: Gọi hàm trực tiếp trong console.log với giá trị cụ thể
function calculateDistance(speed, time) {
    return speed * time;
}
console.log("- Distance: " + calculateDistance(1000, 24) + " km");

// 3. Hanh tinh ky la
console.log("\nKet qua in ra BT3: Hanh trinh ky la");
// 3.1 Cach lam 1: Lưu kết quả vào biến và gọi hàm với giá trị cụ thể
function convertTimeToHex(time) {
    let hexadecimalNumber = time.toString(16);
    return hexadecimalNumber;
}
console.log("3.1 Convert time to hex: ", convertTimeToHex(120));

// 3.2 Cach lam 2: Gọi hàm trực tiếp trong console.log với giá trị cụ thể
function convertTimeToHex(time) {
    return time.toString(16);
}
console.log("3.2 Convert time to hex: ", convertTimeToHex(120));

// 4. Kham pha kho bau
console.log("\nKet qua in ra BT4: Kham pha kho bau");
// 4.1 In ra decryptCode bằng vòng lặp For thường với điều kiện if...else:
function decryptCode(code) {
    let arr = "";
    for (let i = 0; i < code.length; i++) {
        if (code[i] >= 'a' && code[i] <= 'z') {
            arr += code[i].toUpperCase();
        } else if (code[i] >= 'A' && code[i] <= 'Z') {
            arr += code[i].toLowerCase();
        } else {
            arr += code[i];
        }
    }
    return arr;
}
console.log("4. decryptCode voi vong lap For thuong: ", decryptCode("K14 Challenge"));

// 4.2 In ra decryptCode bằng vòng lặp For nâng cao với điều kiện if...else:
function decryptCode1(code) {
    let arr = "";
    for (let char of code) {
        if (char >= 'a' && char <= 'z') {
            arr += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            arr += char.toLowerCase();
        } else {
            arr += char;
        }
    }
    return arr;
}
console.log("4. decryptCode voi vong lap For nang cao: ", decryptCode1("K14 Challenge"));

// 4.3 In ra decryptCode bằng vòng lặp For nâng cao và câu điều kiện if thường với continue:
function decryptCode2(code) {
    let arr = "";
    for (let char of code) {
        if (char >= 'a' && char <= 'z') {
            arr += char.toUpperCase();
            continue;
        }
        if (char >= 'A' && char <= 'Z') {
            arr += char.toLowerCase();
            continue;
        }
        arr += char;
    }
    return arr;
}
console.log("4. decryptCode voi vong lap For nang cao voi continue: ", decryptCode2("K14 Challenge"));

// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("\nChuẩn bị trở về Trái Đất!");
}
returnToEarth();

