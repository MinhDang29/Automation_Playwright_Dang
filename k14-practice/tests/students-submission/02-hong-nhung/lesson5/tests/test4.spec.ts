import { test } from '@playwright/test';

test('Ex4', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='04-xpath-personal-notes.html']");
    const notes = [
        { title: "Laptop 20 triệu đồng có màn hình OLED, RAM 24 GB", content: "Lenovo IdeaPad Slim 3i cho phép người dùng tuỳ chọn máy với nhiều kích thước và tấm nền màn hình khác nhau, cùng RAM lên tới 24 GB." },
        { title: "Kỹ thuật nối dây nhỏ hơn sợi tóc trong mạch điện microchip", content: "Các sợi dây nối được kéo căng tới đường kính nhỏ hơn sợi tóc người trước khi kỹ sư sắp xếp chúng trên con chip để liên kết mạch điện." },
        { title: "Loạt game xuất sắc được phát hành tại Việt Nam", content: "Vietnam Game Awards 2025 vinh danh 6 giải thưởng thuộc nhóm hạng mục The Golden Galaxy dành cho game phát hành tại Việt Nam." },
        { title: "Lò vi sóng ảnh hưởng kết nối Wi-Fi thế nào?", content: "Bức xạ rò rỉ từ lò vi sóng có thể khiến kết nối mạng trở nên chập chờn hoặc mất hoàn toàn, do đó cần đặt lò cách xa bộ định tuyến Wi-Fi vài mét." },
        { title: "Legion Esports bảo toàn chức vô địch tại VMC Spring 2025", content: "Legion Esports chứng minh phong độ của nhà vô địch tại giải đấu Vietnam MLBB Championship Spring 2025 khi chiến thắng tuyệt đối trước RLG Vietnam với tỷ số 4-0." },
        { title: "Elon Musk: AI sẽ thay thế tìm kiếm truyền thống", content: "Hậu quả khi chatbot AI ngày càng 'người' hơn" },
        { title: "Lý do thời tiết vũ trụ khó dự đoán", content: "Một cơn bão mặt trời có thể gây gián đoạn vệ tinh, ảnh hưởng lưới điện và tê liệt hàng không... nhưng các nhà khoa học chưa thể dự báo do không đủ thiết bị để đo đếm." },
        { title: "Nhà khoa học phủ nhận hồi sinh sói trắng tuyệt chủng", content: "Giám đốc khoa học của Colossal Biosciences thừa nhận sói trắng mà họ tạo ra thực chất chỉ là sói xám biến đổi gene sau khi vấp phải nhiều ý kiến phản đối về tuyên bố hồi sinh loài vật." },
        { title: "Loài ếch xâm lấn khổng lồ chuyên ăn thịt rùa con", content: "Tại Vườn quốc gia Yosemite, bang California, tiếng kêu lớn và liên tục của ếch bò Mỹ vang lên trong đêm. Tiếng kêu của chúng không chỉ gây ồn mà còn là dấu hiệu của sự mất cân bằng, khi một loài xâm lấn áp đảo sinh vật bản địa." },
        { title: "Mô hình AI tống tiền kỹ sư để tránh bị thay thế", content: "Báo cáo an toàn của Anthropic hôm 22/5 cho biết, trong quá trình thử nghiệm Claude Opus 4 trước khi phát hành, công ty yêu cầu mô hình AI này đóng vai trò trợ lý cho một công ty hư cấu." }
    ];
    for (const note of notes) {
        await page.locator("//input[@id='note-title']").fill(`${note.title}`);
        await page.locator("//textarea[@id='note-content']").fill(`${note.content}`);
        await page.click("//button[@id='add-note']")
    };
    await page.locator("//input[@id='search']").fill("Laptop 20 triệu đồng có màn hình OLED, RAM 24 GB");
})


