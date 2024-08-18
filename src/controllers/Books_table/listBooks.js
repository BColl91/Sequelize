const Book = require("../../db/models/bookmodel");

const listBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

module.exports = listBooks;
