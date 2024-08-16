const Book = require("../db/models/bookmodel");

const delBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Book.destroy({ where: { id } });
    if (deleted) {
      res.status(201).json({ message: "Book deleted successfully",
        book: result,
      });
    } catch (error) {
      console.log(error.errors[0]);
      res.status(418).json({ msg: "Error", error: error });
    }
};

module.exports = delBook;
