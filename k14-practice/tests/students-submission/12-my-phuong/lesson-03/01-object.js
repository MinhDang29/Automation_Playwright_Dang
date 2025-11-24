// Object
// BT1
const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
}
console.log("[BT1] Nam san xuat " + car.year);

// BT2
const person = {
    "name": "Andy",
    "address": {
        "street": "TXS St, District 7",
        "city": "Ho Chi Minh",
        "country": "VN"
    }
}
console.log("[BT2] Dia chi cua "+ person.name + " la: " + person.address.street + ", " + person.address.city + ", " + person.address.country);

// BT3
const student = {
    "name": "John",
    "grades": {
        "math": 90,
        "english": 85
    }
}
console.log("[BT3] Diem toan: " + student["grades"].math);

// BT4
const settings = {
    "volume": 50,
    "brightness": 70
}
console.log("[BT4] Before updating Settings-Volume: ", settings);
settings.volume = 80;
console.log("After updating Settings-Volume: ", settings);

// BT5
let bike = {
    "name": "Martin 107",
    "price": 2000,
}
console.log("[BT5] Bike before adding color: ", bike);
bike.color = "white";
console.log("Bike after adding color: ", bike);

// BT6
const employee = {
    "name": "Andy",
    "age": 18
}
console.log("[BT6] Employee before deleting age: ", employee);
delete employee.age;
console.log("[BT6] Employee after deleting age: ", employee);

// BT7
const classA = ["An", "Bình", "Châu"];
const classB = ["Đào", "Hương", "Giang"];
const school = {
    "classA": classA,
    "classB": classB
}
console.log("[BT7] School: ", school);
