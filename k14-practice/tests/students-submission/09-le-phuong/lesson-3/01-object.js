const { constants } = require("buffer");

//ex1
let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
}
console.log("Year = " + car.year);

//ex2
let person = {
    "name": "Susan",
    "address": {
        "street": "An Phu Dong",
        "city": "Ho Chi Minh",
        "country": "VietName"
    }
}
console.log("Street = " + person.address.city);

//ex3
let students = {
    "name": "susan",
    "grade": {
        "math": 7,
        "english": 8
    }
}
console.log("Math score = " + students.grade["math"]);

//ex4
let settings = {
    "volume": "3x",
    "brightness": "98%"
}
settings["volume"] = "5x"
console.log("Volume =" + settings["volume"])

//ex5
let bike = {
    make: 'Yamaha',
    model: 'YZF-R3'
};
bike.color = "Red";
console.log(bike)

//ext6
let employee = {
    "name": "susan",
    "age": "38"
}
delete employee.age;
console.log(employee);

//ext7
const school = {
    "classA": {
        "name": ["An", "Bình", "Châu"]
    },
    "classB": {
        "name": ["Đào", "Hương", "Giang"]
    }
}
//in ra class A
console.log(school.classA.name);
//in ra class A hoc viên đầu tiên
console.log(school.classA.name[0]);