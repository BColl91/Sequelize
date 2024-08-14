const {Sequelize} = require("sequelize");

const connection = new Sequelize(process.env.MYSQL_URI);

try {
    connection.authenticate();
    console.log("Connected to Database")
} catch (error) {
    console.log(error);
}

module.exports = connection;