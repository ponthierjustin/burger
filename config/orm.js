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
      "INSERT INTO ?? (??) VALUES (?)";
    console.log(query);
    connection.query(query, [table, col, val], function (err, results) {
      if (err) throw err;
      console.log(results);
      cb(results);
    });
  },
  updateOne: function(table, objVals, condition, id, cb){
    const query = "UPDATE ?? SET ?? = ? WHERE id = ?;";
    connection.query(query, [table, objVals, condition, id], function(err, results){
      if (err) throw err;
      cb(results);
    })
  }
};
// INSERT ONE ITEM FUNCTION
// UPDATE FUNCTION

module.exports = orm;
