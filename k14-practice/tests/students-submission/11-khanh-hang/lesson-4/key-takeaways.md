# Phạm vi của biến (Variable Scope)

- Global: khai báo bên ngoài hàm, có thể truy cập ở mọi chỗ trong file
- Scope: `{}` : khai báo trong {}, chỉ dùng đc bên trong {}

## Hoisting:

- `var`: Có thể dùng biến trước dòng khai báo (giá trị in ra là `undefined`)

  ```
    console.log(a);
    var a = 5;
    // hoisting var a lên đầu nên console.log(a) không bị lỗi, nhưng giá trị = undefined vì chưa gán a = 5
  ```

- `let`: không thể truy cập trước khi khai báo

# Điều kiện nâng cao (Advance condition)

## Các cấu trúc:

- `if...else` : so sánh điều kiện
- `if...else if` : so sánh điều kiện
- `switch...case ...default:` : kiểm tra giá trị cụ thể như số, string...

```
    let day = 3;

    switch (day) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    ....
    default:
        console.log("undefined");
}
```

## Toán tử so sánh

### `==` và `!=`

- So sánh kiểu “lỏng lẻo”
- Tự động convert 1 trong 2 giá trị về cùng kiểu dữ liệu

```
    console.log(5 == '5');      // True. convert chuỗi thành số
    console.log(0 == false);    // True. false được convert thành 0
```

### `===` và `!==`

- So sánh **tuyệt đối**

```
    console.log(5 === '5');     // false
```

## Vòng lặp nâng cao (Advance loops)

- `for...in` : lặp qua các thuộc tính trong 1 object

```
    const user = { name: "Hang", age: 21 };

    for (let key in user) {
    console.log(`${key}: ${user[key]}`);
    }
    // name: Hang
    // age: 21
```

- `forEach`: lặp qua các phần tử của array

```
    const fruits = ["apple", "banana", "cherry"];

    fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
    });
    // 0: apple
    // 1: banana
    // 2: cherry
```

- `for...of` : lặp qua các phần tử của array/string

```
    const colors = ["red", "green", "blue"];

    for (let color of colors) {
    console.log(color);
    }
    // red
    // green
    // blue

```

### Continue & break

- `break` : thoát khỏi vòng lặp

```
    for (let i = 0; i < 5; i++) {
        if (i === 3){
            break;
        }
        console.log(i);
    }
    // 0 1 2
```

- `continue`: bỏ qua lần lặp hiện tại, sang vòng sau

```
    for (let i = 0; i < 5; i++) {
        if (i === 2){
            continue;
        }
        console.log(i);
    }
    // 0 1 3 4

```

## Util Functions

### String Utils:

- `trim()` : loai bo space trong string (dau va cuoi)

```
    let str = "  k14 hello WWWWOrld   "
    console.log(str.trim());
    // "k14 hello WWWWOrld"
```

- `toLowerCase()`, `toUpperCase()` : chuyen thanh chu thuong / chu hoa

```
    let str = "  k14 hello WWWWOrld   "
    console.log(str.toLowerCase());
    // "  k14 hello wwwwworld   "
    console.log(str.toUpperCase());
    // "  K14 HELLO WWWWWORLD   "
```

- `includes()` : kiem tra chuoi co chua 1 chuoi con ben trong hay ko. False/True

```
    let str = "  k14 hello WWWWOrld   "
    console.log(str.includes("W"));
    // True
```

- `replace()` : thay the chuoi

```
    let str = "  k14 hello WWWWOrld   "
    str = str.replace("W", "X");
    console.log(str);
    // "  k14 hello XWWWOrld   "
```

- `split()` : chia chuoi thanh cac chuoi con (thanh 1 mang), dua theo ky tu phan chia (delimiter)

```
    let str = "  k14 hello WWWWOrld   "
    let text = str.split(" ")
    console.log(text);
    // ["", "", "k14", "hello", "WWWWOrld", "", "", ""]
```

- `substring()` : tra ve 1 phan cua chuoi, bat dau tu so index dc chi dinh den so index ket thuc

```
    let str = "  k14 hello WWWWOrld   "
    console.log(str.substring(0, 15));
    // "  k14 hello WWW"
    console.log(str.substring(15));
    // "WOrld   "
```

- `indexOf()` : tim vi tri cua 1 ky tu trong chuoi

```
    let str = "  k14 hello WWWWOrld   "
    console.log(str1.indexOf("K"));
    // -1
```

### Array Utils:

- `map()` : tao ra 1 mang moi bang cach ap 1 ham len tung phan tu cua mang goc

```
    let arr = ["Nhung", "nhi","tai","Hang", "Quang"];
    let upperName = arr.map(nameValue => nameValue.toLocaleUpperCase());
    console.log(upperName);
    // ["NHUNG", "NHI", "TAI", "HANG", "QUANG"]
```

- `filter()` : tao ra 1 mang moi chi bao gom cac phan tu thoa man dieu kien duowc chi dinh

```
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evennum = arr1.filter(num => num % 2 === 0);
    console.log(evennum);
    // [2, 4, 6, 8, 10]
```

- `find()` : tra ve gia tri phan tu dau tien ma thoa man dieu kien trong mang, neu khong tim thay thi tra ve undefined

```
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let findnum = arr1.find(num => num === 5);
    console.log(findnum);
    // 5
```

- `reduce()` : ap dung len tung phan tu trong mang va tra ve ket qua duy nhat

```
    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = arr3.reduce((total, num) => total + num);
    console.log(sum);
    // 55
```

- `some()` : check co ton tai phan tu nao trong mang thoa man dieu kien khoong,, co tra ve true

```
    let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let findnum1 = arr4.some(num => num === 5);
    console.log(findnum1);
    // true
```

- `every()` : check toan bo phan tu trong mang xem co thoa man dieu kien khong, co tra ve true

```
    let arr5 = [1, 20, 3, 40, 5, 6, 7, 8, 9, 10];
    let findnum2 = arr5.every(num => num === 5);
    console.log(findnum2);
    // false
```

- `push()`: them 1 hoac hieu phan tu vao phia cuoi mang va tra ve do dai cuamang moi

```
    let arr5 = [1, 20, 3, 40, 5, 6, 7, 8, 9, 10];
    arr5.push(1,3);
    console.log(arr5);
    // [1, 20, 3, 40, 5, 6, 7, 8, 9, 10, 1, 3]
```

- `shift()` : loai bo phan tu dau tien trong mang va tra ve gia tri cua phan tu do, co thay doi mang

```
    let arr5 = [1, 20, 3, 40, 5, 6, 7, 8, 9, 10];
    arr5.shift();
    console.log(arr5);
    // [20, 3, 40, 5, 6, 7, 8, 9, 10]
```

- `sort()` : sap xep cac phan tu trong mang theo thu tu tu dien Unicode, chuyen tung phan tu ve dang chuoi, sau do so sanh roi moi sap xep

```
    let arr6 = [1, 20, 3, 40, 5, 6, 7, 8, 9, 10];
    arr5.sort();
    console.log(arr5);
    // [1, 10, 20, 3, 40, 5, 6, 7, 8, 9]
```

- `pop()` : Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc

```
    let arr = [1, 2, 3];
    let last = arr.pop();
    // arr = [1, 2], last = 3
    console.log(arr);
    // [1, 2]
    console.log(last);
    // 3

```

- `unshift()` : Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc

```
    let arr = [1, 2, 3];
    arr.unshift(0);
    // arr = [0, 1, 2, 3]
    console.log(arr);
    // [0, 1, 2, 3]
```

- `trim()` : Loại bỏ khoảng trắng ở đầu và cuối chuỗi, không thay đổi chuỗi gốc mà trả về chuỗi mới

```
    const str = " K14 class ";
    const trimmed = str.trim();
    // "K14 class"

```

- `trimStart()`: Xóa khoảng trắng ở đầu chuỗi.
- `trimEnd()`: Xóa khoảng trắng ở cuối chuỗi.

## Hàm nâng cao (Advanced Functions)

### Lambda Function (Arrow Function)

- Sử dụng dấu => thay vì từ khoá function

```
    (parameters) => {
        // code
    };

```

```
    const num = [1, 2, 3];
    const sum = num.map(n => n + n);
    console.log(squares);
    // [2, 4, 6]

    - Hàm n => n + n thay cho:
    function(n) {
        return n + n;
    }
```

### Anonymous Function

- Hàm không có tên
- Dùng 1 lần hoặc truyền vào hàm khác

```
    function(parameters) {
        // code
    }
```

```
    setTimeout(() => {
        console.log('second');
    }, 1000
    );

```

# Note
## Chuyển đổi hệ thập phân sang hệ thập lục phân
```
    .toString(16)
```
```
    let decimalNumber = 120;
    let hexadecimalNumber = decimalNumber.toString(16);
    console.log(hexadecimalNumber); 
    // Output: 78
```
