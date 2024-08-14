const {Router} = require("express");
const bookRouter = Router();
const addBook = require("../controllers/addBook");
// import listbooks from controllers folder
// import update author from controllers folder
// import update genre from controlelrs folder
// import deleteBook from controllers folder

//create
bookRouter.post("/addBook", addBook)


//READ = list all books in db
//bookRouter.get("/listBooks", listBooks);

//UPDATE = update author
// bookRouter.something

//UPDATE = update genre
// bookRouter.something

//DELETE = delete a title
// bookRouter.something

module.exports = bookRouter;