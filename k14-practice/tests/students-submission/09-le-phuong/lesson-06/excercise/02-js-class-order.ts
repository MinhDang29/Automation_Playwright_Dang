/*- Tạo một class Order chứa các thuộc tính: orderId, customerName, items
(mảng các sản phẩm), totalAmount..*/
class Order {
    orderId: number;
    customerName: string;
    item:{ name: string; price: number; amount: number; discount: number }[];
    totalAmount: number
    constructor(orderId:number, customerName:string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.item = [];
        this.totalAmount = 0;
    }
    //Tạo một phương thức addItem để thêm sản phẩm vào đơn hàng.
    addItem(name:string, price:number, amount:number, discount:number) {
        let product = { name, price, amount, discount }
        this.item.push(product)
        console.log(product)
    }
    //Tạo một phương thức calculateTotal để tính tổng số tiền của đơn hàng
    calculateTotal() {
        let total = 0
        for (let i = 0; i < this.item.length; i++) {
            total = total + ((this.item[i].price * this.item[i].amount) - (this.item[i].price * this.item[i].amount * this.item[i].discount));
        }
        //console.log (total)
        this.totalAmount = total

    }
};
const orders = new Order(123, "phuong");
orders.addItem("Bút", 3000, 2, 0.05)
orders.addItem("Màu", 2000, 3, 0)
orders.calculateTotal();
console.log(orders)


