const { Router } = require("express");
const bookRouter = Router();

const addBook = require("../controllers/Books_table/addBook");
const delBook = require("../controllers/Books_table/delBook");
const updateGenre = require("../controllers/Books_table/updateGenre");
const listBooks = require("../controllers/Books_table/listBooks");

const listBooksFromAuthor = require("../controllers/Books_table/listBooksFromAuthor");
const listABookFromAuthor = require("../controllers/Books_table/listABookFromAuthor")

const updateAuthor = require("../controllers/Authors_table/updateAuthor");
const addAuthor = require("../controllers//Authors_table/addAuthor");
const delAuthor = require("../controllers/Authors_table/delAuthor");

bookRouter.post("/addBook", addBook);
bookRouter.get("/listBooks", listBooks);

bookRouter.put("/updateGenre", updateGenre);
bookRouter.delete("/delBook", delBook);

bookRouter.get("/listABookFromAuthor", listABookFromAuthor);
bookRouter.get("/listBooksFromAuthor", listBooksFromAuthor);

bookRouter.delete('/authors/:id', delAuthor);
bookRouter.post("/addAuthor", addAuthor);
bookRouter.put("/updateAuthor", updateAuthor);

module.exports = bookRouter;
