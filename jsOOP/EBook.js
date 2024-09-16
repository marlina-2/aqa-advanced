const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    get format() {
        return this._format;
    }

    set format(value) {
        const allowedFormats = ["pdf", "txt"];
        if (!allowedFormats.includes(value)) {
            throw new Error("Неправильний формат файлу");
        }
        this._format = value;
    }

    static createEBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }

    printInfo() {
        console.log(`Назва книги: ${this._title}, автор книги: ${this._author}, рік видання: ${this._year}, формат файлу: ${this.format}`)
    }
}

module.exports = EBook;
