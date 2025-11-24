const departurePlanet = 'Trái Đất';
const mission = 'Khám phá vũ trụ K14';

const crew = [
    'Tài',
    'Nhung',
    'Nhi',
    'Phượng',
    'Chi',
    'Quang'
]

const code = 'K14 Challenge';

function formCrew(crew) {
    return crew.join(', ');
}

function launchShip(crew) {
    const message = `Chuẩn bị khởi động! Phi hành đoàn gồm ${formCrew(
        crew
    )} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}`;
    return message;
}

function calculateDistanceInKilometers(speed, time) {
    return speed * time;
}

function convertTimeToHex(time) {
    return time.toString(16).toUpperCase();
}

function decryptCode(code) {
    const arrayFromString = code.split('');
    const transformedArray = arrayFromString.map((value) => {
        if (value === value.toUpperCase()) {
            return value.toLowerCase();
        } else {
            return value.toUpperCase();
        }
    });
    return transformedArray.join('');
}

function returnToEarth() {
    console.log('Chuẩn bị trở về Trái Đất!');
}

// Test all functions
console.log(launchShip(crew));
console.log(calculateDistanceInKilometers(1000, 24)); //24000
console.log(convertTimeToHex(120)); //78
console.log(decryptCode(code)); //K14 cHALLENGE
returnToEarth(); //Chuẩn bị trở về Trái Đất