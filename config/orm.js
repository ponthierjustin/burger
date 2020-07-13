const connection = require("./connection.js");

const orm = {
  selectAll: function (tableName, cb) {
    const query = "SELECT * FROM " + tableName + ";";
    connection.query(query, [tableName], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
/*   insertOne: function (table, col, val, cb){
    const query = "INSERT INTO " + table + " (" + col + ") VALUES (" + val + ") " ;
    console.log(query);
    connection.query(query, [table, col, val], function(err, results){
      if (err) throw err;
      cb(result);
    })
  }, */
};
// INSERT ONE ITEM FUNCTION
// UPDATE FUNCTION



module.exports = orm;