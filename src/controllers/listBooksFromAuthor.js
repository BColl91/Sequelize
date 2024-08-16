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
    console.log(error);
    res.status(418).json({ msg: "Error", error: error });
  }
};

module.exports = listBooksFromAuthor;