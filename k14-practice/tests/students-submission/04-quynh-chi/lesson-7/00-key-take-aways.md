### Tổng hợp hợp kiến thức Lesson 7 - Xpath

## Dom relation

- self: node hiện tại
- parent: node phía trên trực tiếp của node hiện tại
- children: là node phía dưới trực tiếp của node hiện tại
- ancestor: tổ tiên
- descendant: hậu duệ
- sibling: Là những phần tử cùng cấp và cùng cha
- following: gồm các node ở phía bên tay phải của node hiện tại
- preceding: gồm các node ở phía bên tay trái của node hiện tại, trừ các node ancestor
- following-sibling = following + sibling
- preceding-sibling = preceding + sibling

## Xpath Advance methods

- wildcard: \*
- chứa thuộc tính: //thẻ[@thuộc tính = 'value']
- and và or: điều kiện //thẻ[@thuộc tính = 'value' and/or @thuộc tính = 'value']
- innerText: tìm chính xác text đang có: //thẻ[text() = 'value']
- normalize-space(): text có khoảng trắng ở đầu hoặc ở cuối: //thẻ[normalize-space = 'value']
- contains: //thẻ[contains(text(), 'value')]
- starts-with: //thẻ[starts-with(text(), 'value')] hoặc //thẻ[starts-with(@thuộc tính,'value')]
- not: phủ định lại những phần đang tìm: //thẻ[not(.....)]

## XPath Axes

- parent: //thẻ[@thuộc tính = 'value']/parent::thẻ
- child: //thẻ[@thuộc tính = 'value']/child::thẻ
- ancestor: //thẻ[@thuộc tính = 'value']/ancestor::thẻ
- descendant: //thẻ[@thuộc tính = 'value']/descendant::thẻ
- following: //thẻ[@thuộc tính = 'value']/following::thẻ
- preceding: //thẻ[@thuộc tính = 'value']/preceding::thẻ
- following-sibling: //thẻ[@thuộc tính = 'value']/following-sibling::thẻ
- preceding-sibling: //thẻ[@thuộc tính = 'value']/preceding-sibling::thẻ
