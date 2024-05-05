let http = require('http');
let url = require('url');
let fs = require('fs'); // To call file system module
http.createServer(function (req, res) {
    // index.html == ./index.html
    fs.readFile('index.html', function(error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8000);