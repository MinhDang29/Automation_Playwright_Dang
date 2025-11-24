//1
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K14";
let crew = ["Nhi", "Nhung", "Tai"];
function launchShip(crew, mission){
    const crewList = crew.join(", ");
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu <${mission}>!`;
};
let T = launchShip(crew, mission);
console.log(T);

//2
let speed;
let time;
function calculateDistance(speed, time){
    let km = speed*time;
    return km;
}
let X = calculateDistance(100,24);
console.log(X);

//3
let t;
function convertTimeToHex(t){
    let b3 = t.toString(16);
    return b3;
}
let t1 = convertTimeToHex(120);
console.log(t1);

//4
function decryptCode(code) {
  let result = "";
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    if (char >= "a" && char <= "z") {
      result = result + char.toUpperCase(); 
    } else if (char >= "A" && char <= "Z") {
      result = result + char.toLowerCase(); 
    } else {
      result = result + char; 
    }
  }
  return result;
}
const decrypted = decryptCode("K14 Challenge");
console.log(decrypted);


//5
function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();

