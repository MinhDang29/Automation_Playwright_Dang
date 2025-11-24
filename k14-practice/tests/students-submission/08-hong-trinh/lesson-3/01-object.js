const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
}

console.log(car.year);

const person = {
    "name": "Trina",
    "address": {
        "street": "3 street",
        "city": "Ho Chi Minh city",
        "country": "Viet Nam"
    }
}
console.log(person.name);

const student = {
    "name": "Trina",
    "grades": ["math", "english"]
}
console.log(student);

// //exercise 4
const settings = {
    "volume": "max",
    "brightness": "weak"
}
settings.volume = "min";
console.log(settings);

// //exercise 5
const bike = {}
bike['color'] = 'red';
console.log(bike);

// //exercise 6
const employee = { "name": "Trinh", "age": 25 };
delete employee.age;
console.log(employee);

//exercise 7
const school = {
    "classA": ["An", "Bình", "Châu"],
    "classB": ["Đào", "Hương", "Giang"]
}
console.log(school);