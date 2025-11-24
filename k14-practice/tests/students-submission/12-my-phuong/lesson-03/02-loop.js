// Loops
// BT1: Tinh tong tu 1 den 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("[BT1] Tong tu 1 den 100 la: " + sum);

// BT2: Bang Cuu Chuong
console.log("\n[BT2] Bang cuu chuong: ");
for (let i = 2; i <= 9; i++) {
    console.log("\n");
    for (let j = 1; j <= 10; j++)
        console.log(i + "x" + j + "=" + i * j);
}

// BT3: In ra mot mang chua cac so le tu 1 den 99
let mangSoLe = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        mangSoLe.push(i);
    }
}
console.log("\n[BT3] Mang so le tu 1 den 99: \n" + mangSoLe);

// BT4: In ra 10 email dua tren ten nguoi dung va so thu tu
console.log("\n[BT4] Danh sach email nguoi dung: ");
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

// BT5: Tong doanh thu 12 thang trong nam
const monthlyRevenue = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 500 },
    { month: 6, total: 600 },
    { month: 7, total: 700 },
    { month: 8, total: 800 },
    { month: 9, total: 900 },
    { month: 10, total: 100 },
    { month: 11, total: 200 },
    { month: 12, total: 300 }
]
let yearRevenue = 0;
for (let i = 0; i < monthlyRevenue.length; i++) {
    yearRevenue += monthlyRevenue[i].total;
}
console.log("\n[BT5] Tong doanh thu 12 thang trong nam: " + yearRevenue);