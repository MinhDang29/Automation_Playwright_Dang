# 1. Biến - scope
- let: phạm vi hoạt động trong cặp dấu {}
- var: phạm vi hoạt động trong và ngoài cặp dấu {}, tức mọi nơi.

# 2. If-else
- syntax: 
`if (condition) {//execute code when condition = true} else {//execute code when condition = false}`

# 3. If-else-if
- syntax: 
`if (condition) {//execute code when condition1 = true} else if {//execute code when condition1 = false} esle {//execute code when condition1 & 2 = false}` 

# 4. Swich case
`switch(varible){
    case cond1:
        //code cond 1
        break;
    case cond2:
        //code cond 2
        break;
    ....
    case condn:
        //code condn
        break;
    default:
        //code default
        break;
}`

# 5. So sánh
- "==" : chỉ so sánh giá trị
- "===": so sánh giá trị và kiểu dữ liệu của giá trị

# 6. for...in
- dùng để lặp các thuộc tính trong oject
- syntax: `for (let <variableName> in <objectName>){//code here}`
# 7. forEach
- dùng để lặp các phần tử trong mảng.
- syntax: `arr.forEach( (element, index) => {//code here} )`

# 8. for...of
- dùng để lặp các giá trị trong mảng hoặc string
- syntax: `for (let <variableName> of <objecName or string>){// code here}`

# 9. for...continue
- syntax: `for (tham so){//code1 ; continue; code2}`

# 10. Util
- trim(): Loại bỏ khoản trắng đầu và cuối của string: `<variableName>.trim();`
- toLowerCase(): Format chữ thường: `<variableName>.toLowerCase();`
- toLowerCase(): Format chữ hoa: `<variableName>.toLocaleUpperCase();`
- include(): Kiểm tra sự tồn tại 1 chuối (B) trong chuỗi ban đầu (A): `<varaibleNameA>.include("<B>");`
- replace(): Thay thế 1 chuỗi (B) thành chuối (C) trong cuỗi ban đầu (A):  `<varaibleNameA>.replace("<B>", "<C>);`
- split(: ) Tách chuỗi (A) ra các chuối con (B) dựa theo ký tự phân chia: `<varaibleName>.split("<ký tự phân chia>", <số lượng chỗi con muốn phân tách>);`
- subString()   => Lấy ra một phần chuỗi từ chuỗi ban đầu: `<variableName>.substring(<vị trí bắt đầu>, <vị trí kết thúc>);`
- indexOf(): Xác định vị trí của chuỗi con (B) trong chuỗi chứa nó (A): `<variableNameA>.indexOf("<chuỗi B">);`
- map():  Tạo mảng mới(B) từ một mảng khác(A): `<ArrayNameA>.map(<arrayNameB> => <code here>);`
- filter(): Tảo mảng mới (B) từ mảng khác (A) theo 1 điều kiện: `<ArrayNameA>.filter(<arrayNameB> => <conditionB here>);`
- find(): trả về giá trị phần tử đầu tiên thõa mãn điều kiện: `<ArrayNameA>.find(<variableNameB> => <conditionB here>);`
- reduce(): áp dụng từng phần tử trong mảng và trả về 1 kq duy nhất:
- some(): kiểm tra sự tồn tại của phần tử trong mảng theo 1 điều kiện:  `<ArrayNameA>.some(<variableNameB> => <ondition here>);`
- every(): kiểm tra tất cả phần tử trong mảng theo 1 điều kiện:  `<ArrayNameA>.every(<variableNameB> => <ondition B here>);`
- push(): thêm 1 hoặc nhiều phần tử vào cuối mảng:  `<ArrayNameA>.push(<danh sách phần tử muốn thêm>);`
- shift(): trả về mảng mới không chưa phần tử đầu tiên của mảng ban đầu: `<ArrayNameA>.shift();`
- sort(): sắp xếp các phần tử trong mảng kiểu AZ: `<ArrayNameA>.sort();`
- pop(): xóa phẩn tử cuối trong mảng ban đầu: `<ArrayNameA>.pop();`
- unshift(): thêm một hay nhiều phần tử vào đầu mảng: `<ArrayNameA>.unshift(<danh sách phần tử muốn thêm>);`

