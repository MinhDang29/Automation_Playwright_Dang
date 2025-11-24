//Yêu cầu 1
const student = { "name": "Alex", "age": 10, "salary": 20 };
for (let key in student) {
    console.log(`${key}: ${student[key]}`)
}

//Yêu cầu 2
let total = 0;
for (let key in student) {
    if (typeof student[key] === 'number') {
        total += student[key];
    }
}
console.log(`Tổng các giá trị số trong student là ${total}`);

//Yêu cầu 3
const keys = [];
for (let key in student) {
    keys.push(key);
}
console.log(keys);