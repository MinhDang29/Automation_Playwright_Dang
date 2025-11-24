//cau1: Tính tổng từ 1 đến 100.
var total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log(total);

// cau2: multiplication table
var a = 0;
for (let i = 2; i <= 9; i++) {
    const arr = [];
    for (let y = 1; y <= 10; y++) {
        let a = i * y;
        arr.push(a);
    }
    console.log('Bang cuu chuong ' + arr);
}


//cau3: array contain odd number
let arr_03 = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0)
        arr.push(i);
}
console.log(arr_03);

/* câu 4: 
In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user1@example.com, user2@example.com, ..., user10@example.com).
*/

let arr_04 = [];
for (let i = 1; i <= 10; i++) {
    arr_04.push('user' + i + '@example.com');
}
console.log(arr_04);

/* câu 5: 
Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
*/

const revenue_monthly = [
    { "month": 1, "total": 50 },
    { "month": 2, "total": 250 },
    { "month": 3, "total": 350 },
    { "month": 4, "total": 450 },
    { "month": 5, "total": 550 },
    { "month": 6, "total": 650 },
    { "month": 7, "total": 750 },
    { "month": 8, "total": 80 },
    { "month": 9, "total": 950 },
    { "month": 10, "total": 150 },
    { "month": 11, "total": 110 },
    { "month": 12, "total": 120 }
];

let total_revenue = 0;
for (let i = 0; i < 12; i++) {
    total_revenue += revenue_monthly[i].total;
}
console.log(total_revenue);






