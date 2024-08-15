const Book = require("../db/models/authormodel");

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { authorId } = req.body;

  try {
    const updated = await Book.update({ authorId }, { where: { id } });
    if (updated[0] > 0) {
      res.json({ message: "Author updated successfully" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update author" });
  }
};

module.exports = updateAuthor;
