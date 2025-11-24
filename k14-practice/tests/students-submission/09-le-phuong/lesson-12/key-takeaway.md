# Outline 
### POM API 
* Mục Tiêu 
- File gọn gàng hơn - Không chứa các setup (baseURL, url của các API khác nhau)
- Tái sử dụng API methods như login(), createUser().. nhiều lần.
* Cách tổ chức POM API 
- Có thuộc tính: request 
- Có thuộc tính baseURL
<br> Cấu trúc thư mục gợi ý
```
playwright-api-pom/
├── tests/
│   ├── user.test.ts
│   └── auth.test.ts
├── apis/
│   ├── baseAPI.ts
│   ├── userAPI.ts│
   └── authAPI.ts
├── utils/
│   └── testData.ts
├── playwright.config.ts
├── tsconfig.json
└── package.json
baseAPI.ts – lớp cơ sở cho các API object

```
example: 
```
import { APIRequestContext } from '@playwright/test';
export class BaseAPI {  protected request: APIRequestContext;
  constructor(request: APIRequestContext)
 {   this.request = request;  } 
  ```
  userAPI.ts
     – định nghĩa các endpoint liên quan tới
  userauthAPI.ts  – xử lý xác thực
  user.test.ts   – ví dụ một test với POM + Playwrightplaywright.config.ts – cấu hình cơ bản
  ```

  ### POM Style
  #### POM manager
  - Quản lý nhiều page object.
  - Các page objects có thể được tạo vàtruy cập từ một nơi duy nhất
  .- Các page objects độc lập với nhau
  - Các page chỉ được tạo khi cần thiết.

  |Tính năng	|Lợi ích	
  |:-------|:------:|
  |Tạo POM một lần duy nhất	|Tránh duplicate code, dễ bảo trì|
  Quản lý phụ thuộc & context		|Có thể inject token/context sau login|
  Test code sạch & ngắn gọn	|Test file chỉ cần gọi .getXYZAPI()
<br> Example cấu truc page: register, login, comment
apis/
├── authAPI.ts
├── userAPI.ts
├── commentAPI.ts
└── pomManager.ts 

##### Return POM from another POM : 
Các method của 1 Page Object trả vềPage Object khác.
<br> example cấu truc page: register, login, comment
```
apis/
├── baseAPI.ts
├── authAPI.ts
├── userAPI.ts
└── commentAPI.tstests/
└── register-login-comment.test.ts
```
* So sánh POM Manager and Return POM from another POM

|Tiêu chí	|POM Manager |Return POM from another POM
|:-------|:------:|-------:|
|Mục tiêu chính| Quản lý lifecycle và cung cấp tất cả các POM | Tạo flow liền mạch giữa các bước logic
|Cách khởi tạo POM | Qua phương thức .getXYZ() từ manager| Qua hành động (ví dụ: login() → return UserAPI)
|Kiểu thiết kế	|Centralized / Singleton pattern	| Chainable / Flow pattern
|Khi nào dùng?	|Khi cần dùng nhiều POM độc lập, chia sẻ context| Khi POM phụ thuộc kết quả hành động của POM trước
|Ví dụ thường gặp	|UI: HomePage, LoginPage, CartPage (riêng lẻ)| login() → DashboardPage, createPost() → PostPage
|Khả năng tái sử dụng	|Rất cao, cố định theo context| Phụ thuộc luồng logic hoặc dữ liệu

* Khi nào dùng cái nào?

|Tình huống	|Gợi ý |
|:-------|:------:|
|Dự án lớn, nhiều API/POM không liên kết trực tiếp| Dùng POM Manager để dễ tổ chức
|Flow nhiều bước nối tiếp nhau, có phụ thuộc (login → comment) | Dùng Return POM from POM để code dễ đọc
|Kết hợp cả hai	|Dùng POM Manager để khởi tạo ban đầu, và từng POM có thể return các POM phụ thuộc nếu cần


