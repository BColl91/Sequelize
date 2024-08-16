const { Router } = require("express");
const bookRouter = Router();

const addBook = require("../controllers/addBook");
const listBooks = require("../controllers/listBooks");
const updateAuthor = require("../controllers/updateAuthor");
const updateGenre = require("../controllers/updateGenre");
const delBook = require("../controllers/delBook");
const addAuthor = require("../controllers/addAuthor");
const delAuthor = require("../controllers/delAuthor");
const listBooksFromAuthor = require("../controllers/listBooksFromAuthor");
const listABookFromAuthor = require("../controllers/listABookFromAuthor")

bookRouter.post("/addBook", addBook);
bookRouter.get("/listBooks", listBooks);
bookRouter.get("/listABookFromAuthor", listABookFromAuthor);
bookRouter.get("/listBooksFromAuthor", listBooksFromAuthor);
bookRouter.put("/updateAuthor", updateAuthor);
bookRouter.put("/updateGenre", updateGenre);
bookRouter.delete("/delBook", delBook);
bookRouter.delete("/delAuthor", delAuthor);
bookRouter.post("/addAuthor", addAuthor);

module.exports = bookRouter;
