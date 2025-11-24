import { test, expect } from "@playwright/test";
test.describe("POST - Post", async () => {
  const input = {
    usernamedung: "1104-nhatanh",
    passworddung: "ERD4S2)#9^Nb!YjCGwqa)6XQ",
  };
  // tạo tên ngẫu nhiên
  function generateNameFromList() {
    const names = ["Manh", "Sy", "Linh", "Hoa", "Minh", "Tuan", "Thơm", "Huệ"];
    const lastNames = ["Nguyen", "Tran", "Le", "Pham", "Hoang", "Trần", "Vũ"];

    const first = names[Math.floor(Math.random() * names.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];

    return [`${first} ${last}`, `${first}-${last}`];
  }
  const [tagname, tagname1] = generateNameFromList();

  const click_bttAddTag = "//input[@type ='submit' and @value = 'Add Tag']";
  const click_bttAddTag1 =
    "//input[@type ='submit' and @value = 'Add Category']";

  test.beforeEach(
    "tiền đk đã login vào trang admin, đứng tại menu Post/Tags",
    async ({ page }) => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
      await page.locator("//input[@id='user_login']").fill(input.usernamedung);
      await page.locator("//input[@id='user_pass']").fill(input.passworddung);
      await page.locator("//input[@name='wp-submit']").click();
      await page.waitForTimeout(1000);
      await page.locator("//a[contains(text(),'Posts')]").focus();
      await page
        .locator("//a[contains(text(),'Tags')]")
        .click({ timeout: 1000 });

      // clear dữ liệu đã nhập
      await page.locator("//input[@name='tag-name']").clear();
      await page.locator("//a[contains(text(),'Posts')]").focus();
      await page
        .locator("//a[contains(text(),'Categories')]")
        .click({ timeout: 1000 });
    }
  );

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("@POST_TAG_001: Tag - add tag failed", async ({ page }) => {
    await page.waitForTimeout(1000);

    await test.step("Click button add tag", async () => {
      // click button add tag
      await page
        .locator('//input[@type ="submit" and @value = "Add Tag"]')
        .click();
      await expect(
        page.locator(
          '//div[@role ="alert"]//p[text() = "A name is required for this term."]'
        )
      ).toBeVisible();
      await page.waitForTimeout(2000);
    });

    await test.step("Điền thông tin tag: name và click button add tag", async () => {
      // Điền thông tin tag: name và click button add tag
      await page.locator("//input[@name='tag-name']").click();
      await page.waitForTimeout(2000);
      await page.locator("//input[@name='tag-name']").type("lesson tag");
      const input1 = await page
        .locator("//input[@name='tag-name']")
        .inputValue();
      console.log(input1);
      expect(input1).toBe("lesson tag");
      await page.waitForTimeout(2000);
      await page
        .locator('//input[@type ="submit" and @value = "Add Tag"]')
        .click();
      const alerts = await page
        .locator(
          "//div[@role ='alert']//p[text() ='A term with the name provided already exists in this taxonomy.']"
        )
        .textContent();
      console.log(alerts);
      expect(alerts?.trim()).toBe(
        "A term with the name provided already exists in this taxonomy."
      );
      await expect(
        page.locator(
          "//div[@role ='alert']//p[text() ='A term with the name provided already exists in this taxonomy.']"
        )
      ).toHaveText(
        "A term with the name provided already exists in this taxonomy."
      );
    });
  });

  test("@POST_TAG_002: Tag - add tag success", async ({ page }) => {
    await test.step("Điền thông tin tag: name, và click button add tag", async () => {
      await page.locator("//input[@name='tag-name']").fill(`${tagname}`);
      await page.locator(click_bttAddTag).click();
      // hiển thị thông báo thêm mới thành công
      await page.waitForTimeout(2000);
      await expect(
        page.locator("//div[@role ='al0ert']//p[text() ='Tag added.']")
      ).toBeVisible();
      // có tag mới được tạo ra trong danh sách tag
      const tag_moi = await page
        .locator('(//form[@id = "posts-filter"]//td[@data-colname="Name"])')
        .first();
      await expect(tag_moi).toContainText(`${tagname}`);
    });
    await test.step("slug = ", async () => {
      const tag_moi = await page
        .locator('(//form[@id = "posts-filter"]//td[@data-colname="Slug"])')
        .first()
        .innerText();
      console.log(tag_moi);
      await expect(
        page
          .locator('(//form[@id = "posts-filter"]//td[@data-colname="Slug"])')
          .first()
      ).toBeVisible();
    });
    await test.step("xoá các dữ liệu đã thêm vào", async () => {
      await page.locator('//input[@name ="delete_tags[]"]').first().check();
      await page.locator('//*[@id ="bulk-action-selector-top"]').click();
      await page
        .locator('//*[@id ="bulk-action-selector-top"]')
        .selectOption("delete");
      await page.locator('(//*[@value ="Apply"])[2]').click();
    });
  });

  test("@POST_TAG_002: Tag - slug auto remove special character", async ({
    page,
  }) => {
    await page
      .locator("//input[@name='tag-name']")
      .fill(`${tagname} @100 $200`);
    await page.locator(click_bttAddTag).click();
    // hiển thị thông báo thêm mới thành công
    await page.waitForTimeout(2000);
    await expect(
      page.locator("//div[@role ='alert']//p[text() ='Tag added.']")
    ).toBeVisible();
    const tag_moi = await page
      .locator('(//form[@id = "posts-filter"]//td[@data-colname="Slug"])')
      .first()
      .innerText();
    console.log("text hiển thị slug:", tag_moi);
    await expect(
      page
        .locator('(//form[@id = "posts-filter"]//td[@data-colname="Slug"])')
        .first()
    ).toBeVisible();
    await test.step("xoá các dữ liệu đã thêm vào", async () => {
      await page.locator('//input[@name ="delete_tags[]"]').first().check();
      await page.locator('//*[@id ="bulk-action-selector-top"]').click();
      await page
        .locator('//*[@id ="bulk-action-selector-top"]')
        .selectOption("delete");
      await page.locator('(//*[@value ="Apply"])[2]').click();
    });
  });

  test("@POST CATEGORY 001: Category - create category success", async ({
    page,
  }) => {
    await test.step("Điền thông tin category: name, và click button add category", async () => {
      await page
        .locator('//input[@name ="tag-name" ]')
        .fill(`${tagname} @100 $200`);
      await page.locator(click_bttAddTag1).click();
      // hiển thị thông báo thêm mới thành công
      await page.waitForTimeout(2000);
      await expect(
        page.locator('//div[@role = "alert"]//p[text()="Category added."]')
      ).toBeVisible();
      const tag_moi = await page
        .locator('(//form[@id = "posts-filter"]//td[@data-colname="Slug"])')
        .first()
        .innerText();
      console.log("text hiển thị slug:", tag_moi);
      await expect(
        page
          .locator('(//form[@id = "posts-filter"]//td[@data-colname="Slug"])')
          .first()
      ).toBeVisible();

      await test.step("Điền thông tin category và parent category", async () => {
        await page.locator('//input[@name ="tag-name" ]').fill(`${tagname} 04`);
        await page
          .locator('//select[@name ="parent"]')
          .selectOption("k11 class");

        await page.locator(click_bttAddTag1).click();
        // hiển thị thông báo thêm mớiình cong
        await page.waitForTimeout(2000);
        await expect(
          page.locator('//div[@role = "alert"]//p[text()="Category added."]')
        ).toBeVisible();

        const tag_moi = await page
          .locator('(//form[@id = "posts-filter"]//td[@data-colname="Slug"])')
          .first()
          .innerText();
        console.log("text hiển thị slug:", tag_moi);
        await expect(
          page
            .locator('(//form[@id = "posts-filter"]//td[@data-colname="Slug"])')
            .first()
        ).toBeVisible();
        await test.step("xoá các dữ liệu đã thêm vào", async () => {
          await page.locator('//input[@name ="delete_tags[]"]').first().check();
          await page.locator('//*[@id ="bulk-action-selector-top"]').click();
          await page
            .locator('//*[@id ="bulk-action-selector-top"]')
            .selectOption("delete");
          await page.locator('(//*[@value ="Apply"])[2]').click();
        });
      });
    });
  });
});
