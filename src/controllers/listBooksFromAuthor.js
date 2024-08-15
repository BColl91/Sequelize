const Book = require("../db/models/bookmodel");

const listBooksFromAuthor = async (req, res) => {
  try {
    const result = await Book.findAll({
        where: {
            author: req.body.author,
        }
    });

    console.log(result);
    res.status(201).json({
      message: `Books in database by author ${req.body.author}:`,
      book: result,
    });
  } catch (error) {
    console.log(error.errors[0]);
    res.status(418).json({ msg: "Error: see error code", error: error });
  }
};

module.exports = listBooksFromAuthor;