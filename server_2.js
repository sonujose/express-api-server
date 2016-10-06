var express = require("express"),
http = require("http");
var port = 3000;
var hostname = "localhost";
var path = require("path");
var morgan = require("morgan");
var app = express();

/* Using express to setup a server*/

app.use(morgan("dev")); // logging request in console

app.use(express["static"](path.resolve('./public')));

var server = http.createServer(app);

server.listen(port, hostname, function() {
    console.log(`Server running at ${hostname}:${port}`)
});
