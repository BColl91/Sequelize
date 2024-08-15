const { DataTypes } = require('sequelize');
const SQLconnection = require("../connection.js")

const Author = sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Author;
