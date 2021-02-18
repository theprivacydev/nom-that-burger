const express = require('express');
const burgers = require('../models/burger.js');

// Create router
const router = express.Router();

// Homepage
router.get("/", (req, res) => {
    console.log('WE ARE IN GET');
    burgers.selectAll((data) => {
        let burgersObj = {burgers: data};
        console.log(burgersObj);
        res.render("index", burgersObj);
    })
});

// Post
router.post("/api/burgers/", (req, res) => {
    console.log('WE ARE IN POST');
    burgers.insertOne(["burger_name", "devoured"] , [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId })
    });
});


// Update 
router.put("/api/cats/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("condition in put", condition);

    burgers.updateOne({ devoured: req.body.devoured }, condition, (result) => {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});




// Export router
module.exports = router;