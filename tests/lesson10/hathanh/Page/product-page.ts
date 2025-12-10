import { Page } from "@playwright/test";

export class ProductPage {
    page: Page;

    // --- 1. KHAI BÁO LOCATOR (Dạng String) ---
    xpathOptionSelect = "//select[@id='pa_xuat-xu']";
    xpathResultEnglish = "//select[@id='pa_xuat-xu']/option[2]"; 
    xpathAddToCartBtn = "//button[@class='single_add_to_cart_button button alt']";

    constructor(page: Page) {
        this.page = page;
    }

    // --- 2. CÁC HÀM HÀNH ĐỘNG ---

    // Click vào dropdown (Thực ra với thẻ Select, bước này không bắt buộc trong Playwright nếu dùng selectOption)
    async clickOptionElement(): Promise<void> {
        await this.page.locator(this.xpathOptionSelect).click();
    }

    // Chọn Option
    async clickResultEnglish(): Promise<void> {
        // Cách 1: Click giống hệt Selenium (ít dùng trong Playwright với thẻ select)
        // await this.page.locator(this.xpathResultEnglish).click();

        // Cách 2: (Khuyên dùng) Chọn theo index hoặc value chuẩn Playwright
        // option[2] tương ứng với index 1 (vì index bắt đầu từ 0)
        await this.page.locator(this.xpathOptionSelect).selectOption({ index: 1 });
    }

    // Thêm vào giỏ hàng
    async addToCart(): Promise<void> {
        // Playwright tự động chờ element clickable, không cần wait thủ công
        await this.page.locator(this.xpathAddToCartBtn).click();
    }

    // Kiểm tra hiển thị (Thay thế cho try-catch cũ)
    async isElementDisplayed(selector: string): Promise<boolean> {
        // isVisible() trả về true/false ngay lập tức, không ném ra exception
        return await this.page.locator(selector).isVisible();
    }
}