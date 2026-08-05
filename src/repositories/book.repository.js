import { Book } from '../models/index.js';

export const addBook = async (book, options ={}) => Book.create(book, options);

export const findBookById = async (id, options = {}) => await Book.findByPk(id, options);

export const updateBookTitle = async (book, title, options = {}) => book.update({ title }, options);

export const findBooksByAuthor = async (options = {}) => Book.findAll(options);

export const findBooksByPublisher = async (options = {}) => Book.findAll(options);