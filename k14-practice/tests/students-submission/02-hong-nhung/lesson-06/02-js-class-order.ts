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
    };

    addItem(name, price, amount, discount) {
        const item = {
            name: name,
            price: price,
            amount: amount,
            discount: discount,
        };
        this.items.push(item);
        console.log(this.items);
    };

    calculateTotal() {
        let total = 0;
        for (const item of this.items) {
            const itemTotal = item.price * item.amount * (1 - item.discount / 100);
            total += itemTotal;
        }
        this.totalAmount = total;
        console.log(`Total amount: ${this.totalAmount}`);
    }
}

const order1 = new Order(1, "Nhung");
order1.addItem("Book", 2000, 3, 20);
order1.addItem("Doll", 3000, 2, 0);
order1.calculateTotal();

//Cach 2
class Product {
    productName: string;
    price: number;
    amount: number;
    discount: number;

    constructor(productName, price, amount, discount) {
        this.productName = productName;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    }
}

class Order1 {
    orderId: number;
    customerName: string;
    items;
    totalAmount: number;

    constructor(orderId: number, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    };

    addItem(product: Product) {
        this.items.push(product);
        console.log(this.items);
    };

    calculateTotal() {
        let total = 0;
        for (const item of this.items) {
            const itemTotal = item.price * item.amount * (1 - item.discount / 100);
            total += itemTotal;
        }
        this.totalAmount = total;
        console.log(`Total amount: ${this.totalAmount}`);
    }
}
const product1 = new Product("Book", 2000, 3, 20);
const product2 = new Product("Doll", 3000, 2, 0);
const order2 = new Order1(1, "Nhung");
order2.addItem(product1);
order2.addItem(product2);
order2.calculateTotal();