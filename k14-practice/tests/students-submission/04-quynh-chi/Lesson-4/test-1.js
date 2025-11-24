// 1. Khởi động tàu vũ trụ K14
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K14";
let crew = [
  "Quỳnh Chi",
  "Dung Nhi",
  "Giang Sơn",
  "Hồng Nhung",
  "Hà Khoa",
  "Minh Phụng",
  "Phạm Quang",
  "Ngọc Tân",
  "Lê Phương",
  "Mạnh Sỹ",
  "Phát Tài",
  "Hồng Trinh",
  "Hạnh Vũ",
  "Hằng Vũ",
  "Nguyễn Quang",
];
function launchShip(crew) {
  console.log(
    `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`
  );
}
launchShip(crew);

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
  let distance = speed * time;
  console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km.`);
}
calculateDistance(1000, 24);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
  let hexTime = time.toString(16);
  console.log(`Thời gian trên hành tinh kỳ lạ là ${hexTime} giây.`);
}
convertTimeToHex(120);

// 4. Khám phá kho báu
// Cách 1: Sử dụng hàm for of
function decryptCode(code) {
  let result = "";
  for (let char of code) {
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      result += char.toUpperCase();
    } else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  console.log(`Mật mã kho báu: ${result}`);
}
decryptCode("K14 Challenge");

// Cách 2: Sử dụng map
function decryptCode1(code) {
  let listChars = code.split("");
  for (let i = 0; i < listChars.length; i++) {
    let char = listChars[i];
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      listChars[i] = char.toUpperCase();
    } else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      listChars[i] = char.toLowerCase();
    } else {
      listChars[i] = char;
    }
  }
  console.log(`Mật mã kho báu: ${listChars.join("")}`);
}
decryptCode1("K14 Challenge");

// 5. Trở về Trái Đất
function returnToEarth() {
  console.log(`Chuẩn bị trở về Trái Đất!`);
}
returnToEarth();
