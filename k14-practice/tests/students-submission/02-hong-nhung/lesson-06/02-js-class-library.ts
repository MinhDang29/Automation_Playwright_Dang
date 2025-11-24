class Library {
    name: string;
    location: string;
    books;

    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.books = [];
    };

    addBooks(bookName) {
        this.books.push(bookName);
    };

    findBook(keyword) {
        const result = this.books.filter(bookName =>
            bookName.toLowerCase().includes(keyword.toLowerCase())
        );
        if (result.length !== 0) {
            console.log(result)
        }
        else{
            console.log(`Not found book with keyword: ${keyword}`)
        }
    }
}

const library1 = new Library("Romantic", "Ha Noi");
library1.addBooks("Romeo and Juliet");
library1.addBooks("JS for new beginners");
library1.findBook("Romeo");