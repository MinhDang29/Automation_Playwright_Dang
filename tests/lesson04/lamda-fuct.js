// hàm có nhiều tham so

let sum = (a,b) => {
    return a + b;
};

const total = sum(5,6);
console.log(total);

// hàm có 1 tham số
let dup = x => {
    return x * 2;
};

// hàm chỉ có 1  biểu thức  return
let   dub2 = x => x * 2;

// hàm không có thámoos

() => {
    console.log("Hello world");
};