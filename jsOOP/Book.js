class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.length === 0) {
            throw new Error("Поле назва повинне бути строкою і не бути пустим");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.length === 0) {
            throw new Error("Поле автор повинне бути строкою і не бути пустим");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {

        if (typeof value !== 'number') {
            throw new Error("Рік видання повинен бути числом");
        }
        this._year = value;
    }

    static findOldestBook(booksArray) {
        return booksArray.reduce((oldestBook, book) => {
            return (oldestBook.year < book.year) ? oldestBook : book;
        })
    }

    printInfo() {
        console.log(`Назва книги: ${this._title}, автор книги: ${this._author}, рік видання: ${this._year}`)
    }
}

module.exports = Book;
