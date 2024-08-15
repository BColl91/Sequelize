const Book = require("../db/models/bookmodel");

const delBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Book.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};

module.exports = delBook;
