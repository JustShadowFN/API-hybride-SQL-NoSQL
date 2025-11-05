const Book = require('../models/Book.model');

// GET /api/books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.getAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/books
exports.createBook = async (req, res) => {
  try {
    const { title, author, available = true } = req.body;
    if (!title || !author) {
      return res.status(400).json({ error: 'Title and author are required' });
    }
    const newBook = await Book.create(title, author, available);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};