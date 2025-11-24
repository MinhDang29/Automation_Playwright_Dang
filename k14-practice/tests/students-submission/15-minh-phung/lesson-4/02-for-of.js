const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//2.1 In lần lượt ký tự của str
for (const char of str) {
    console.log(char)
}

//2.2 Tạo mảng đảo ngược từ str
const reversed = [];
for (const char of str) {
    reversed.unshift(char);
}
console.log(reversed);

//2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let firstIndex = -1;
let lastIndex = -1;
let count = 0;

for (const num of arr) {
    if (num === 3) {
        if (firstIndex === -1) {
            firstIndex = count;
        }
        lastIndex = count;
    }
    count++;
}
console.log(firstIndex, lastIndex)

//2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
const countMap = {};
for (const num of dupArr) {
    if (countMap[num] === undefined) {
        countMap[num] = 1;
    } else {
        countMap[num] = countMap[num] + 1;
    }
}
console.log(countMap);

const uniqueElement = [];
for (const num of dupArr) {
    if (countMap[num] === 1) {
        uniqueElement.push(num);
    }
}
console.log(uniqueElement);