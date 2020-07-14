const connection = require("./connection.js");

const orm = {
  selectAll: function (tableName, cb) {
    const query = "SELECT * FROM " + tableName + ";";
    connection.query(query, [tableName], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, col, val, cb) {
    const query =
      "INSERT INTO " + table + " (" + col + ") VALUES (" + val + ") ";
    console.log(query);
    connection.query(query, val, function (err, results) {
      if (err) throw err;
      cb(results);
    });
  },
};
// INSERT ONE ITEM FUNCTION
// UPDATE FUNCTION

module.exports = orm;
