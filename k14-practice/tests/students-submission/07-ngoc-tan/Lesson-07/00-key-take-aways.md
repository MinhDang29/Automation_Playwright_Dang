## 🎓Lesson 07: Selector Advanced

### I. DOM – Quan hệ giữa các phần tử

**1. Các mối quan hệ trong DOM:**

| Tên quan hệ | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `self` | Node hiện tại | `.` |
| `parent` | Node cha | `..` |
| `child` | Node con trực tiếp | `div/button` |
| `ancestor` | Bất kỳ phần tử tổ tiên (cha, ông bà, v.v...) | `ancestor::div` |
| `descendant` | Các phần tử con, cháu, chắt (nằm bên dưới) | `descendant::span` |
| `sibling` | Các phần tử cùng cấp, cùng cha | — |
| `following` | Tất cả các node phía sau | `following::div` |
| `preceding` | Tất cả các node phía trước (trừ ancestor) | `preceding::div` |
| `following-sibling` | Các phần tử cùng cấp đứng sau node hiện tại | `following-sibling::li` |
| `preceding-sibling` | Các phần tử cùng cấp đứng trước node hiện tại | `preceding-sibling::li` |

---

### II. XPath nâng cao

**1. Wildcard `*`:** Chọn bất kỳ thẻ HTML nào

🔸 `//div/*` → Chọn tất cả phần tử con trong thẻ `div`

**2. Lọc theo thuộc tính:**

🔸 `//input[@type='text']` → Chọn thẻ `input` có `type=text`

**3. Kết hợp điều kiện:**

- `and`: tất cả điều kiện phải đúng
    
    🔸 `//input[@type='text' and @name='username']`
    
- `or`: chỉ cần 1 điều kiện đúng
    
    🔸 `//input[@type='text' or @type='password']`
    

**4. Chọn theo nội dung văn bản:**

🔸 `//button[text()='Submit']`

**5. Xóa khoảng trắng thừa:**

🔸 `//span[normalize-space(text())='Hello']`

**6. Kiểm tra chuỗi chứa:**

🔸 `//a[contains(@href, 'login')]` → Chọn thẻ `a` có đường dẫn chứa 'login'

**7. Kiểm tra bắt đầu bằng:**

🔸 `//input[starts-with(@id, 'user_')]`

**8. Phủ định điều kiện:**

🔸 `//div[not(contains(@class, 'hidden'))]` → Lọc bỏ phần tử có class `hidden`

---

### III. XPath Axes (Trục XPath)

Cú pháp:

```jsx
//tag/axis::tagname[@attribute='value']
```

| Trục | Ví dụ |
| --- | --- |
| `parent` | `//span/parent::div` |
| `child` | `//div/child::span` |
| `ancestor` | `//input/ancestor::form` |
| `descendant` | `//form/descendant::input` |
| `following-sibling` | `//h2/following-sibling::p` |
| `preceding-sibling` | `//li/preceding-sibling::li` |