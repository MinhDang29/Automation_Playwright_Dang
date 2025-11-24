const student = { name: "Alex", age: 10, salary: 20 };

// 3.1 In tên và giá trị mỗi thuộc tính của student
for (let key in student) {
  console.log(`Key: ${key}, Value: ${student[key]}`);
}

// 3.2 Tính tổng các giá trị số trong student
let sum = 0;
let keys = ["age", "salary"];
for (let key in student) {
  if (keys.includes(key)) {
    sum += student[key];
  }
}
console.log(`Tổng các giá trị số trong student: ${sum}`);

//3.3 Tạo mảng chứa tên các thuộc tính của student
let keyStudent = [];
for (let key in student) {
  keyStudent.push(key);
}
console.log(`Mảng chứa tên các thuộc tính của student: ${keyStudent}`);
