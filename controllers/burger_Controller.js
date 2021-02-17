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
router.post("/api/burgers", (req, res) => {
    console.log('WE ARE IN POST');
    burgers.insertOne(req.body.burger, (result) => {
        res.json({ id: result.id })
    });
});


// Update 
// router.updateOne




// Export router
module.exports = router;