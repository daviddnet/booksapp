
let books =  [{
    id: 1,
    name: 'First book',
    price: 10,
},
{
    id: 2,
    name: 'Second book',
    price: 15,
},
{
    id: 3,
    name: 'Other book',
    price: 30,
}];

function getBooks() {
    return books;
}

function getBookById(bookId) {
    return books.find((book) => book.id == bookId);
}

function createBook(name, price) {
    const id = books.length + 1;

    const book = {name, price, id};

    books = [...books, book];

    return book;
}

function removeBookById(booksId) {
    books = books.filter(({ id }) => id != booksId);

    return books;
}

function updateBookById(bookId, { name = '', price = 0 } = {}) {
    const book = getBookById(bookId);
    const updateBook = { ...book, name, price};

    removeBookById(bookId);
    books = [...books, updateBook];

    return updateBook;
}

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBookById,
}
