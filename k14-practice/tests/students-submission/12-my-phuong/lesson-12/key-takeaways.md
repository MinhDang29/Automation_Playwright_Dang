# POM API, other POM styles (Lesson 12)

## 1. POM API - Tổ chức POM cho API Test

- Mục tiêu:
    - File test gọn gàng hơn.
    - Không chứa các setup (baseURL, url của các API)
- Cách tổ chức POM API
    - Có thuộc tính: request
    - Có thuộc tính: baseURL
    - Define các endpoint giống như các XPath
- Ví dụ: 

```
Đây là file POM SignUpAPI:

import {APIRequestContext, APIResponse} from "playwright";

export class SignUpAPI{

    request: APIRequestContext;
    baseUrl = 'https://conduit-api.bondaracademy.com';
    endpointSignUp = '/api/users';

    constructor(request: APIRequestContext){
        this.request = request;
    }

    /**
    * Sign Up
    * @param email
    * @param username
    * @param password
    * @return response
    */
    async signUp(email: string, username: string, password: string): Promise <APIResponse>{
        const requestURL: string = `${this.baseUrl}${this.endponintSignUp}`;
        const res = await this.request.post(requestURL, {
            data: {
                'user': {
                    'email': email,
                    'password': password,
                    'username': username
                }
            }
        });
        return res;
    }
}
```
```
Đây là file test SignUp api:

const email = 'test123@gmail.com';
const username = 'Test 123';
const password = 'ahhh@123'
let signUpAPI: SignUpAPI

test.describe('Exercise 11', async({request}) =>{

    test('Test1:  Dang ky tai khoan', async ({request}) => {
        signUpAPI = new SignUpAPI(request);
        const response: APIResponse = await signUpAPI.signUpAPI(email, username, password);
        
        // verify status code
        expect (response.status()).toBe(201);

        // verify data response
        const resBody = await response.json();
        const actualEmail: string = resBody.user.email;
        const actualUsername: string = resBody.user.username;

        expect(actualEmail).toBe(email);
        expect(actualUsername).toBe(username);
    })
})

```

## 2. POM styles
### 2.1 POM Manager
- Quản lý nhiều page object.
- Các page objects có thể được tạo và truy cập từ một nơi duy nhất.
- Các page objects độc lập với nhau.
- Các page chỉ được tạo khi cần thiết.

```
import { Page } from "@playwright/test";
import { LoginPage } from "./00-pom-login";
import { DashboardPage } from
"./00-pom-dashboard";
export class PomManager {
    page: Page;
    constructor(page: Page) {
    this.page = page;
    }
    getLoginPage() {
        return new LoginPage(this.page);
    }
    getDashboardPage() {
        return new DashboardPage(this.page);
    }
}
```

```
import { APIRequestContext, APIResponse } from "playwright";
import { SignUpAPI } from "./sign-up-api";
import { SignInAPI } from "./sign-in-api";
import { ArticleAPI } from "./article-api";

export class POMManager{
    request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    getSignUpAPI(): SignUpAPI {
        return new SignUpAPI(this.request);
    }

    getSignInAPI(): SignInAPI {
        return new SignInAPI(this.request);
    }

    getArticleAPI(): ArticleAPI {
        return new ArticleAPI(this.request);
    }
}

```

### 2.2 Return POM from another POM

- Các method của 1 Page Object trả về Page Object khác.
- Ex: login > add to cart > checkout > confirm

```
import { Page } from '@playwright/test';
import { DashboardPage } from './00-pom-dashboard';
export class LoginReturnPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    login() {
        const dashboardPage =
        return new DashboardPage(page);
        return new DashboardPage(this.page);
    }
}
```

```

```
## 3. Kiến thức bổ sung
### 3.1 expect().toBeInstanceOf()

Để kiểm tra một đối tượng có thuộc kiểu của 1 class hay không, ta dùng expect().toBeInstanceOf();

```
const myPage = await basePage.gotoPage("Product Page");
expect(myPage).toBeInstanceOf(ProductPage);

```

### 3.2 Ép kiểu

- Khi một hàm trả về nhiều kiểu giá trị, ta có thể “ép kiểu” (hay còn gọi là type casting) tới một kiểu giá trị mong muốn.
- Việc này giúp cụ thể kiểu giá trị của Object, giúp code dễ dàng hơn.
- Để thực hiện ép kiểu, ta dùng cú pháp: 

```
    object as Class
```

- Ví dụ:

```
    const myPage = await basePage.gotoPage("Product page");
    productPage = myPage as ProductPage;

```

