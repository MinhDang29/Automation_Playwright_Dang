# Selector advanced
## DOM
1. DOM: relation
- self: node hiện tại
- parent (cha): node phía trên trực tiếp của node hiện tại
- child (con): node phía dưới trực tiếp của node hiện tại
- ancestor (tổ tiên): Là bất kỳ phần tử nào nằm phía trên trong cây DOM (cha, ông bà...)
- descendant (hậu duệ): là các node con, cháu, chắt
- sibling (anh em): là những phần tử cùng cấp và cùng cha
- following (theo sau): Chọn tất cả mọi thứ trong tài liệu sau thẻ đóng của nút hiện tại
- preceding (phía trước): Chọn tất cả các nút xuất hiện trước nút hiện tại trong tài liệu, trừ tổ tiên, các nút thuộc tính và các nút namespace
- following-sibling: anh em phía sau nút hiện tại
- preceding-sibling: Chọn tất cả anh chị em trước nút hiện tại

## XPath Advance methods
- wildcard: *: Chọn bất kỳ thẻ HTML nào.
- chứa thuộc tính: [ @attribute='value' ]
- and và or: 
    - and: Tất cả điều kiện đều đúng
    - or: Chỉ cần một điều kiện đúng
- innerText: text()
- normalize-space(): Xóa khoảng trắng dư thừa
- contains: Kiểm tra phần chuỗi. Ví dụ: //a[contains(@href, 'login')]   
- starts-with: ví dụ: //input[starts-with(@id, 'user_')]   
- not: Phủ định điều kiện. Ví dụ: //div[not(contains(@class, 'hidden'))]

## XPath Axes
Cú pháp: 
//tag/relationship::tagname[ @attr=’value’ ]
