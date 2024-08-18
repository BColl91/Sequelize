const Author = require("../../db/models/authormodel");

const delAuthor = async (req, res) => {

  console.log("Request params:", req.params);

  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Author ID is required" });
  }

  try {
    const deleted = await Author.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: "Author deleted successfully" });
    } else {
      res.status(404).json({ error: "Author not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete author" });
    console.log("Author ERROR:", error);
  }
};

module.exports = delAuthor;
