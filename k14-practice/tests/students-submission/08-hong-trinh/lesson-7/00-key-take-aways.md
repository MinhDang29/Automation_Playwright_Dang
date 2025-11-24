## Những mối quan hệ trên cây DOM 

- self: nốt hiện tại đang được trỏ vào
- parent: nốt cha - là nốt phía trên trực tiếp của nốt hiện tại
- children: nốt con- là nốt phía dưới của note hiện tại
- acestor: tổ tiên - nằm phía trên *nốt cha* của node hiện tại (là node cha của node cha - of self node)
- decentdant: hậu duệ - là node con, cháu, chắt (là node nằm trong node mở và đóng của node hiện tại)
- sibling: những node phân tử cùng cấp và cùng cha / CÓ SIBLING TRƯỚC (preceding) VÀ SIBLING SAU (following)
*note*: f
following không bao gồm con cháu của node hiện tại
preceding: không phải là tổ tiên của thẻ hiện tại
+ chú ý: nằm ở trước mà không phải cha hay tổ tiên thì là preceding

following sibling: thẻ anh em cùng cấp nhưng nằm sau thẻ hiện tại

## advance mathod finding xpath

wild card * không quan tâm keieur gì
- kiểu thuộc tính: đi theo thuọc tính id, name
- and và or:  khi kết hợp tìm với nhiều điều kiện
- hàm nomailize space - loại bỏ khoảng trắng đầu cuối tìm ra text
- text hay path quá dài --> dùng contains bất kì vị trí nào
- stars -with: tìm những phần tử bắt đầu bằng xxx
- not: phủ định những cái đang tìm