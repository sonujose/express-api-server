var http = require("http");
var port = 3000;
var hostname = "localhost";
var fs = require("fs");
var path = require("path"); 

/* Using node api to setup a server*/
http.createServer(function(req,res) {

    if(req.method == "GET") {
        var filepath = path.resolve('./public/index.html');
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(filepath).pipe(res);
        console.log(`understanding difference between__dirname:  ${__dirname} and ./ : ${filepath}`);
        console.log(`${res}`);
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<h1>INVALID REQUEST</h1>");
    }
    
}).listen(port, hostname, function(){
    console.log(`Server running at ${hostname}:${port}`)
});

console.log("Listening to port 3000");