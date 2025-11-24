//- Tạo một class Customer chứa các thuộc tính: id, name, email, phone.
class Customer {
    id: number;
    name: string;
    email: string;
    phone:string;
    constructor(id: number, name: string, email:string, phone:string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    //Tạo một phương thức displayInfo để hiển thị thông tin khách hàng.
    displayInfo() {
        console.log(`Mã khách hàng ${this.id}`)
        console.log(`Tên khách hàng ${this.name}`)
        console.log(`Mail khách hàng ${this.email}`)
        console.log(`Phone khách hàng ${this.phone}`)
    }
    //Tạo một phương thức updateEmail để cập nhật email của khách hàng nhận vào một tham số duy nhất là newEmail
    updateEmail(newEmail: string) {
        this.email = newEmail
        console.log(`Email mới của khách hàng sau khi update ${this.email}`)
    }
};

// Tạo một instance của lớp Customer
const customer1 = new Customer(1, "Susan", "susan@example.com", "123-456-7890");
customer1.displayInfo();
let newEmail = "susan1@example.com"
customer1.updateEmail(newEmail)


