const {DataTypes} = require("sequelize");
const SQLconnection = require("../connection.js")

const Book = SQLconnection.define("Book",{
    book_id: {
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    author_id: {
        type: DataTypes.BIGINT
    },
    genre: {
        type: DataTypes.STRING
    }
});

module.exports = Book;