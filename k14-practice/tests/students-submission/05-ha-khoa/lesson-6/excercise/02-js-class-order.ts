//Bài 2:
class Order {
    orderId: number;
    customerName: string;
    items: string;
    totalAmount: number;
    constructor(orderId: number, customerName: string, items: string, totalAmount: number) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = totalAmount;
    }
}

class Product {
    name: string;
    price: number;
    amount: number;
    discount: number;
    constructor(name: string, price: number, amount: number, discount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    }
}

const newOrder = new Order(1, "Khoa", "Pen", 2)
const newProduct = new Product("Pen", 1, 2, 6)