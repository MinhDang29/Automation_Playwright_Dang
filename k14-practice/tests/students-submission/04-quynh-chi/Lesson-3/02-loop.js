// 1. Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Tổng từ 1 đến 100 là: ${sum}`);

// 2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
  console.log(`Bảng cửu chương ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let oddNumbers = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 === 1) {
    oddNumbers.push(i);
  }
}
console.log(`Số lẻ từ 1 đến 99: ${oddNumbers}`);

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i = 1; i <= 10; i++) {
  console.log(`Email số ${i}: chinguyen${i}@gmail.prepedu.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm
let revenue = [
  { month: 1, total: 100 },
  { month: 2, total: 200 },
  { month: 3, total: 300 },
  { month: 4, total: 400 },
  { month: 5, total: 500 },
  { month: 6, total: 600 },
  { month: 7, total: 700 },
  { month: 8, total: 800 },
  { month: 9, total: 900 },
  { month: 10, total: 1000 },
  { month: 11, total: 1100 },
  { month: 12, total: 1200 },
];
let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
  totalRevenue += revenue[i].total;
}
console.log(`Tổng doanh thu của 12 tháng là: ${totalRevenue}`);
