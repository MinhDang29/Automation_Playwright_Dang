class Item {
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
class Order {
  orderId: number;
  customerName: string;
  items: Item[];
  totalAmount: number;

  constructor(
    orderId: number,
    customerName: string,
    items: Item[],
    totalAmount: number
  ) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = items;
    this.totalAmount = totalAmount;
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  showOrder() {
    console.log(`list items:`, this.items);
  }

  calculateTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += (item.price * item.amount * (100 - item.discount)) / 100;
    });
    console.log(`Total amount for order is: ${total}`);
  }
}

const itemA = new Item("Item A", 100, 2, 10);
const itemB = new Item("Item B", 200, 1, 5);
const itemC = new Item("Item C", 150, 3, 0);

let order = new Order(1, "Quỳnh Chi", [itemA, itemB], 200);
order.addItem(itemC);
order.showOrder();
order.calculateTotal();
