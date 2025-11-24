
/* 1. Tính tổng từ 1 đến 100. */
let sum = 0; 
for (let i = 1; i <=100; i ++){
    sum +=i;
}
console.log(sum);

/* 2. In bảng cửu chương từ 2 đến 9. */
for (let a = 2; a <=9 ; a ++){
    for (let b = 1; b <= 10; b ++){
        console.log(`${a} x ${b} = ${a*b}`);
    };
};

/* 3. Tạo một mảng chứa các số lẻ từ 1 đến 99. */
let odd = [];
for (let i = 1; i <= 99; i += 2){
    odd.push(i);
}
console.log(odd);

/* 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user1@example.com, user2@example.com, ..., user10@example.com). */
for (let i = 1; i <= 10; i ++){
    console.log(`user${i}@example.com`);
};

/* 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100} */
let dt = [
    {"month": 2, "total": 100},
    {"month": 3, "total": 200},
    {"month": 4, "total": 300},
    {"month": 5, "total": 400},
    {"month": 6, "total": 500},
    {"month": 7, "total": 600},
    {"month": 8, "total": 700},
    {"month": 9, "total": 800},
    {"month": 10, "total": 900},
    {"month": 11, "total": 1000},
    {"month": 12, "total": 1100}
];
let dt_year = 0;
for (let i = 0; i < dt.length; i ++){
    dt_year += dt[i].total;
};
console.log(dt_year);