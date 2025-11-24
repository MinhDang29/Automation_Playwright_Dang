# API Testing
- Application Programming  Interface 
- API là công cụ trung gian giúp giao tiếp giữa dữ liệu của hệ thống với giao diện người dùng
- Test APT giúp phát hiện sớm các lỗi, kể cả phía Front-end vẫn chưa xong 
- Test tích hợp giữa các service khác nhau
- XML: Extensible Markup Language
    - Có cấu trúc giống các thẻ HTML
    - Dùng cho SOAP 
```
<note>
    <to>Playwright Viet Nam</to>
    <from>Automation class</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend! </body>
</note>
```
- JSON: JavaScript Object Notation
    - Nằm trong ngoặc nhọn {} hoặc ngoặc vuông []
    - Có cấu trúc dạng "key": "value"
    - "kye": luôn có kiểu string và có ""
    - value có thể là kiểu:
        - string
        - number
        - boolean
        - object
        - array
        - null
    - Dùng trong REST
        - (Representational State Transfer)
- Các loại API
    - SOAP: Simple Object Access Protocol - trả về XML
    - RPC: Remote Procedure Call
    - REST: Representational State Transfer

- Authentication: quá trình sử dụng các thông tin xác thực như username, password hay secret key để hệ thống validate được đó là bạn.
- Trong API test, thường sử dụng 2 cách để authentication:
    - Sử dụng header: thêm authentication token vào header
    - Sử dụng cookie

## API components

- API giao tiếp với nhau qua giao thức HTTP/HTTPS
    - HTTP (Hypertext Transfer Protocol): không có mã hoá
    - HTTPS (Hypertext Transfer Protocol Secure): có mã hoá
- Client: gửi đi yêu cầu (Request)
- Server: trả về kết quả (Response)
```
- Request:
    - URL
        - Base URL
        - Endpoint
        - Parameter
            - Đầu tiên: ?
            - Từ thứ 2: &
    - Method
    - Header
    - Body

```
- GET: lấy dữ liệu
- POST: tạo mới dữ liệu
- PUT: update toàn bộ dữ liệu
- DELETE: xoá dữ liệu
- PATCH: update một phần dữ liệu
- OPTION: trả về danh sách các phương thức HTTP hỗ trợ endpoint
- HEAD: giống GET nhưng chỉ trả header
```
- Response
    - Status code
    - Header
    - Body
```

- 1xx: Phản hồi thông tin
    - 101: Switching protocol.
- 2xx: Thành công
    - 200: OK
    - 201: Created
- 3xx: chuyển hướng
    - 301, 302: Redirected
- 4xx: lỗi liên quan đến người dùng
    - 400: Bad Request
    - 401: Un-Authorized
    - 403: Forbidden
    - 404: Not Found
- 5xx: lỗi hệ thống
    - 500: Internal Server Error
    - 502: Bad Gateway

## API với Playwright

- Sử dụng request fixture để thực hiện gọi API.
    - Gọi các API mà không cần phải thực hiện thao tác thông qua trình duyệt
    - Thực hiện các thao tác gọi API trực tiếp trong code.
- Lưu ý về cách lấy response:
    - response.json(): trả về object
    - response.text(): trả về string
