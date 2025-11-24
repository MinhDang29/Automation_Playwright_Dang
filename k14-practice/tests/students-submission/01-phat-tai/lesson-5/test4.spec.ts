import { test } from "@playwright/test";

test("Truy cập trang https://material.playwrightvn.com/", async ({ page }) => {
  // Truy cập trang chính
  await page.goto("https://material.playwrightvn.com/");
  await page.locator('a[href="04-xpath-personal-notes.html"]').click();

  const notes = [
    {
      title: "Sự kiện thiên văn",
      content: "Thiên văn học tiết lộ các hành tinh mới được phát hiện...",
    },
    {
      title: "AI và giáo dục",
      content: "Trí tuệ nhân tạo thay đổi cách học tập và giảng dạy...",
    },
    {
      title: "Thảm họa thiên nhiên",
      content: "Núi lửa phun trào ở Indonesia khiến hàng nghìn người di tản...",
    },
    {
      title: "Ứng dụng y học",
      content: "Robot nano đang được sử dụng để chữa ung thư...",
    },
    {
      title: "Kỹ thuật di truyền",
      content: "CRISPR có thể chỉnh sửa ADN người với độ chính xác cao...",
    },
    {
      title: "Không gian vũ trụ",
      content: "Tàu vũ trụ NASA đã tiếp cận tiểu hành tinh Bennu...",
    },
    {
      title: "Phát minh năng lượng",
      content: "Pin mặt trời thế hệ mới hoạt động cả vào ban đêm...",
    },
    {
      title: "Sinh học tiến hóa",
      content: "Loài cá mới phát hiện có thể sống ở môi trường độc hại...",
    },
    {
      title: "Dinh dưỡng",
      content: "Chế độ ăn Địa Trung Hải giúp tăng tuổi thọ...",
    },
    {
      title: "Tái chế công nghệ",
      content: "Robot tự động tháo rời linh kiện điện tử để tái chế...",
    },
  ];

  const titleInput = page.locator('xpath=//*[@id="note-title"]');
  const contentTextarea = page.locator('xpath=//*[@id="note-content"]');
  const addButton = page.locator('xpath=//*[@id="add-note"]');
  const searchInput = page.locator('xpath=//*[@id="search"]');

  // Lặp thêm note
  for (const note of notes) {
    await titleInput.fill(note.title);
    await contentTextarea.fill(note.content);
    await addButton.click();
  }

  // Search với tiêu đề bất kỳ
  await searchInput.fill("Tái chế");
});
