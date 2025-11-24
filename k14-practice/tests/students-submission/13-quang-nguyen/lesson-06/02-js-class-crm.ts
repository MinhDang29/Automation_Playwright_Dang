/*Mô tả
Bạn là một lập trình viên xây dựng hệ thống quản lý khách hàng cho một công ty. Hãy
tạo một class để lưu trữ thông tin khách hàng và các phương thức để thao tác với dữ
liệu này.
Yêu cầu:
- Tạo một class Customer chứa các thuộc tính: id, name, email, phone.
- Tạo một phương thức displayInfo để hiển thị thông tin khách hàng.
- Tạo một phương thức updateEmail để cập nhật email của khách hàng.
Phương thức nhận vào một tham số duy nhất là newEmail */
class Customer {
    id: number;
    name: string;
    email: string;
    phone: number;
    constructor(id: number, name: string, email: string, phone:number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
    displayInfor():void {
        console.log(`Stt: ${this.id}, tên: ${this.name}, email: ${this.email}, sđt: ${this.phone}`);
    }

    updateEmail(newEmail: string): void {
        this.email = newEmail;
        console.log(`email được thay đổi là: ${this.email}`);
    }
}
const newCustomer = new Customer(1, "Quang", "nguyenduyquang0512@gmail.com", 799156467)
newCustomer.displayInfor();
newCustomer.updateEmail("quang105641@gmail.com");