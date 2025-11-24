import { test } from "@playwright/test";

test("Add personal notes", async ({ page }) => {
    const notes = [
        { title: "Nhà khoa học Việt biến bùn thải giấy thành vật liệu có ích", content: "Nghiên cứu của PGS.TS Nguyễn Đình Quân tận dụng bùn thải nhà máy giấy để sản xuất cellulose vi khuẩn trộn vào vật liệu giúp cho giấy chất lượng cao hơn so với thông thường." },
        { title: "Đưa công nghệ trí tuệ nhân tạo vào dự báo sớm rủi ro thiên tai", content: "Theo GS Trần Thục, các công nghệ, mô hình dự báo thiên tai đã cho thấy rõ vai trò của tiến bộ khoa học, song cần nghĩ tới việc ứng dụng trí tuệ nhân tạo để có thể dự báo sớm hơn." },
        { title: "Tạo thành công hạt giống hành tím", content: "Viện Khoa học kỹ thuật nông nghiệp Duyên hải Nam Trung bộ (ASISOV) nghiên cứu thành công hạt giống hành tím thay thế củ giống, giúp giảm nhân công, năng suất tăng gấp đôi." },
        { title: "47 công trình thắng giải Sáng tạo khoa học công nghệ Việt Nam 2023", content: "Đại diện Bộ Công an cho rằng cần sớm hoàn thiện hành lang pháp lý về AI, quy định trách nhiệm nếu AI bị lợi dụng để phạm tội." },
        { title: "TP HCM đặt hàng nghiên cứu khung bệnh án điện tử dùng chung", content: "Ngành y tế TP HCM đặt hàng nhà khoa học, doanh nghiệp nghiên cứu khung bệnh án điện tử dùng chung làm cơ sở triển khai tại nhiều bệnh viện." },
        { title: "title 6", content: "content 6" },
        { title: "title 7", content: "content 7" },
        { title: "title 8", content: "content 8" },
        { title: "title 9", content: "content 9" },
        { title: "title 10", content: "content 10" }
    ];

    await test.step("Vào playwrightvn > Lesson 3", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
        for (const note of notes) {
            await page.locator('//input[@type="text" and @id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        }
    })

    await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
        await page.locator('//input[@type= "text" and @id= "search"]').fill('Việt');
    })
})

test("Advance: Add personal notes", async ({ page }) => {
    let titles, contents;

    await test.step("Vào trang Vnexpress lấy data", async () => {
        await page.goto('https://vnexpress.net/khoa-hoc', { waitUntil: 'domcontentloaded' });
        titles = await page.locator('//h3[@class="title-news"]/a').allTextContents(); 
        contents = await page.locator('//p[@class="description"]/a').allTextContents();
        console.log(titles);
    })

    await test.step("Vào playwrightvn > Lesson 3", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
        for (let i = 0; i < 10; i++) {
            await page.locator('//input[@type="text" and @id="note-title"]').fill(titles[i]);
            await page.locator('//textarea[@id="note-content"]').fill(contents[i]);
            await page.locator('//button[@id="add-note"]').click();
        }
    })

    await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
        await page.locator('//input[@type= "text" and @id= "search"]').fill('Khoa');
    })
})