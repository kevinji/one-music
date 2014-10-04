var http = require("http"),
	fs = require("fs");

fs.readFile("./static/index.html", function(err, html) {
    if (err) {
        throw err;
    }

	var port = process.env.PORT || 8000;

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(port);

	console.log("OneMusic server running on port " + port + ".");
});
