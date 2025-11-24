let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(`Car year: ${car.year}`); // Output: Car year: 2021

let person = {
  name: "Quỳnh Chi",
  address: {
    street: "Tô Hiệu",
    city: "Hà Nội",
    country: "Việt Nam",
  },
};
console.log(`Street Information: ${person.address.street}`); // Output: Street Information: Tô Hiệu

let student = {
  name: "Hoàng Sơn",
  grades: {
    math: 8.5,
    english: 9.0,
  },
};
const mathGrade = student["grades"]["math"];
console.log(`Math Grade: ${mathGrade}`); // Output: Math Grade: 8.5

let settings = {
  volume: 80,
  brightness: 70,
};
settings.volume = 90;
console.log(`Updated Volume: ${settings.volume}`); // Output: Updated Volume: 90

let bike = {};
bike["color"] = "pink";
console.log(`Bike color: ${bike.color}`); // Output: Bike color: pink

let employee = {
  name: "Nguyễn Thanh Quỳnh Chi",
  age: 25,
};
delete employee.age;
console.log(employee);

const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log(school);
