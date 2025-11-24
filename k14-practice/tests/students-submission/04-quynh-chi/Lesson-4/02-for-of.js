const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của str
for (let char of str) {
  console.log(char);
}

// 2.2 Tạo mảng đảo ngược từ str
const reversedStr = [];
for (let char of str) {
  reversedStr.unshift(char);
}
console.log(`Mảng đảo ngược: ${reversedStr}`);

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let firstIndex = arr.indexOf(3);
console.log(`Vị trí đầu tiên của 3: ${firstIndex}`);

for (let i = 3; i < arr.length; i++) {
  if (arr[i] === 3) {
    console.log(`Vị trí cuối cùng của 3: ${i}`);
  }
}

// 2.4. Lọc các phần tử xuất hiện 1 lần trong dupArr
// Cách 1: Sử dụng for in
let countItemInArray = {};
dupArr.forEach((item) => {
  if (!countItemInArray[item]) {
    // Nếu chưa có item trong countItemInArray thì thêm vào
    countItemInArray[item] = 1;
  } else {
    countItemInArray[item]++;
  }
});
let uniqueItems = [];
for (let item in countItemInArray) {
  if (countItemInArray[item] === 1) {
    uniqueItems.push(item);
  }
}
console.log(`Các phần tử xuất hiện 1 lần: ${uniqueItems}`);

// Cách 2: Sử dụng for of
let countItemInArray2 = {};
for (let item of dupArr) {
  if (!countItemInArray2[item]) {
    countItemInArray2[item] = 1;
  } else {
    countItemInArray2[item]++;
  }
}
let uniqueItems2 = [];
for (let item in countItemInArray2) {
  if (countItemInArray2[item] === 1) {
    uniqueItems2.push(item);
  }
}
console.log(`Các phần tử xuất hiện 1 lần: ${uniqueItems2}`);
