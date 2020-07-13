const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data){
        let burgerData = {
            burgers: data
        };
        console.log(burgerData);
    })
})

module.exports = router;
