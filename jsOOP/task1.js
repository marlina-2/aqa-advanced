const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book("Лісова пісня", "Леся Українка", 1911);
const book2 = new Book("Кобзар", "Тарас Шевченко", 1840);

book1.printInfo();
book2.printInfo();

const eBook1 = new EBook("Енеїда", "ван Котляревський", 1842, "pdf");
eBook1.printInfo();

const books = [book1, book2, eBook1];
const oldestBook = Book.findOldestBook(books);
console.log(`Найдавниша книга:  ${oldestBook.title}, рік випуску: ${oldestBook.year}`);

const eBook2 = EBook.createEBook(book1, "txt");
eBook2.printInfo()
