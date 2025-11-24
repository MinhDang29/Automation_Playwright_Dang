# Lesson 13 – Fixtures & POM nâng cao (by Ha Khoa)

## 1. Object Destructuring trong JavaScript
- Giúp lấy nhiều thuộc tính từ object một cách gọn gàng
- Ví dụ:
  ```ts
  const { code, course } = myClass;
  ```
## 2. Fixture là gì?
- Fixture là “bộ setup” dùng để chuẩn bị dữ liệu/test environment

- Giống beforeEach, afterEach nhưng thông minh hơn

- Playwright hỗ trợ test.extend() để tạo fixture tùy chỉnh

- Ưu điểm: tách logic setup riêng, code test gọn hơn
## 3. Built-in fixture trong Playwright
- *page*: page riêng cho từng test

- *browser*, context, browserName: môi trường chạy

- *request*: dùng để test API
## 4. Tạo và sử dụng fixture tùy chỉnh
- Dùng test.extend({ ... })

- Dùng use() để truyền dữ liệu vào test chính

- Có thể tạo nhiều fixture riêng rồi merge bằng mergeTests()
## 5. POM nâng cao
### a. Return POM từ POM khác
- Từ LoginPage, return DashboardPage để chain hành động:
```
return new DashboardPage(this.page);
```
### b. POM Manager
- Tạo class quản lý nhiều page:
```
class PomManager {
  getLoginPage() {
    return new LoginPage(this.page);
  }
}
```
## Kiến thức bổ sung
### Multiple property
- Dùng trong trường hợp bạn muốn destructuring nhiều thuộc tính của object:
```
const { prop1, prop2, ..., propN } = object
```

### Default value
- Dùng trong trường hợp bạn muốn đặt giá trị mặc định cho một thuộc tính.
```
const { prop = 'Default' } = object;
```

### Alias
- Dùng trong trường hợp bạn muốn đặt một cái tên khác cho property
```
const { prop: myProp } = object;
```

### Deep property
- Dùng trong trường hợp bạn muốn destructuring các object nằm sâu bên trong một object khác
```
const { prop: { deepProp } } = object;
```