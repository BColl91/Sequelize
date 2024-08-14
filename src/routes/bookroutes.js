const {Router} = require("express");
const bookRouter = Router();
const addBook = require("../controllers/addBook");


bookRouter.post("/addBook", addBook)

module.exports = bookRouter;