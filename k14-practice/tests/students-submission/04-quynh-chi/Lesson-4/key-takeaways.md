# Kiến thức tổng hợp Lesson 4 - JavaScript

## Phạm vi của biến

- Var: Phạm vi Global & có thể truy cập được vào biến trước khi khai báo
- Let: Phạm vi trong scope {} & không thể truy cập trước khi khai báo

## Điều kiện nâng cao

- if ... else
- If ... If<br>_Note: Phù hợp khi check các điều kiện phức tạp_
- switch ... case <br> _Note: Phù hợp khi điều kiện có 1 giá trị_

## Compare - So sánh

- double equal == và != : Chỉ so sánh về giá trị (convert về cùng 1 kiểu dữ liệu rồi so sánh)
- triple equal === và !== : So sánh về cả giá trị và kiểu dữ liệu

## Vòng lặp nâng cao

- for ... in: Để lặp các thuộc tính trong object -> lấy tất cả thuộc tính của object
- forEach: Dùng trong mảng
- for ... of: Dùng với mảng hoặc string

## Beark & continue

- Break: Thoát khỏi vòng lặp, không thực hiện các bước còn lại của vòng lặp hiện tại hoặc vòng lặp tiếp
- Continue: Bỏ qua phần code còn lại trong vòng lặp và chuyển qua vòng tiếp theo

## Util function

### String Util

- trim() : Loại bỏ khoảng trắng ở đầu hoặc cuối string<br>Cấu trúc: str.trim()

- toLowerCase() : Chuyển tất cả các ký từ viết hoa về viết thường<br>Cấu trúc: str.toLowerCase()

- toUpperCase() : Chuyển tất cả các ký tự từ viết thường sang viết hoa<br>Cấu trúc: str.toUpperCase()

- includes() : Check xem chuỗi có chứa chuỗi con bên trong không -> return boolean<br> Cấu trúc: let str = "Hello world!";
  console.log(str.includes("world"));

- replace() : Thay thế 1 chuỗi con bằng 1 chuỗi khác<br>Cấu trúc: str.replace(searchValue, replaceValue)

- split() : Chia string ban đầu thành các chuỗi con trong 1 mảng<br>Cấu trúc: str.split(separator[, limit])

- substring() : Trả về 1 phần tử của chuỗi, bắt đầu từ start index đến end index<br>_Note: Nếu chỉ truyền vào 1 số index -> Coi số đó là start index và chạy đến hết chuỗi_<br>Cấu trúc: str.substring(startIndex, endIndex)

- indexOf() : Trả về vị trí đầu tiên của chuỗi con trong chuỗi ban đầu<br>cấu trúc: string.indexOf(searchValue, fromIndex)<br>_Note: Nếu không tìm thấy trả về -1_<br>Cấu trúc: let str = "Hello, world!";
  console.log(str.indexOf("world"))

### Array Util

- map() : Tạo ra 1 mẳng mới bằng cách áp 1 hàm lên từng phần tử của mảng gốc<br>Cấu trúc: let newArray = array.map(function(element, index, array) {
  // return giá trị mới cho phần tử
  });

- filter() : Tạo ra 1 mảng mới chỉ bao gồm phần tử được chỉ định<br>Cấu trúc: let newArray = array.filter(function(element, index, array) {
  // code
  });

- find() : Trả về giá trị phần tử đầu tiên mà thỏa mãn điều kiện trong mảng -> Không có phần tử nào thỏa mãn trả về undefine<br>Cấu trúc: array.find(function(element, index, array) {
  //code
  });

- reduce() : Áp dụng lên từng phần tử trong mảng và trả về 1 giá trị duy nhất -> Thường dùng để tính tổng, tích, nối chuỗi, hoặc các phép toán phức tạp hơn.<br>Cấu trúc: array.reduce(function(accumulator, currentValue, currentIndex, array) {
  // Xử lý và trả về accumulator mới
  }, initialValue);

- some() : Check có tồn tại phần từ nòa trong mảng thỏa mãn điều kiện hay không -> return boolean<br>Cấu trúc: array.some(function(element, index, array) {
  // code
  });

- every(): Check toàn bộ phần tử trong mảng có thỏa mãn điều kiện -> return boolean<br>Cấu trúc: array.every(function(element, index, array) {
  //code
  });

- push() : Thêm 1 hoặc nhiều phần tử vào mẳng và trả về độ dài của mảng mới<br>Cấu trúc: array.push(value1, value2, ..., valueN)

- shift() : Loại bỏ phần tử đầu tiên của mẳng và trả về phần tử đó -> Mảng thay đổi<br>Cấu trúc: array.shift();

- sort() : Sắp xếp phần tử trong mẳng theo từ điển unicode -> Chuyển phần tử về dạng chuỗi, sau đó so sánh chuỗi và sắp xếp<br>Cấu trúc: array.sort([compareFunction])
