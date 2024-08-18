const Book = require("../../db/models/bookmodel");

const listBooksFromAuthor = async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    const author = req.body.name;

    if (!author) {
      return res.status(400).json({ message: "Author field is required" });
    }

    const result = await Book.findAll({
      where: {
        author: author,
      },
    });

    console.log(result);
    res.status(201).json({
      message: `Books in database by author ${author}:`,
      books: result,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};

module.exports = listBooksFromAuthor;
