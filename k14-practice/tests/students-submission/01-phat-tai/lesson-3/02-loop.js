//1
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);
//2
for (let i = 2; i <= 9; i++) {
  console.log("bang cuu chuong" + i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
//3
const soLe = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    soLe.push(i);
  }
}
console.log("Mang so le la :" + soLe);

//4
const emails = [];
for (let i = 1; i <= 10; i++) {
  emails.push(`user${i}@example.com`);
}
console.log(emails);

//5
const data = [
  { month: 1, total: 5 },
  { month: 2, total: 10 },
  { month: 3, total: 20 },
  { month: 4, total: 30 },
  { month: 5, total: 40 },
  { month: 6, total: 50 },
  { month: 7, total: 60 },
  { month: 8, total: 70 },
  { month: 9, total: 80 },
  { month: 10, total: 90 },
  { month: 11, total: 100 },
  { month: 12, total: 101 },
];
let total = 0;
for (let i = 0; i < data.length; i++) {
  total = total + data[i].total;
}
console.log(`Tong la: ${total}`);
