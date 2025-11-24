# Selector Advanced (Lesson 7)

## 1. DOM
### 1.1 DOM: visualize

### 1.2 DOM: quy ước
- Node gốc
- Node hiện tại
- Node cần chú ý

![DOM-Quy-Uoc](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-quy-uoc.png)

### 1.3 DOM: relation

- self: Node hiện tại

![DOM-self](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-self.png)

- parent: là node phía trên trực tiếp của node hiện tại

![DOM-parent](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-parent.png)

- children: 
    - là node phía dưới trực tiếp của node hiện tại
    - Trong hình là các node: con1, con2, con3

![DOM-children](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-quy-uoc.png)

- ancestor: tổ tiên là các node:
    - (1) cha
    - (2) cha của (1)
    - (3) cha của (2)
    ...

![DOM-ancestor](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-ancestor.png)

- descendant: 
    - hậu duệ là các node con, cháu, chắt, ...
    - Trong hình là các node:node3, node con, node 4, node 5, node cháu, node 6

![DOM-descendant](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-descendant.png)

- sibling: là những phần tử cùng cấp và cùng cha

![DOM-sibling](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-sibling.png)

- following:
    - Gồm các node ở phía bên tay phải của node hiện tại
    - Trong hình là các node: table, iframe, thead, tbody

    ![DOM-following](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-following.png)

- preceding:
    - Gồm các node ở phía bên tay trái của node hiện tại, trừ các node ancestor

    ![DOM-preceding](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-precedg.png)

- following-sibling: 
    - anh em phía sau
    - tương đương following + sibling

    ![DOM-follow-sibling](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-follow-siblg.png)

- preceding-sibling: 
    - là anh em phía trước
    - tương đương preceding + sibling

    ![DOM-pre-sibling](/tests/students-submission/12-my-phuong/lesson-07/images/DOM-pre-sibling.png)

## 2. XPath (Advance methods)
### 2.1 XPath: advance methods

Ví dụ ta có đoạn HTML như bên dưới:

```
<div class="container">
    <h1>Title</h1>
    <p class="intro" title="greeting"> Hello World </p>
    <p class="content">Welcome to XPath</p>
    <a href="https://example.com" class="link active">Click here</a>
    <span id="note">Important Note</span>
</div>
```

- wildcard: * 
    được dùng để chọn tất cả các phần tử hoặc thuộc tính mà không cần chỉ định tên cụ thể.

```
//div/*

=> Kết quả: Chọn <h1>, <p>, <a>, <span> trong div.container.
```
- chứa thuộc tính: Dùng @ để kiểm tra sự tồn tại của một thuộc tính mà không cần quan tâm giá trị của nó.
```
//*[@class]

=> Kết quả: Chọn <div class="container">, <p class="intro">, <p class="content">, <a class="link active">.
```
- and và or: 
    - and: Kết hợp nhiều điều kiện, tất cả phải đúng.
    - or: Kết hợp nhiều điều kiện, chỉ cần một điều kiện đúng.
```
//*[@class and @title]
=> Kết quả: Chọn <p class="intro" title="greeting">

//p[@class='intro' or @class='content']
=> Kết quả: Chọn cả hai thẻ <p>.

```
- innerText: text() : loại bỏ khoảng trắng thừa (dẫn đầu, kết thúc, hoặc nhiều khoảng trắng liên tiếp) trong văn bản.
```
//p/text()
=> Kết quả: Trả về "Hello World", "Welcome to XPath"
```
- normalize-space(): loại bỏ khoảng trắng thừa (dẫn đầu, kết thúc, hoặc nhiều khoảng trắng liên tiếp) trong văn bản.
```
//p[@class='intro']/normalize-space()
=> Kết quả: Trả về "Hello World" (loại bỏ khoảng trắng thừa ở đầu và cuối).
```
- contains: kiểm tra xem một chuỗi có chứa một chuỗi con cụ thể hay không.
```
//*[contains(text(), 'Note')]
=> Kết quả: Chọn <span id="note">.

```
- starts-with: kiểm tra xem một chuỗi bắt đầu bằng một chuỗi con cụ thể hay không.
```
//*[starts-with(text(), 'Welcome')]
=> Kết quả: Chọn <p class="content">

```
- not: Toán tử not phủ định một điều kiện, chọn các phần tử không thỏa mãn điều kiện.
```
//p[not(contains(text(), 'Hello'))]
=> Kết quả: Chọn <p class="content">
```

### 2.2 XPath: axes

Ví dụ đoạn HTML mẫu:

```
<div class="container">
    <h1>Title</h1>
    <p class="intro">Hello World</p>
    <p class="content">Welcome to XPath</p>
    <a href="https://example.com" class="link">Click here</a>
    <span id="note">Important Note</span>
</div>
```

- parent : Chọn phần tử cha của một phần tử cụ thể.
```
//p[@class='intro']/parent::*

=> Kết quả: <div class="container">
```
- child: Chọn các phần tử con trực tiếp của một phần tử.
```
//div/child::p

=> Kết quả: Chọn <p class="intro">, <p class="content">

```
- ancestor: Chọn tất cả các phần tử tổ tiên (cha, ông, cụ, ...) của một phần tử.
```
//a/ancestor::div

=> Kết quả: Chọn <div class="container">
```
- descendant: Chọn tất cả các phần tử con cháu (con, cháu, chắt, ...) của một phần tử.

```
//div/descendant::p

=> Kết quả: Chọn <p class="intro">, <p class="content">.

```

- following: Chọn tất cả các phần tử xuất hiện sau phần tử hiện tại.

```
//p[@class='intro']/following::p

=> Kết quả: Chọn <p class="content">

```

- preceding: Chọn tất cả các phần tử xuất hiện trước phần tử hiện tại trong tài liệu (theo thứ tự tài liệu, không nhất thiết là anh em).

```
//a/preceding::p

=> Kết quả: Chọn <p class="intro">, <p class="content">
```

- following-sibling: Chọn các phần tử anh em (cùng cấp) xuất hiện sau phần tử hiện tại.

```
//p[@class='intro']/following-sibling::p

=> Kết quả: Chọn <p class="content">.

```

- preceding-sibling: Chọn các phần tử anh em (cùng cấp) xuất hiện trước phần tử hiện tại.

```
//a/preceding-sibling::p

=> Kết quả: Chọn <p class="intro">, <p class="content">.
```
*Lưu ý: cú pháp chung*

```
//tag/relation::tagname[@attr='value']
```




 