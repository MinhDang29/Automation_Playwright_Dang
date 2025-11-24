import { Page } from "playwright";
import { MaterialBasePage } from "./material-base-page";

export class TodoPage extends MaterialBasePage {
  // Xpath element
  inputNewTask = "//input[@id = 'new-task']";
  buttonAddTask = "//button[@id = 'add-task']";
  getButtonDeleteItem = (num: number) => `//button[@id='to-do-${num}-delete']`;
  getItemInList = (num: number) => `//span[text()='To do ${num}']/parent::li`;

  constructor(page: Page, url: string) {
    super(page, url);
  }

  // Input todo list
  async inputNewTodo(contentTask: string): Promise<void> {
    await this.page.locator(this.inputNewTask).fill(contentTask);
  }

  // Click button add todo task
  async clickButtonAddTask(): Promise<void> {
    await this.page.locator(this.buttonAddTask).click();
  }

  // delete todo task
  async clickButtonDelete(num: number): Promise<void> {
    // console.log(this.getButtonDeleteItem(num));
    await this.page.locator(this.getButtonDeleteItem(num)).click();
  }
}
