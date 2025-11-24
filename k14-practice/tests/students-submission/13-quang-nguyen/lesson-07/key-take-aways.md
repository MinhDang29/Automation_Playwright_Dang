# DOM
## Relation
- self: node hiện tại
- parent: cha, node phía trên trực tiếp của node hiện tại
- ancestor: tổ tiên, là các node cha của cha,...
- descendant: hậu duệ, là các node con, cháu, chắt
- sibling: các phần tử cùng cấp và cùng cha
- following: là các node nằm phía bên tay phải của node hiện tại
- preceding: là các node nằm phía bên tay trái của node hiện tại
- following-sibling: anh em phía sau, cùng cấp và bên tay phải của node hiện tại
- preceding-sibling: anh em phía trước, cùng cấp và nằm bên tay trái của node hiện tại
## Xpath: advance methods
- wildcard: * : tìm tất cả thẻ thỏa điều kiện mà không quan tâm tới tag của thẻ. Vd: //*[ @id="customer"]
- chưa thuộc tính: tìm kiếm các thẻ thỏa mãn điều kiện và bao gồm thuộc tính trên. Vd: //div[ @id="gender"]
- and và or: Kết hợp các điều kiện sử dụng and và or.Vd: //input[@type="email" and @name="email"]
- innerText: text(): tìm kiếm tới các thẻ chứa text là giá trị nằm giữa thẻ mở và thẻ đóng (tìm kiếm theo exact). Vd: //label[ text()='Gender:']
- normalize-space(): Tự động loại bỏ khoảng trắng ở đầu và cuối để tìm kiếm thẻ chứa text ở đó.Vd: //label[nomalize-space() = 'Gender:']
- contains: Tìm kiếm thuộc tính hoặc text có chứa 1 chuỗi con cụ thể. Vd: //a[ contains(text(),"text") ]
- starts-with: tìm kiếm thẻ chứa đoạn text bắt đầu bằng keyword. Vd //a[ starts-with(text(),"text" )]
- not: tìm kiếm các thẻ phủ định với điều kiện bên trong. Vd://div[not[ @id="gender" ]] 
## Xpath Axes
- Cú pháp: //tag[ condition ]/relationship::tagname[ @att="value"]

