import { test } from "@playwright/test";

test("Truy cập trang https://material.playwrightvn.com/", async ({ page }) => {
  // Truy cập trang chính
  await page.goto("https://material.playwrightvn.com/");

  // 2. click vào “Bài học 3
  await page.locator('a[href="03-xpath-todo-list.html"]').click();
  const taskInput = page.locator('input[id="new-task"]');
  const addTask = page.locator('button[id="add-task"]');
  for (let i = 1; i <= 100; i++) {
    const todoText = `Todo ${i}`;
    await taskInput.fill(todoText); // Điền nội dung vào trường input
    await addTask.click(); 
  } 
  
  // b. Xoá các todo có số lẻ  => câu này mình chưa biết làm

});
