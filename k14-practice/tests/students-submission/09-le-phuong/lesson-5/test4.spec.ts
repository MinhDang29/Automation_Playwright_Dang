import { expect, test } from '@playwright/test';

test("Verify that user can add note", async ({ page }) => {
    let personNoteArr = [
        { title: "6 ký kết hợp tác tại Vietnam Gameverse 2025 ", content: " TP HCMTại Ngày hội Vietnam Gameverse 2025... " },
        { title: "8 dự án game tranh tài tại chung kết GameHub 2025", content: "GameHub 2025 mở rộng quy mô..." },
        { title: "Việt Nam - Pháp sẽ phát triển vệ tinh quan sát Trái Đất", content: "Việt Nam và Pháp cùng thúc đẩy phát triển công nghệ vũ trụ" },
        { title: "Hơn 10.000 lượt người dự khai mạc Vietnam", content: "Trong sáng đầu tiên, Ngày hội Vietnam GameVerse 2025" },
        { title: "AI và học máy sẽ là trợ thủ đắc lực", content: "Kiểm toán viên không còn đơn độc giữa biển dữ liệu mà trí tuệ nhân tạo" },
        { title: "Bộ trưởng Nguyễn Mạnh Hùng muốn Viettel", content: "Viettel đã có gần 20 năm đầu tư nước ngoài" },
        { title: "Hãng nhạc cụ nổi tiếng Mỹ", content: "Hãng nhạc cụ Mỹ Fender giới thiệu mẫu loa Bluetooth" },
        { title: "Robot hình người thi đấu boxing", content: "Giải đấu diễn ra tại Hàng Châu, tỉnh Chiết Giang" },
        { title: "Nhân sự an ninh mạng Việt Nam", content: "Hiệp hội An ninh mạng quốc gia đánh giá" },
        { title: "Phản ứng của người dùng về việc 'chặn Telegram", content: "Nhiều ý kiến đồng thuận chặn Telegram," },
    ]
    await test.step("Step 1 Open web page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2 Click Bai hoc 4 link ", async () => {
        await page.locator("//a[contains(text(),'Personal notes')]").click();
    });

    await test.step("Step 3: Add 10 note có nội dung và tiêu đề tại báo vnexpress", async () => {
        for (let i = 0; i < personNoteArr.length; i++) {
            await page.locator("//input[@id='note-title']").fill(personNoteArr[i].title);
            await page.locator("//textarea[@id='note-content']").fill(personNoteArr[i].content);
            await page.locator("//button[@id='add-note']").click();// add 3 sản phẩm
        }
    });

    await test.step("Step 4: Search bài báo bất kì", async () => {
        for (let i = 0; i < personNoteArr.length; i++) {
            await page.locator("//input[@id='search']").fill(personNoteArr[i].title);
            await page.keyboard.press("Enter");
        }
    });

});
