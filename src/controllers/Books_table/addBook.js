const BookModel = require('../../db/models/bookmodel.js');


const addBook = async (req,res) => {
    try {
        const result = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        })
    
        console.log(result);
        
        res.status(201).json({
            msg: "Book added to database",
            book: result
        })
    } catch (error) {
        console.log(error.errors[0].message);
        res.status(418).json({
            msg: "Error- See error code", 
            error: error.errors[0].message
        })
    }
    
}

module.exports = addBook;