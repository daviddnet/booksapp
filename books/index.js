const express = require('express');
const Router = express.Router;
const booksRoutes = Router();
const db = require('../db');

booksRoutes.get('/', (req, res) => {
    res.json(db.getBooks());
});

booksRoutes.put('/', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        res.status(404);
        res.json({error: "Ivalid params"});
        return;
    }

    const book = db.createBook(name, price);

    res.json(book);
});

booksRoutes.post('/:id', (req, res) => {
    const { name, price } = req.body;
    const { id } = req.params;

    const book = db.updateBookById(id, { name, price });

    res.json(book);
});

booksRoutes.get('/:id', (req, res) => {
    const book = db.getBookById(req.params.id);

    if (!book) {
        res.status(404);
        res.json({error: "Ivalid id"});
        return;
    }

    res.json(book);
});

module.exports = () => booksRoutes;
