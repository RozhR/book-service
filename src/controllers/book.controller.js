import * as bookService from '../services/book.service.js'

export const addBook = async (req, res) => {
    const book = await bookService.addBook(req.body)
    return res.status(200).json(book)
};
export const findBookByIsbn = async (req, res) => {
    const book = await bookService.findBookByIsbn(req.params.isbn)
    return res.status(200).json(book)
};
export const deleteBook = async (req, res) => {
    const book = await bookService.deleteBook(req.params.isbn)
    return res.status(200).json(book)
};
export const updateBookTitle = async (req, res) => {
    const book = await bookService.updateBookTitle(req.params.isbn, req.params.title);
    return res.status(200).json(book);
};
export const findBooksByAuthor = async (req, res) => {
    const books = await bookService.findBooksByAuthor(req.params.author)
    return res.status(200).json(books)
};
export const findBooksByPublisher = async (req, res) => {
    const books = await bookService.findBooksByPublisher(req.params.publisher);
    return res.status(200).json(books)
};
export const findBookAuthors = async (req, res) => {
    const authors = await bookService.findBookAuthors(req.params.isbn)
    return res.status(200).json(authors)
};
export const findPublishersByAuthor = async (req, res) => {
    const publishers = await bookService.findPublishersByAuthor(req.params.author)
    return res.status(200).json(publishers)
};
export const deleteAuthor = async (req, res) => {
    const author = await bookService.deleteAuthor(req.params.author)
    return res.status(200).json(author)
};