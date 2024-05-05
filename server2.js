let http = require('http'); //Default module in nodejs
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end(); // Always end with this code
}).listen(8000);