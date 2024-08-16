const { DataTypes } = require('sequelize');
const SQLconnection = require("../../db/connection.js")

const Author = SQLconnection.define("Author", {
  author_id: {
    type: DataTypes.BIGINT,
    unique: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Author;