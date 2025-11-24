// Câu 1: 
const car = { make: "Toyota", model: "Corolla", year: 2021 };
console.log(car);

// Câu 2:
const person = { name: "Eric", address: { street: "12 NewYork", city: "NewYork", country: "GB" } };
console.log(person.address);

// Câu 3: 
const student = {
    "name": "Eric",
    "grades": { "math": 10, "english": 7 }

}
const mathquery = student["grades"]["math"];
console.log(mathquery);

// Câu 4:
const settings = {
    "volume": 78,
    "brightness": 56
}

settings["brightness"] = 43;
console.log(settings);

// Câu 5:
const bike = { "color": "green" }

// Câu 6:
const employee = {
    "name": "Eric",
    "age": 30
}
delete employee["age"];
console.log(employee);

// Câu 7:
const school = {
    "classA": ["An", "Bình", "Châu"],
    "classB": ["Đào", "Hương", "Giang"]
}
console.log(school);