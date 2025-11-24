## 🎓Lesson 08: Playwright Test (cont)

### 1. Test Suite với `test.describe`

- `test.describe()` được dùng để nhóm các test case lại thành một test suite, giúp tổ chức và quản lý các test dễ dàng hơn.

```jsx
test.describe('My Test Suite', () => {
  test('test case 1', async ({ page }) => {
    // test logic
  });
});
```

---

### 2. Test Hooks (Các thời điểm chạy code hỗ trợ test)

Hooks cho phép bạn chạy các đoạn code tại các thời điểm cụ thể trong quá trình chạy test case hoặc test group.

| Hook | Ý nghĩa |
| --- | --- |
| `beforeAll` | Chạy một lần trước tất cả test case trong test suite |
| `beforeEach` | Chạy trước mỗi test case |
| `afterEach` | Chạy sau mỗi test case |
| `afterAll` | Chạy một lần sau tất cả test case trong test suite |

---

**Ví dụ về thứ tự chạy hook trong test suite có 2 test case:**

```bash
beforeAll (test suite)
  beforeEach (test case 1)
	  test case 1
  afterEach (test case 1)
  
  beforeEach (test case 2)
	  test case 2
  afterEach (test case 2)
afterAll (test suite)
```

---

### 3. Assertion – Kiểm tra kết quả test

Assertions dùng để xác nhận kết quả mong đợi sau khi thực hiện các bước trong test case.
**3.1 Assertion ngay lập tức (Immediate assertion)**

- Kiểm tra trạng thái hoặc giá trị ngay khi câu lệnh được gọi.

```jsx
expect(value).toBe(expected);
```

Ví dụ:

```jsx
expect(2 + 2).toBe(4);
```

**3.2 Web-first assertion (Assertion trên web elements)**

- Playwright tích hợp cơ chế chờ tự động (auto-waiting) cho các element khi dùng assertion.
- Giúp tránh lỗi khi phần tử chưa kịp hiển thị hoặc trạng thái chưa đúng lúc kiểm tra.

Ví dụ:

```jsx
await expect(page.locator('text=Submit')).toBeVisible();
```

Ở đây, Playwright sẽ tự động đợi phần tử `"Submit"` hiển thị rồi mới thực hiện kiểm tra.

---

### 4. Tổng kết

- `test.describe` giúp nhóm test case.
- Hooks (`beforeAll`, `beforeEach`, `afterEach`, `afterAll`) giúp thiết lập và dọn dẹp môi trường test.
- Assertion kiểm tra kết quả đúng/sai, bao gồm kiểm tra giá trị ngay lập tức và kiểm tra trạng thái phần tử web.
- Web-first assertion là điểm mạnh của Playwright, giảm thiểu lỗi timing khi test UI.