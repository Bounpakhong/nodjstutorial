// This is very first thing you should understand
let http = require('http'); //Default module in nodejs
let dt = require('./myownmodule'); // My own module
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Date: ' + dt.myDateTime());
    res.end('Hello World');
}).listen(8000);