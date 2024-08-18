const Book = require("../../db/models/bookmodel");

const delBook = async (req, res) => {
  try {
    const result = await Book.destroy({
      where: {title: req.body.title}
    });

    res.status(201).json({
      message: "Book removed from database",
      book: result,
    });
  } catch (error) {
    console.log(error.errors[0]);
    res.status(418).json({ msg: "Error", error: error });
  }
};

module.exports = delBook;