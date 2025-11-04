const express = require("express");
const router = express.Router();

var shopData = {
    shopName: "Drinks R Us",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"]
};
// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });

 router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send('hello ' + req.body.first + ' ' + req.body.last + ', you are now registered with the email ' + req.body.email);
});

// Export the router object so index.js can access it
module.exports = router;
