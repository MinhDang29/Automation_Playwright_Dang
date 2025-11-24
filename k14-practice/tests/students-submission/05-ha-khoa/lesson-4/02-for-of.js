const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23]
const dupArr = [1, 2, 3, 4, 5]

2.

2.1
for (let i = 0; i < str.length; i++){
console.log(str[i]);
}

2.2
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

2.3
console.log(arr.indexOf("3"));