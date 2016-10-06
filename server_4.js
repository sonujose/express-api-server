var http = require("http");
var port = 3000;
var hostname = "localhost";
var fs = require("fs");
var path = require("path"); 

/* Using node api to setup a server*/
http.createServer(function(req,res) {

    if(req.method == "GET") {
        var filepath = path.resolve('index.html');
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(filepath).pipe(res);
    } 
    
}).listen(port, hostname, function(){
    console.log(`Server running at ${hostname}:${port}`)
});

console.log("Listening to port 3000");