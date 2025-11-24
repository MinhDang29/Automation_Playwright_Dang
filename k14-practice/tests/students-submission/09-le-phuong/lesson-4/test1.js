//1.  Hành tinh khởi đầu: 
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K14";

const crew = ["An", "Bình", "Châu"]
function getCrewlist(item) {
   return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${item.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}.`;
}
console.log (getCrewlist(crew))

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time
}
console.log(calculateDistance(1000, 24))

//3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16)
}
console.log(convertTimeToHex(120))

//4. Khám phá kho báu
function decryptCode(code) {
    let newCode = []
    for (let i = 0; i < code.length; i++)
        if (code[i] == code[i].toLowerCase()) {
            newCode.push(code[i].toUpperCase())
        }
        else {
            newCode.push(code[i].toLowerCase())
        }
    return newCode
}
console.log(decryptCode("K14 Challenge").join(""))

//5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!")
}
returnToEarth()