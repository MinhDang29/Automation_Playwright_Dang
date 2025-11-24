// Bài 1:
class Customer {
    id: string;
    name: string;
    email: string;
    phone: number;
    constructor(id: string, name: string, email: string, phone: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    // Phương thức hiển thị thông tin khách hàng
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }

    // Phương thức cập nhật email
    newEmail: string;
    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`Email đã được cập nhật thành: ${this.email}`);
    }
}

// Ví dụ sử dụng class
const customer1 = new Customer("A1", "Nguyễn Hà Khoa", "khoa1999.81@gmail.com", 12345678);
customer1.displayInfo(); // Hiển thị thông tin khách hàng
customer1.updateEmail("newemail@example.com"); // Cập nhật email mới
customer1.displayInfo(); // Kiểm tra email sau cập nhật
