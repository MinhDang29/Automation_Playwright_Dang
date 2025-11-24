// class Library {
//   name;
//   location;
//   books;
//   constructor(name, location) {
//     this.name = name;
//     this.location = location;
//     this.books = [];
//   }
//   addBook(title, soluong) {
//     const sach = {
//       title,
//       soluong,
//     };
//     this.books.push(sach);
//   }
//   findBook(title){
//     return this.books.filter(book => book.title === title);
//   }

//   print() {
//     console.log(
//       "danh sách sách trong thư viện:",
//       this.name,
//       "ở:",
//       this.location
//     );
//     this.books.forEach((book1, index) => {
//       console.log(`${index + 1}, ${book1.title}, ${book1.soluong}`);
//     });
//     console.log(this.books);
    
//   }
// }
// const thuvien = new Library("mạnh sỹ", "hà nội");
// thuvien.addBook("toán", 8.5);
// thuvien.addBook("toán hình",7.5);
// thuvien.addBook("toán", 8);
// thuvien.addBook("văn toán",7)
// thuvien.print();
// console.log(`found books:`, thuvien.findBook("toán"));