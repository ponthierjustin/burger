const connection = require("./connection.js");

const orm = {
  selectAll: function (tableName, cb) {
    const query = "SELECT * FROM" + tableName + ";";
    connection.query(query, [tableName], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};



module.exports = orm;