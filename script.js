class Book {
    constructor(title, author, isCheckedOut = false) {
        this.title = title;
        this.author = author;
        this.isCheckedOut = isCheckedOut;
    }
}


class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    checkOut(title) {
        const book = this.books.find(book => book.title === title);

        if (book) {
            book.isCheckedOut = true;
        }
    }

    checkIn(title) {
        const book = this.books.find(book => book.title === title);

        if (book) {
            book.isCheckedOut = false;
        }
    }

    getAvailableBooks() {
        return this.books.filter(book => !book.isCheckedOut);
    }

    getBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }

    getBookTitles() {
        return this.books.map(book => book.title);
    }

    countAvailableBooks() {
        return this.books.reduce((count, book) => {
            if (!book.isCheckedOut) {
                count++;
            }

            return count;
        }, 0);
    }
}



const library = new Library();


const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien");
const book3 = new Book("Harry Potter", "J.K. Rowling");
const book4 = new Book("1984", "George Orwell");


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);



library.checkOut("The Hobbit");



console.log("Available books:");
console.log(library.getAvailableBooks());

console.log("Books by J.R.R. Tolkien:");
console.log(library.getBooksByAuthor("J.R.R. Tolkien"));

console.log("All book titles:");
console.log(library.getBookTitles());

console.log("Number of available books:");
console.log(library.countAvailableBooks());



library.checkIn("The Hobbit");

console.log("Available books after check in:");
console.log(library.getAvailableBooks());