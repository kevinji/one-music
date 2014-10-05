var express = require("express"),
    router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
    res.sendFile("./public/index.html", function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    });
});

module.exports = router;
