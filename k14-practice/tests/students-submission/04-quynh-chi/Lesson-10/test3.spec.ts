import { TodoPage } from './base-page/todo-page';
import { expect, test } from "@playwright/test";

let todoPage: TodoPage;
const url = "https://material.playwrightvn.com/";
test.describe("Todo Page", async () => {
  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page, url);

    await todoPage.goToPage();
    await todoPage.clickTodoPage();
  });

  test("Todo Page", async ({ page }) => {
    await test.step("Add 100 todo items", async () => {
      for (let i = 1; i <= 100; i++) {
        await todoPage.inputNewTodo(`To do ${i}`);
        await todoPage.clickButtonAddTask();
      }
    });
    await test.step("Delete todo items have odd", async () => {
      // delete items
      page.on("dialog", (dialog) => dialog.accept());
      for (let i = 1; i <= 100; i++) {
        if (i % 2 === 1) {
          await todoPage.clickButtonDelete(i);
          // await page.locator(`//button[@id='todo-${i}-delete']`).click();
          // console.log(`Deleted todo item ${i}`);
        }
      }

      // expect result
      await expect(page.locator(todoPage.getItemInList(90))).toBeInViewport();
      await expect(page.locator(todoPage.getItemInList(21))).toBeHidden();
    });
  });
});
