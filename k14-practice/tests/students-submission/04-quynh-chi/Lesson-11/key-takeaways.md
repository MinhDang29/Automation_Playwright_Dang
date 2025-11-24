### Tổng hợp kiến thức Lesson 11 - API Testing 
## Định nghĩa: 
* API = Application Programming Interface -> API là công cụ trung gian giúp giao tiếp giữa dữ liệu của hệ thống với giao diện người dùng
## Tại sao cần test API: 
* Phát hiện sớm các lỗi, kể cả phía FE chưa làm xong
* Test tích hợp giữa các service khác nhau
## Các định dạng sử dụng trong API
* XML: Extensible Markup Language
* JSON: JavaScript Object Notation
## Các loại API
* SOAP: Simple Object Access Protocol - trả về XML
* RPC: Remote Procedure Call
* REST: Representational State Transfer -> chủ yếu dùng loại này
## Authentication:
* Authentication: quá trình sử dụng các thông tin xác thực như username, password hay secret key để hệ thống validate được đó là bạn.
* thường sử dụng 2 cách để authentication:
<br> - Sử dụng header: thêm authentication token vào header
<br> - Sử dụng cookie
## API components
* API giao tiếp với nhau qua giao thức HTTP/ HTTPS
<br> - HTTP (Hypertext Transfer Protocol): không có mã hoá
<br> - HTTPS (Hypertext Transfer Protocol Secure): có mã hoá
* Client: gửi đi yêu cầu (Request) - Request: 
<br> - URL: Base URL - Endpoint - Parameter
<br> - Method
<br> - Header
<br> - Body
* Server: trả về kết quả (Response) - Response: 
<br> - Status code
<br> - Header
<br> - Body
## API với Playwright
* Sử dụng request ﬁxture để thực hiện gọi API.
* Lưu ý về cách lấy response:
<br> - response.json(): trả về object
<br> - response.text(): trả về string