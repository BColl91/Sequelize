const { Book } = require('../db/models/authormodel'); 

const listBooksFromAuthor = async (req, res) => {
  const { authorId } = req.params;
  try {
    const books = await Book.findAll({ where: { authorId } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books for the author" });
  }
};

module.exports = listBooksFromAuthor;
