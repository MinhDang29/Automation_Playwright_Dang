# Key Takeaways - Playwright Lesson 8

## 1. Tổng quan về Playwright  
- **Test Group / Suite**: Nhóm các test lại giúp dễ quản lý.  
- **Hooks**: Các thời điểm chạy test (`beforeAll`, `beforeEach`, `afterEach`, `afterAll`).  
- **Assertion & Web-first Assertion**: Xác nhận kết quả test, tối ưu thời gian chờ trong automation test.

---

## 2. Test Suite với `test.describe`  
- **Cú pháp:**  
  ```js
  test.describe('Tên suite', async () => { 
      test('Test 1', async ({ page }) => { /* code... */ });
      test('Test 2', async ({ page }) => { /* code... */ });
  });
HEAD
HEAD

-
 ff4e5c9 (Add key takeaway for Lesson 8)

 e904d57 (feat: Add lesson 8 homework)
Lợi ích: Nhóm test case lại để dễ quản lý.

## 3. Test Hooks
- Trước, trong, sau khi chạy test (test-level hooks).

- Trước, trong, sau khi chạy cả suite (suite-level hooks).

- Các loại hooks trong Playwright:

**beforeAll()**: Chạy trước toàn bộ test trong suite.

**beforeEach()**: Chạy trước mỗi test case.

**afterEach()**: Chạy sau mỗi test case.

**afterAll()**: Chạy sau toàn bộ test trong suite.

## 4. Web-first Assertion vs Hard Wait
- Hard Wait (waitForTimeout(5000)): Chờ cứng 5s trước khi kiểm tra kết quả, có thể gây chậm hệ thống.

- Web-first Assertion (await expect(element).toBeVisible()):

- Kiểm tra điều kiện liên tục, tối đa 5s.

*Nếu điều kiện đạt sau 3s, test thoát ngay mà không chờ hết 5s.*

*✅ Ưu điểm: Giúp kiểm thử tự động nhanh hơn, tối ưu hiệu suất.*