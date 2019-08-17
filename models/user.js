// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
  name: Sequelize.STRING,
  image: Sequelize.STRING
});

// Syncs with DB
User.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = User;
