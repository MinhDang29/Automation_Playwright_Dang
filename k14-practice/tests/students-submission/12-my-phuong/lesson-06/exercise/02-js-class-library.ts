interface Book {
    name: string;
    type: string;
    author: string;
}

class Library {
    name: string;
    location: string;
    books: Book[];
    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    findBook(name: string): void {
        const lowercaseName = name.toLowerCase();
        const foundBook = this.books.find(book => book.name.toLowerCase() === lowercaseName);
        if (foundBook !== undefined) {
            console.log(`Sách "${foundBook.name}" được tìm thấy, tác giả là ${foundBook.author}`);
        } else {
            console.log(`Không tìm thấy sách "${name}"`);
        }
    }
}

const bookInfo = new Library("Thu Vien Tong Hop HCM", "Quan 1");

// Them sach vao thu vien
bookInfo.addBook({ name: "De men phieu luu ky", type: "Truyen van hoc", author: "To Hoai" });
bookInfo.addBook({ name: "Doraemon", type: "Truyen tranh", author: "Fujiko F. Fujio" });
bookInfo.addBook({ name: "Tham tu Conan", type: "Truyen tranh", author: "Gosho Aoyama" });

// Tim kiem sach trong thu vien
bookInfo.findBook("De men phieu luu ky");
