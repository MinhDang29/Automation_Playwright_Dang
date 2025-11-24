# Javascript

## Object destructuring

destruct = phá huỷ, dỡ bỏ
Sự cần thiết: giảm duplication
Vd

```
const myClass = {
 code: 'K6',
 course: 'Full-stack QA',
 name: “Phuong”
};
const { code, course, name } = myClass;
console.log(code); // => 'K6'
console.log(course); // => 'Full-stack QA'
```

Các trường hợp destructuring

- Multiple property
  Dùng trong trường hợp bạn muốn destructuring nhiều thuộc tính của object:

`const { prop1, prop2, ..., propN } = object`

- Default value
  Dùng trong trường hợp bạn muốn đặt giá trị mặc định cho một thuộc tính.

`const { prop = 'Default' } = object;`

- Alias
  Dùng trong trường hợp bạn muốn đặt một cái tên khác cho property

`const { prop: myProp } = object;`

- Deep property
  Dùng trong trường hợp bạn muốn destructuring các object nằm sâu bên trong một object khác

`const { prop: { deepProp } } = object;`

# Playwright

## Fixture

- Playwright sử dụng concept fixture
- Fixture dùng để khởi tạo các environment khác nhau cho các test.
- Fixture là isolate giữa các test.
- Fixture giúp nhóm các test dựa trên ý nghĩa, thay vì common setup
- Cú pháp
```
const test = base.extend({todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');
    await use(todoPage);
    await todoPage.removeAll();
    },
}); 
```
- Fixture nhớ kĩ:
  - Trước use: giống beforeEach
  - use: chạy code trong test
  - Sau use: giống afterEach
- Sử dụng test.extend() để tạo mới một test object.
- Cách tổ chức fixture (merge fixture)
- Cú pháp
```
import { mergeTests } from "@playwright/test";
import { test as t1 } from './fixture-1';
import { test as t2 } from './fixture-2';

export const test = mergeTests(t1, t2);
```


