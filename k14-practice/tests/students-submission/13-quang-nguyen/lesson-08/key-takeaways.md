# Playwright
## Test suite/group
### Test describe
- Là tập hợp các test cases, nhóm các test cases lại cho dễ quản lý
- Cú pháp

        test.describe('<tên suite>', async () => { 
            test('test1', async ({ page }) => {
                // code ...
            });

            test('test 2', async ({ page }) => {
                // code ...
            });
        })

### Test hook
- Là các thời điểm chạy test/test group
- Các hooks bao gồm: beforeAll, beforeEach, afterEach, afterAll
## Playwright Assertion
- Có 2 dạng: 
    - Không dùng web-first assertion: Chờ cứng trong vòng 5s, sau 5s sẽ hiện kết quả (Thời gian đạt điều kiện xuất hiện ngẫu nhiên từ 1-5s)
    - Dùng web-first assertion: Chờ flexible, chỉ cần điều kiện đạt sẽ trả về kết quả ngay lập tức, tối đa là 5s
- Các assertion thường gặp: 

**Web-first assertion**

    - await expect(elem).toBeAttached();: Kiểm tra phần tử đã được gắn vào DOM
    - await expect(elem).toBeChecked();:  Kiểm tra phần tử đã được check. Thường dùng cho checkbox, radiobutton.
    - await expect(elem).toBeEditable(); Kiểm tra phần tử có thể sửa được. Thường dùng cho ô input
    - await expect(elem).toBeEmpty(); Kiểm tra phần tử rỗng. Thường dùng cho các phần tử warning, error.
    - await expect(elem).toBeEnabled(); Kiểm tra phần tử có được enable hay không. Thường dùng cho button hoặc input
    - await expect(elem).toBeFocused(); Kiểm tra phần tử có được focus hay không. Thường dùng cho input
    - await expect(elem).toBeHidden(); Kiểm tra phần tử có bị ẩn khỏi trang web hay không. Thường dùng cho các text thông báo
    - await expect(elem).toBeInViewport(); Kiểm tra phần tử có nằm trong viewport hay không.
    - await expect(elem).toBeVisible(); Kiểm tra phần tử có visible (hiển thị) haykhông
    - await expect(elem).toContainText("abc"); Kiểm tra phần tử có chứa text hay không
    - await expect(elem).toHaveAttribute("href"); Kiểm tra phần tử có thuộc tính hay không
    - await expect(elem).toHaveClass("class-name"); Kiểm tra phần tử có class hay không
    - await expect(elem).toHaveId("id") Kiểm tra phần tử có id hay không
    - await expect(elem).toHaveText(''); Kiểm tra phần tử có text hay không
    - await expect(elem).toHaveValue('') Kiểm tra input có chứa giá trị hay không

**Assertion**

    - expect().toBe(); Kiểm tra phần tử đã được gắn vào DOM
    - expect().toEqual(); Kiểm tra hai giá trị bằng nhau (so sánh sâu cho object/array)
    - expect().toContain(); Kiểm tra một phần tử có trong array hoặc chuỗi
    - expect().toBeTruthy(); Kiểm tra giá trị có "truthy" (không null, không false, không undefined)
    - expect().toBeFalsy(); Kiểm tra giá trị có "falsy" (null, undefined, 0, hoặc false)
    - expect().toBeGreaterThan(); Kiểm tra giá trị lớn hơn
    - expect().toBeLessThan(); Kiểm tra giá trị nhỏ hơn