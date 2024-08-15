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

bookRouter.post("/addBook", addBook);
bookRouter.get("/listBooks", listBooks);
bookRouter.put("/updateAuthor", updateAuthor);
bookRouter.put("/books/:id/genre", updateGenre);
bookRouter.delete("/books/:id", delBook);

bookRouter.post("/addAuthor", addAuthor);
bookRouter.delete("/authors/:id", delAuthor);

bookRouter.get("/listBooksFromAuthor", listBooksFromAuthor);


module.exports = bookRouter;
