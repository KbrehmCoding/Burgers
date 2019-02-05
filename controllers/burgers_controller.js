var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let handlebarsObj = {
            burgers: data
        };
        console.log(handlebarsObj);
        res.render("index", handlebarsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {

        console.log(result);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let burger_id = req.params.id;
    console.log("ID of burger to be updated is " + burger_id);
    burger.updateOne({
        eaten: true
    }, burger_id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;