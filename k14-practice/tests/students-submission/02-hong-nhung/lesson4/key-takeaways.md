# JS (continue)
## JS Advance concepts 
1. Phạm vi của biến var và let:
- Var: dùng global
- Let: scope giới hạn trong {}

2. Hoisting
- Var: có thể truy cập được vào biến trước khi được khai báo: Giá trị undefined
- Let: KHÔNG thể truy cập trước khi khai báo

3. Điều kiện nâng cao: if...else, if...else if, switch...case
- If...else: dùng để kiểm tra điều kiện đơn giản, nếu đúng thì làm cái này, sai thì làm cái kia
    - Cú pháp: 
    if (điều kiện) {
        // code khi điều kiện đúng
    } else {
        // code khi điều kiện sai
    }
- If...esle if: Dùng khi muốn kiểm tra nhiều điền kiện khác nhau, lần lượt từ trên xuống
    - Cú pháp:
    if (điều kiện 1) {
        // code khi điều kiện 1 đúng
    } else if (điều kiện 2) {
        // code khi điều kiện 2 đúng
    } else {
        // code khi không điều kiện nào đúng
    }
- Switch...case: dùng khi kiểm tra 1 biến vs nhiều giá trị cố định
    - Cú pháp: 
    switch (biến) {
        case giá_trị_1:
            // code nếu biến === giá_trị_1
            break;
        case giá_trị_2:
            // code nếu biến === giá_trị_2
            break;
        default:
            // code nếu không khớp giá trị nào
    }

4. Toán tử == và !=
- == và !=
    - So sánh kiểu “lỏng lẻo”
    - Convert giá trị về kiểu
“lớn hơn”
- ===, !==: so sánh tuyệt đối

5. Vòng lặp nâng cao: for...in, forEach, for...of
- For...in: 
    - Dùng để duyệt qua các thuộc tính (key) của một đối tượng (object) hoặc chỉ số (index) của mảng.
    - Trả về key (chuỗi) của từng phần tử.
    - Thường dùng với object hoặc khi muốn lấy key của mảng.
    - Cú pháp: for (let key in objectOrArray) {
        // key là tên thuộc tính hoặc index
    }

- forEach: 
    - Là phương thức của mảng dùng để duyệt qua từng phần tử của mảng.
    - Không thể dùng để dừng vòng lặp (không dùng break hoặc continue).
    - Thường dùng để thao tác với từng phần tử mảng.
    - Cú pháp: array.forEach(function(element, index, array) {
        // code với từng element
    });

- for...of:
    - Dùng để duyệt qua giá trị của các phần tử trong iterable (mảng,
    chuỗi, Set, Map,...).
    - Trả về giá trị (value) chứ không phải key/index.
    - Có thể dùng break, continue.
    - Cú pháp: for (let value of iterable) {
        // code với từng value
    }

6. Vòng lặp nâng cao: break and continue
- break:
    - Dừng (thoát) hoàn toàn vòng lặp hiện tại.
    - Khi gặp break, vòng lặp sẽ kết thúc ngay lập tức, không thực hiện thêm các lần lặp còn lại.

- continue: 
    - Bỏ qua lần lặp hiện tại, chuyển sang lần lặp kế tiếp.
    - Khi gặp continue, phần code còn lại trong vòng lặp của lần đó sẽ không chạy, vòng lặp chuyển sang bước tiếp theo.  

## JS Utils functions
1. String util
- trim(): loại bỏ khoảng trắng đầu và cuối chuỗi
- toLowerCase() và toUpperCase(): 
- toLowerCase(): chuyển toàn bộ chuỗi thành chữ thường
- toUpperCase(): chuyển toàn bộ chuỗi thành chữ hoa
- includes(): Kiểm tra chuỗi có chứa substring không, trả về true hoặc false.
- replace(searchValue, newValue): Thay thế phần chuỗi đầu tiên khớp searchValue bằng newValue.
- split(separator): Tách chuỗi thành mảng dựa trên separator
- substring(start, end): Trích chuỗi từ start đến trước end (không bao gồm end).
- indexOf(substring): Tìm vị trí đầu tiên của substring trong chuỗi, không tìm thấy trả về -1.
- lastIndexOf(substring): Tìm vị trí cuối cùng của substring trong chuỗi

2. Array util
- map(): Tạo mảng mới bằng cách biến đổi từng phần tử.
- filter(): Lọc các phần tử thỏa điều kiện, trả về mảng mới. 
- find(): Tìm phần tử đầu tiên thỏa điều kiện, trả về phần tử hoặc undefined.
- reduce(): Gộp mảng thành một giá trị duy nhất dựa trên hàm xử lý. 
- some(): Kiểm tra có ít nhất 1 phần tử thỏa điều kiện không, trả về true hoặc false.
- every(): Kiểm tra tất cả phần tử thỏa điều kiện không, trả về true hoặc false.
- push(): Thêm phần tử vào cuối mảng, trả về độ dài mới của mảng.
- shift(): Xóa phần tử đầu mảng và trả về phần tử đó.
- sort(): Sắp xếp mảng (mặc định theo bảng chữ cái).
- pop(): Xoá và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc
- unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc. 

## Function advance
1. Lambda function (Arrow function)
- Một cách ngắn gọn viết hàm trong JS
- Sử dụng dấu => thay vì từ khoá function
- Cú pháp: (parameters) => {
    // Code here
}

2. Anonymous functions:
- Hàm không có tên
- Thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác
- Cú pháp: function (parameters) {
    // Code here
}