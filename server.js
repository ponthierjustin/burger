const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlbars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


const routes = require("./controllers/burgersController.js");

app.use(routes); 


app.listen(PORT, function(){
    console.log("http://localhost:" + PORT);
})
