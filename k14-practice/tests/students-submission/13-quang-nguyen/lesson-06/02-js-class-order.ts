/*Mô tả:
Bạn đang làm việc cho một cửa hàng trực tuyến và cần tạo một hệ thống quản lý đơn
hàng. Hãy tạo một class để lưu trữ thông tin đơn hàng và các phương thức để thao tác
với dữ liệu này.
Yêu cầu:
- Tạo một class Order chứa các thuộc tính: orderId, customerName, items
(mảng các sản phẩm), totalAmount.
- Sản phẩm bao gồm các thuộc tính: name, price, amount, discount
- Tạo một phương thức addItem để thêm sản phẩm vào đơn hàng.
- Tạo một phương thức calculateTotal để tính tổng số tiền của đơn hàng.*/
// Lớp sản phẩm
class Product {
    name;
    price;
    amount;
    discount;
    constructor(name, price, amount, discount = 0) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    }

    getTotalPrice() {
        return this.price * this.amount * (1 - this.discount / 100);
    }
}

// Lớp đơn hàng
class Order {
    orderId;
    customerName;
    items;
    totalAmount;
    constructor(orderId, customerName) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }

    addItem(product) {
        this.items.push(product);
    }

    calculateTotal() {
        this.totalAmount = this.items.reduce((sum, item) => {
            return sum + item.getTotalPrice();
        }, 0);
        return this.totalAmount;
    }
    
    printSummary() {
        console.log(`Đơn hàng #${this.orderId} của ${this.customerName}:`);
        this.items.forEach(item => {
            console.log(`- ${item.name}: ${item.amount} x ${item.price}₫ (Giảm ${item.discount}%) = ${item.getTotalPrice()}₫`);
        });
        console.log(`Tổng tiền: ${this.totalAmount}₫`);
    }
}

const order = new Order(1, "Quang");
order.addItem(new Product("Áo", 2000000, 2, 10));
order.addItem(new Product("Quần", 5000000, 1));
order.calculateTotal();
order.printSummary();

