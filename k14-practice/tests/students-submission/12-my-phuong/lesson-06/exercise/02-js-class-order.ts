interface Item {
    name: string;
    price: number;
    amount: number;
    discount: number;
}

class Order {
    orderId: string;
    customerName: string;
    items: Item[];
    totalAmount: number;

    constructor(orderId: string, customerName: string, totalAmount: number) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = totalAmount;
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    calculateTotal(): number {
        this.totalAmount = 0;
        for (let i = 0; i < this.items.length; i++) {
            this.totalAmount += this.items[i].price * this.items[i].amount * (1 - this.items[i].discount / 100);
        }
        return this.totalAmount;
    }
}

const orderInfo = new Order("A123", "Andy", 0);

// Them cac mat hang vao don hang
orderInfo.addItem({ name: "Item1", price: 100000, amount: 2, discount: 10 });
orderInfo.addItem({ name: "Item2", price: 200000, amount: 1, discount: 20 });

// In ra total amount
console.log("Total amount:");
console.log(orderInfo.calculateTotal());
