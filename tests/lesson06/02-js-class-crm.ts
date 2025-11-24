class Customer {
    // 1. Định nghĩa kiểu dữ liệu cho các thuộc tính của class
    id: number;
    name: string;
    email: string;
    phone: number | string; // Điện thoại có thể là số hoặc chuỗi

    // 2. Thêm kiểu dữ liệu cho các tham số của constructor
    constructor(id: number, name: string, email: string, phone: number | string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    // Thêm kiểu trả về là 'void' (nghĩa là hàm này không trả về gì cả)
    displayInfo(): void {
        console.log(`Thông tin khách hàng: ${this.id}, ${this.name}, ${this.email}, ${this.phone}`);
    }

    // 3. Thêm kiểu dữ liệu cho tham số 'newEmail'
    updateEmail(newEmail: string): void {
        this.email = newEmail;
    }
}

// Giờ code của bạn đã "type-safe" (an toàn về kiểu)
const khachhang = new Customer(1, "sỹ", "sy@gmail.com", "090123456"); // Dùng chuỗi cho sđt
khachhang.displayInfo();
khachhang.updateEmail("sy123@gmail.com");
khachhang.displayInfo();