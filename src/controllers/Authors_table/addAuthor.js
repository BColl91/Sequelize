const Author = require("../../db/models/authormodel");

const addAuthor = async (req, res) => {
  const { name, bio } = req.body;

  try {
    const newAuthor = await Author.create({ name, bio });
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: "Failed to create author" });
  }
};

module.exports = addAuthor;
