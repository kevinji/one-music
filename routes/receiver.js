var express = require("express"),
	router = express.Router(),

	http = require("http"),
	fs = require("fs"),

	file = fs.createWriteStream("tmp/music.mp3");

router.get("/receiver", function(req, res) {
	res.sendFile("./public/receiver.html", function(err) {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		}
	});
});

module.exports = router;
