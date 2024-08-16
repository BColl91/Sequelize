const Book = require("../db/models/bookmodel");

const listABookFromAuthor = async (req, res) => {
  try {
    const result = await Book.findOne({
        where: {
            author: req.body.author,
        }
    });

    console.log(result);
    res.status(201).json({
      message: `Book by author ${req.body.author}:`,
      book: result,
    });
  } catch (error) {
    console.log(error.errors[0]);
    res.status(418).json({ msg: "Error", error: error });
  }
};

module.exports = listABookFromAuthor;