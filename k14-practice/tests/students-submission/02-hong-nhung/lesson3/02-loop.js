//Yêu cầu 1
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i
};
console.log(sum);
//Yêu cầu 2
for (let i = 2; i <= 9; i++) {
    console.log(`\nBảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}
//Yêu cầu 3
const arr = [];
for (let i = 1; i <= 100; i = i + 2) {
    arr.push(i)
}
console.log(arr);
//Yêu cầu 4
for (i = 1; i <= 10; i++) {
    console.log(`user${i}example.com`)
}
//Yêu cầu 5
const doanhThu = [
    { month: 1, total: 100 },
    { month: 2, total: 70 },
    { month: 3, total: 90 },
    { month: 4, total: 150 },
    { month: 5, total: 80 },
    { month: 6, total: 200 },
    { month: 7, total: 170 },
    { month: 8, total: 130 },
    { month: 9, total: 110 },
    { month: 10, total: 160 },
    { month: 11, total: 140 },
    { month: 12, total: 190 }
];
let tongDoanhThu = 0;
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total
};
console.log(`Tổng doanh thu là ${tongDoanhThu}`);