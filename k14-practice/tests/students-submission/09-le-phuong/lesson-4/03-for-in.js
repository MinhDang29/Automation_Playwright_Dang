const student = { "name": "Alex", "age": 10, "salary": 20 };
// 3.1 in tên và gia trị mỗi thuộc tính của student
for (let key in student) {
    console.log(`${key}: ${student[key]}`)
}
//3.2 tính tổng giá trị số trong student
console.log("Tổng của số trong student", student.age + student.salary)

//3.3 tạo mảng chứa tên các thuộc tính của student
let attriArr = []
for (let key in student) {
    attriArr.push(key)
}
console.log(" mảng chứa tên các thuộc tính của student " ,attriArr)
