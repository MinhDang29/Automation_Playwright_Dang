const numbers = [3, 2, 5,3];

//1.1  In lần lượt từng phần tử của numbers.
numbers.forEach((number) => {
    console.log(number);
})

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let total = 0
let min=Infinity
let max=0
numbers.sort();
numbers.forEach((number) => {
    total = total + number
    if(max<number){
        max=number
    }
    if(min >number){
        min=number
    }
})
console.log("Cách 1 foreach Tống bằng", total)
total2 = numbers.reduce((accum, value) => accum + value)
console.log("Cách 2 dùng reduce Tống bằng", total2);
console.log("Số nhỏ nhất", min);
console.log("Số lớn nhất", max);

///1.3 Tao mảng mới từ numbers, mỗi phần tử nhân đôi
let newArr = [];
numbers.forEach((number) => {
    newArr.push(number * 2)
})
console.log("Mảng mới ", newArr)
