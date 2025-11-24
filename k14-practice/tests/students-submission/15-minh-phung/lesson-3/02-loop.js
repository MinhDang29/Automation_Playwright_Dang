// Câu 1:
let sum = 0;
for (i = 1; i <= 100; i++) { sum += i; }
console.log(sum);

// Câu 2:
let thuaSo = 2;
for (i = 1; i <= 10; i++) { console.log(thuaSo + " x " + i + " = " + thuaSo * i); }

//Câu 3:
let arr = [];
for (let i = 1; i <= 100; i += 2) {
    arr.push(i);
}
console.log(arr)

// Câu 4: 
for (let i = 1; i <= 10; i++) { console.log("user" + i + "@example.com") }

// Câu 5:
let sell = [
    {
        "month": 1,
        "total": 100
    }
    , {
        "month": 2,
        "total": 100
    }
    , {
        "month": 3,
        "total": 100
    }
    , {
        "month": 4,
        "total": 100
    }
    , {
        "month": 5,
        "total": 100
    }
    , {
        "month": 6,
        "total": 100
    }
    , {
        "month": 7,
        "total": 100
    }
    , {
        "month": 8,
        "total": 100
    }
    , {
        "month": 9,
        "total": 100
    }
    , {
        "month": 10,
        "total": 100
    }
    , {
        "month": 11,
        "total": 100
    }
    , {
        "month": 12,
        "total": 100
    }

]

let b = (sell[1].total);
let tong = 0
for (i = 1; i <= 12; i++) { tong += b }
console.log(tong);