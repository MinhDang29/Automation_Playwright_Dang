# Page Object Model (Lesson 10)

## 1. Class - Extends
- Sử dụng extends để kế thừa.
```
class A extends class B {
    constructor() {
    super()
    }
}
```
=> class A là class con, class B là class cha
- super = gọi tới hàm tạo của class cha
- Khi class A kế thừa class B, A chứa toàn bộ các property và method của B.

## 2. Page Object Model(POM)
![POM](/tests/students-submission/12-my-phuong/lesson-10/image-key-takeaways/POM.png)

### 2.1 POM là gì?

- POM = Page Object Model
- Là 1 design pattern
- Thường sử dụng trong automation test

### 2.1 Tại sao cần sử dụng POM?

Lợi ích của POM:
- Tái sử dụng code
- Giúp tổ chức code gọn gàng
- Dễ bảo trì

### 2.3 Note: Tiêu chuẩn của  POM

- Lưu ý: không có 1 chuẩn chung nào cho POM

- Dựa trên:
    - Framework
    - Ngôn ngữ
    - Author
    - Sở thích

### 2.4 Viết POM như thế nào?

- Core concept:
    - Mỗi page là một class
    - Có thuộc tính (property) và phương thức (method) riêng
- **Property (thuộc tính)**: biểu thị các phần tử trên trang
- **Method (phương thức)**: biểu thị hành động của người dùng

### 2.5 Multiple POM: extends

Là khi nhiều lớp Page Object (như LoginPage, DashboardPage) kế thừa từ một lớp cha (BasePage) bằng từ khóa extends để tái sử dụng các thuộc tính/phương thức chung, đồng thời tùy chỉnh cho từng trang cụ thể.

Ví dụ:

- Base page (lớp cha)

```
import { Page } from '@playwright/test';

export class BasePage {
  page: Page;
  homeLink = '#nav-home'; // Common element selector

  constructor(page: Page) {
    this.page = page;
  }

  // Common method
  async clickHomeLink() {
    await this.page.click(this.homeLink);
  }

  // Method to be overridden
  async getPageTitle() {
    return await this.page.title();
  }
}
```
- Login page (lớp con)

```
import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  usernameField = '#username';
  passwordField = '#password';

  constructor(page: Page) {
    super(page);
  }

  // Override getPageTitle
  async getPageTitle() {
    return 'Login Page - MyApp';
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click('button[type="submit"]');
  }
}
```

- Dashboard page (lớp con)

```
import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  welcomeMessage = '#welcome-message';

  constructor(page: Page) {
    super(page);
  }

  // Override getPageTitle
  async getPageTitle() {
    return 'Dashboard - MyApp';
  }

  async getWelcomeMessage() {
    return await this.page.textContent(this.welcomeMessage) || '';
  }
}
```

- Example page

```
import { test } from '@playwright/test';
import { LoginPage } from './loginPage';
import { DashboardPage } from './dashboardPage';

test('Login and verify dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://example.com/login');
  await loginPage.clickHomeLink();
  await loginPage.login('user', 'pass');

  const dashboardPage = new DashboardPage(page);
  console.log('Welcome Message:', await dashboardPage.getWelcomeMessage());
});
```

### 2.6 Note: override property

- Khi lớp con override thuộc tính/phương thức của lớp cha để tùy chỉnh giá trị hoặc hành vi cho trang cụ thể, tăng tái sử dụng code và linh hoạt.

- Login page and Dashboard page override **getPageTitle** method của Base page

Base page (lớp  cha)

```
import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Property (phương thức) có thể được override
  async getPageTitle(): Promise<string> {
    return await this.page.title(); // Tiêu đề mặc định từ trình duyệt
  }
}
```

Login page (lớp con)

```
import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Override getPageTitle để trả về tiêu đề cụ thể cho trang Login
  async getPageTitle(): Promise<string> {
    return 'Login Page - MyApp';
  }
}
```

Dashboard page (lớp con)

```
import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Override getPageTitle để trả về tiêu đề cụ thể cho trang Dashboard
  async getPageTitle(): Promise<string> {
    return 'Dashboard - MyApp';
  }
}
```

*Note*:

Promise trong Playwright được dùng để đảm bảo các hành động trên trang web (như page.click(), page.fill(), page.title()) hoàn thành trước khi thực hiện bước tiếp theo. Ví dụ, page.title() trả về Promise<string>, và await đảm bảo bạn nhận được tiêu đề trang trước khi xử lý tiếp.

Tóm lại Promise đảm bảo tác vụ hoàn thành đúng thứ tự và xử lý bất đồng bộ một cách trơn tru, tránh lỗi do dữ liệu chưa sẵn sàng.


## 3. Kiến thức bổ sung

### 3.1  Kế thừa
Kế thừa (extends)
- Kể thừa giúp tái sử dụng các thuộc tính của phần tử cha.
- Hàm tạo (constructor) là hàm sẽ chạy khi bạn khởi tạo một object.

Ví dụ:

```
Hàm tạo:

export class SimpleClass {
    constructor {
        console.log("Hello Playwright)
    }
}

Sử dụng: const instance = new SimpleClass();

```

Khi khởi tạo một đối tượng mới từ class SimpleClass, hàm console.log sẽ tự được chạy.

 - Từ khóa *super ()* dùng để gọi hàm tạo của hàm cha. Khi kế thừa thì luôn cần gọi *super ()* trong hàm cha.

### 3.2 Export     

- Từ khóa export giúp chúng ta có thể xuất 1 biến, 1 hằng số ở 1 file và nhập (import) dùng ở file khác.

Ví dụ:

```
Tại file login-page.ts

export class LoginPage {
    // Some code...
}

```

```
Tại file test.spec.ts
import { LoginPage } from './page/login-page';
    // Some code...
```

**Lưu ý**

- Cấu trúc thư mục:
```
|---- test.spec.ts
|--—- page|
|    |---—login-page.ts
```
- *from './page/login-page';* là đường dẫn để đi tới login-page cần import. Do login-page này nằm trong thư mục page nên cần định nghĩa vào trong import.

- Ta có thể viết *from './page/login-page.ts';* hoặc bỏ đuôi .ts trong phần import: *from './page/login-page' ;*, vì Javascript sẽ tự động thêm đuôi . ts khi tìm kiếm

- Để import file nằm ở thư mục bên ngoài, ta dùng .. để đi ra folder cha của folder hiện tại.
    - VD: '../../login-page.ts'

### 3.3 Refactoring

- Refactoring là viết lại source code một cách khoa học hơn mà vẫn giữ được tính đúng đắn và giá trị về chức năng của source code đó.
- Tại sao phải refactoring code
    - Refactoring không hề làm hệ thống chạy nhanh hơn, bảo mật hơn tuy nhiên nó sẽ giúp source code dễ tiếp cận, dễ đọc, dễ hiểu từ đó giúp ích rất nhiều cho quá trình bảo trì, mở rộng hệ thống.
- Khi nào thì thực hiện refactoring
    - Bất cứ khi nào bạn muốn đoạn code của mình "tốt hơn" thì đều có thể thực hiện refactoring.

- Tuy nhiên một số giai đoạn dưới đây được cho là thích hợp hơn để làm refactoring.
    - Khi thêm chức năng mới vào source cũ
    - Khi tiến hành review code
    - Khi cần handover (bàn giao) lại

- Một số dấu hiệu cần refactoring (smell)
    - Smell: Method, functions quá dài
    - Smell: quá nhiều parameters trong method, functions
    - Smell: Class quá lớn



