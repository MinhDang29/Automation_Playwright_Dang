const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//Yeu cau 1
for (const char of str) {
    console.log(char);
};

//Yeu cau 2
const reversedArr = [];
for (const num of arr) {
    reversedArr.unshift(num);
}
console.log(reversedArr);

//Yeu cau 3
const result = [];
for (const num of dupArr) {
    if (dupArr.indexOf(num) === dupArr.lastIndexOf(num)) {
        result.push(num);
    }
}
console.log(result);


