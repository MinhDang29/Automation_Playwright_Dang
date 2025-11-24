/*Tạo một class Library chứa các thuộc tính: name, location, books (mảng
các sách).
- Tạo một phương thức findBook để tìm sách theo tiêu đề.*/
class Library {
    name:string;
    location: string;
    books:string [];
    constructor(name: string, location: string) {
        this.name = name;
        this.location = location
        this.books = []
    }
    //- Tạo một phương thức addBook để thêm sách vào thư viện.
    addBook(name:string) {
        //let bookName = {}
        this.books.push(name)
    }
    //Tạo một phương thức findBook để tìm sách theo tiêu đề.*/
    findBook(name:string) {
        let results = [];
        for (let char of this.books) {
            if (char.lastIndexOf(name) != -1) {
                console.log(char)
            }
        }
    }
}
const library = new Library("Bookstore", "quận 3")
library.addBook("toán tư duy");
library.addBook("toán logic");
console.log(library);
library.findBook("logic");