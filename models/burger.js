const orm = require("../config/orm.js");

const burger = {
   selectAll: function(cb){
       orm.selectAll("burgers", function(res){
        console.log(selectAll);
           cb(res);
       });
   } 
}


module.exports = burger;
