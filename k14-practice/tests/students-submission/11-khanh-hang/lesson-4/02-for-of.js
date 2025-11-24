const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của str

for (const char of str) {
  console.log(char);
}

// 2.2 Tạo mảng đảo ngược từ str

const revStr = [];
for (const char of str) {
  revStr.unshift(char);
}
console.log(revStr);

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let firstIndex = -1;
let lastIndex = -1;
let i = 0;
for (const num of arr) {
  if (num === 3) {
    if (firstIndex === -1) {
      firstIndex = i;
    }
    lastIndex = i;
  }
  i++;
}
console.log(firstIndex);
console.log(lastIndex);

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr

const count = [];
for (const num of dupArr) {
  if (count[num]) {
    count[num]++;
  } else {
    count[num] = 1;
  }
}

for (let i = 0; i < dupArr.length; i++) {
  if (count[i] === 1) {
    console.log(i);
  }
}
