require("dotenv").config();
const express = require("express");
const bookRouter = require("./routes/bookroutes");
const app = express();
app.use(express.json());
app.use(bookRouter);
const Book = require("./db/models/bookmodel")
const Author = require("./db/models/authormodel")

function syncTables() {
    Book.sync({alter:true}),
    Author.sync({alter:true})
}


const port = process.env.PORT || 5001;


app.get("/health", (req,res) => {
    res.status(200).json({
        msg : "Server API is healthy"
    })
})
syncTables();
app.listen(port,() => console.log(`Server running on port ${port}`))