/*
DOM
# Mở Dom:
+ Cách 1: F12
+ Cách 2: chuột phải trên trang web + Inspect => xem trong tab Elements

# Node 
Node còn gọi là element
+ Cấu trúc một note: <thẻ mở> thuộc tính = giá trị value </thẻ đóng>
+ thêm thuộc tính vào thẻ: chỉ cần dấu cách rồi thêm
Vd: <thẻ mở> thuộc tính1 = giá trị value1  thuộc tính2 = giá trị value2 </thẻ đóng>
+ Một node được chứa nhiều note con.

# Thẻ HTML
- Thẻ div: dùng để chia vùng trên trang web
- Thẻ header:
- Thẻ form: form nhập thông tin
- Trong thẻ form chứa nhiều thẻ div
- Thẻ textarea: ô nhập text
- Thẻ radio button: tạo nút chọn một lựa chọn
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn cùng lúc
- Thẻ list và dropdown: hiển thị danh dánh
- Thẻ button: tạo nút bấm
- thẻ table: hiển thị bảng dữ liệu
- Thẻ slider: thanh kéo
- Thẻ iframe: chỗ nhúng trang web khác vào trang web của mình

# Xác định vị trí element
- Thao tác xác định vị trí thẻ trong element trên web
+  F12 => click vào dấu mũi tên => trỏ chuột vào đối tượng cần tìm


# TUONG TACT (Selector)
+ Là cách lựa chọn phần tử trên trang
+ Có nhiều kiểu

> Kiểu XPath<br>

+Cách tìm 1 thẻ trên F12: F12 => Ctr F => hiện ô tìm kiếm => nhập lần lượt các note theo câu Dom, cách bằng dấu /
Vd: /html/body/div[1]  (nếu một thẻ có nhiều thẻ con thì dùng chỉ số trong dấu ngoặc[] để chọn)
+ Cách tìm 2: không cần gõ nhiều, dò từng cấp của DOM.
Trong file search => gõ // => gõ tên thẻ cần tìm => gõ tên thuộc tính cần tìm
+ Tìm thuộc tính:     //input[@loaithe ='ten thuoc tinh']   Vd.  //input[@name ='usernam']
+ Tìm text: //a[contains(text(), "Bài học 1: Register Page")]



# PLAYWrIGHT
Tạo file theo Cú pháp: tên-file.spec.ts

- hover vào phần tử, ta dùng hàm hover:
> `await page.locator("<xpath here>").hover();`

- chọn text:
> `//div[text()=’This is a text’]`

- chọn text có khoản trắng cuối
> ví dụ: `<div> Tôi là Alex </div>`
>
> `//div[contains(text(), ‘Tôi là Alex’)]`

- Chọn text có chứa time
> vi dụ: `<div> Bây giờ là: 08:07 </div>`
>
> => `//div[contains(text(), ‘Bây giờ là:’)]`


