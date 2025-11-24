# Convention (quy tắc đặt tên)
`snake_case` : Không dùng 
`kebab-case` : Tên file 
`camelCase`  : Tên biến 
`PascalCase` : Tên class 

# Console Log

```
console.log('text');
```
```
let name = "Hang";
console.log(`${name}`);
console.log("text" + name);
```

# Object
- Dùng để lưu nhiều giá trị trong một biến
- Cú pháp khai báo:
```
const obj = {
  key: value,
  ...
}
```
**Example**
```
let user = {
  name: "Hang",
  age: 20,
  email: "h@gmail.com"
};

const product = {
  name: "pc",
  price: 100,
  isMac: true,
  other: {
    name: "imac",
    year: 2025
  }
};

console.log(user.name);
console.log(product.other.name);
console.log(product["price"]);

user.age = 28;
product["other"]["year"] = 2025;
```

# Logical Operators
`&&`  :  Cả hai đúng
`||` : Một trong hai đúng
`!`  : Phủ định giá trị

# Array

- Mảng = tập hợp các phần tử
- Khai báo mảng:
```
let arr = [1, 2, 3];

arr[0]; // phần tử đầu tiên
arr.length; // độ dài mảng
```

# Function
```
function greet() {
  console.log("Hello!");
}
```
- Có thể nhận **parameters** và trả về **return value**.

```
Parameter:

function Name(name) {
  console.log(`${name}`);
}

Name("Hang");
```
```
function getName(firstName, lastName) {
  return firstName + " " + lastName;
}

const fullName = getName("Hang", "Vu");
console.log(fullName);

```