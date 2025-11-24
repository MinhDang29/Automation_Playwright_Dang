const str = "Playwright";
//2.1 in lần lượt từng kí tự của str
for (let char of str) {
    console.log(char);
}

//2.1 tạo mảng đảo ngược từ string
let swapArr = []
for (let char of str) {
    swapArr.push(char)
}
console.log("Mảng đảo ngược :", swapArr.reverse())

//2.3 tìm và in vi trí đầu tiên và cuối cùng của giá trị 3 trong arr
const numbers = [3, 2, 5, 3, 6, 3];
let firstIndex = -1;
let lastIndex = -1;

for (let [index, num] of numbers.entries()) {
    if (num === 3) {
        if (firstIndex === -1) {
            firstIndex = index;
        }
        lastIndex = index;
    }
}
console.log("Vị trí đầu tiên:", firstIndex);
console.log("Vị trí cuối cùng:", lastIndex);

//2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr index đầu vs index cuối giống nhau
const dupArr = [1, 2, 3, 1, 2, 4, 5];
let singleNum = dupArr.filter(num => dupArr.indexOf(num) === dupArr.lastIndexOf(num))
console.log(singleNum)

