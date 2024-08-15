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

bookRouter.post("/books", addBook);
bookRouter.get("/books", listBooks);
bookRouter.put("/books/:id/author", updateAuthor);
bookRouter.put("/books/:id/genre", updateGenre);
bookRouter.delete("/books/:id", delBook);

bookRouter.post("/authors", addAuthor);
bookRouter.delete("/authors/:id", delAuthor);


bookRouter.get("/authors/:authorId/books", listBooksFromAuthor);

module.exports = bookRouter;
