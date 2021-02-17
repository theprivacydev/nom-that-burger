const express = require('express');
const burgers = require('../models/burger.js');

// Create router
const router = express.Router();

// Homepage
router.get("/", (req, res) => {
    burgers.selectAll("burgers", (data) => {
        let burgersObj = {burgers: data};
        console.log(burgersObj);
        res.render("index", burgersObj);
    })
});

// Post
router.post("/api/burgers", (req, res) => {
    burgers.insertOne("burgers", req.body.burger, (result) => {
        res.json({ id: result.id })
    });
});


// Update 
// router.updateOne




// Export router
module.exports = router;