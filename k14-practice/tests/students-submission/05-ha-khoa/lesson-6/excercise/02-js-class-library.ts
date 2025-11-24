//Bài 3:
class Library {
  name: string;
  location: string;
  books: [];
  constructor(name: string, location: string, books: []) {
    this.name = name;
    this.location = location;
    this.books = books;
  }
}