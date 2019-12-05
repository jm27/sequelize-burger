// Set up MySQL connection.
var mysql = require("mysql");
let connection;

connection = mysql.createConnection({
    host: "z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "agnguh4b1md2twi8",
    password: "h1vsjqmbi73jilc9",
    database: "q707bz4zfu0kghyi"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
