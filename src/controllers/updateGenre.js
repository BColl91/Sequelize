const Book = require("../db/models/bookmodel");

const updateGenre = async (req, res) => {
  const { id } = req.params;
  const { genre } = req.body;

  try {
    const updated = await Book.update({ genre }, { where: { id } });
    if (updated[0] > 0) {
      res.json({ message: "Genre updated successfully" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update genre" });
  }
};

module.exports = updateGenre;
