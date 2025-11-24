// 1. Khởi động Tàu Vũ trụ K14

const departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K14";
let crew = ["Tai", "A", "B", "C", "D"];

function launchShip(crew) {
  const message = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;

  return message;
}
const launchMessage = launchShip(crew);

console.log(launchMessage);

// 2. Du hành đến hành tinh bí ẩn

function calculateDistance(speed, time) {
  const distance = speed * time;
  return distance;
}
const shipSpeed = 1000;
const travelTime = 24;

const totalDistance = calculateDistance(shipSpeed, travelTime);
console.log(`Tàu vũ trụ đã di chuyển được: ${totalDistance} km.`);

// 3. Hành tinh kỳ lạ

const time = 120;
function convertTimeToHex(time) {
  let hexadecimalTime = time.toString(16);

  return hexadecimalTime;
}
const resultHex = convertTimeToHex(time);
console.log(
  `Giá trị thời gian đã được chuyển đổi sang hệ thập lục phân là: ${resultHex}`
);

//4. Khám phá kho báu

function decryptCode(code) {
  let decryptedMessage = "";
  for (let i = 0; i < code.length; i++) {
    const text = code[i];
    if (text >= "a" && text <= "z") {
      decryptedMessage += text.toUpperCase();
    } else if (text >= "A" && text <= "Z") {
      decryptedMessage += text.toLowerCase();
    } else {
      decryptedMessage += text;
    }
  }

  return decryptedMessage;
}
const originalCode = "K14 Challenge";
const decodedResult = decryptCode(originalCode);
console.log(`Mật mã đã giải mã: "${decodedResult}"`);

// 5. Trở về Trái Đất
function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();
