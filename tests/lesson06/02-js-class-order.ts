// class Order {
//     orderId;
//     customerName;
//     items;
//     totalAmount;

//   constructor(orderId, customerName){
//         this.orderId = orderId;
//         this.customerName = customerName;
//         this.items = [];
//         this.totalAmount = 0;
//     }
//     addItem(name, price, amount, discount = 0){
//        const item = {
//         name,
//         price,
//         amount,
//         discount
//        }
// this.items.push(item);
//     }

// calculateTotal(){
//     let total =0;
//     let total1 =0;
//     this.items.forEach(item2 =>{
//         const discountedPrice = item2.price *(1-item2.discount / 100);
//         total += discountedPrice *item2.amount;
//     });
//     this.totalAmount = total;

//     this.items.forEach(item4 =>{
//         total1 += item4.amount;
//     })
//     console.log("tổng số lương các đơn hàng à:", total1)
// }

//     prind(){

// console.log(`Đơn hàng ${this.orderId} của khách hàng: ${this.customerName}`);
// console.log("Danh sách sản phẩm:");
// this.items.forEach((item3, index) =>{
//     console.log(`${index+1}, ${item3.name}, SL: ${item3.amount}, Giá: ${item3.price}, Giảm: ${item3.discount}%`); 
// });
// console.log(`Tổng tiền cần thanh toán: ${this.totalAmount.toLocaleString()} VNĐ`);

// }
// }
// const hanghoa = new Order(1, "Mạnh Sỹ");
// hanghoa.addItem("áo cộc", 12, 2,30 );
// hanghoa.addItem("quần đùi", 545412, 6, 6)
// hanghoa.calculateTotal();
// hanghoa.prind();