interface Book {
  name: string;
  amount: number;
}
class Library {
  name: string;
  location: string;
  books: Book[];

  constructor(name: string, location: string, books: Book[]) {
    this.name = name;
    this.location = location;
    this.books = books;
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  findBook(title: string) {
    const book = this.books.find((book) => book.name === title);
    if (!book) {
      console.log("Not found");
    } else {
      console.log(book);
    }
  }
}

let library = new Library("Ha Noi", "Lang Ha", [
  { name: "Title 1", amount: 2 },
  { name: "Title 2", amount: 5 },
  { name: "Title 3", amount: 10 },
]);

library.addBook({ name: "Title 4", amount: 3 });
library.findBook("Title 4");

// Book not found
library.findBook("Title 5");
