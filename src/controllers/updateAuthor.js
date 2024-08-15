const Book = require("../db/models/bookmodel");
const Author = require("../db/models/authormodel");

const updateAuthor = async (req, res) => {
  const { id } = req.body;
  const { authorId } = req.body;

  try {
    const oldAuthor = await Book.findOne({ where: { title: req.body.title } });
    console.log("line 10", oldAuthor.dataValues.author_id);
    const author = await Author.findOne({ where: { name: req.body.name } });
    console.log("line 12", author.dataValues.author_id);
    const book = await Book.findOne({ where: { title: req.body.title } });
    console.log("line 14", book);
    const updated = await Book.update({ author_id: author.dataValues.author_id }, { where: { book_id: book.book_id } });
    console.log(updated);
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
