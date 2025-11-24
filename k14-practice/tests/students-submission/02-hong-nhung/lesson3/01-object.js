//Yêu cầu 1
let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
}
console.log(car.year);
//Yêu cầu 2
let person = {
    name: "Nhung",
    address: {
        street: "My Dinh",
        city: "Ha Noi",
        country: "Viet Nam"
    }
};
console.log(person["address"]["street"]);
//Yêu cầu 3
const student = {
    name: "Hoang Thi Hong Nhung",
    grades: {
        math: 9,
        english: 10
    }
};
const mathScore = student["grades"]["math"];
console.log("Điểm môn Toán = ", mathScore);
//Yêu cầu 4
const settings = {
    volume: 10,
    brightness: 100
};
settings.volume = 50;
console.log(settings);
//Yêu cầu 5
const bike = {
    type: "Mountain bike",
    manufacturingYear: 2022
};
bike.color = "Pink";
console.log(bike);
//Yêu cầu 6
const employee = {
    name: "Nhung",
    age: 24
};
delete employee.age;
console.log(employee);
//Yêu cầu 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);