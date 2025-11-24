1.
let departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K14";
const crew = ["Phát Tài", "Hồng Nhung", "Dung Nhi", "Quỳnh Chi", "Hà Khoa", "Mạnh Sỹ", "Ngọc Tân", "Hồng Trinh", "Lê Thị Phượng", "Phương Trân", "Trí Đức", "Hằng", "Mỹ Phương", "Duy Quang", "Hồng Hạnh", "Sơn Thịnh", "Minh Phụng", "Ngọc Quang"];

launchShip(crew);

function launchShip(crew) {
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`)
}

2.
function calculateDistance(speed, time) {
    const distance = speed * time;
    return distance;
}

let total = calculateDistance(10000, 24);
console.log(total + `km/h`);

3.
function convertTimetoHex(time) {
    const hex = time.toString(16);
    return hex;
}

let hexTime = convertTimetoHex(120);
console.log(hexTime + ` giây`); 

4.
function decryptCode(code) {
    let lowerCode = code.toLowerCase();
    let upperCode = code.toUpperCase();
    console.log(lowerCode);
    console.log(upperCode);
}

let newCode = decryptCode("K14 Challenge");

5.
function returnToEarth ()  {
    console.log("Chuẩn bị trờ về Trái Đất!");
}

returnToEarth();