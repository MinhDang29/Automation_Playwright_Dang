/*Bạn đang xây dựng một ứng dụng quản lý thư viện. Hãy tạo một class để lưu trữ
thông tin sách và các phương thức để thao tác với dữ liệu này.
Yêu cầu:
- Tạo một class Library chứa các thuộc tính: name, location, books (mảng
các sách).
- Tạo một phương thức addBook để thêm sách vào thư viện.
- Tạo một phương thức findBook để tìm sách theo tiêu đề.*/
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    name;
    location;
    books;
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
    
    findBook(title) {
        const result = this.books.filter(book =>
            book.title.toLowerCase().includes(title.toLowerCase())
        );
        if (result.length === 0) {
            console.warn(`Không tìm thấy sách với tiêu đề chứa: "${title}"`);
        }
        return result;
    }
}
const library1 = new Library("Hòa Bình", "HCM");
library1.addBook(new Book("Pride and Prejudice", "Jane Austen"));
library1.addBook(new Book("Wuthering Heights", "Emily Brontë"));
console.log(library1);
console.log(library1.findBook("h"));