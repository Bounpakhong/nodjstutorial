let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = '.' + q.pathname; // ./somepath
    if (filename == './') filename = 'index.html';
    // index.html is same as ./index.html
    fs.readFile(filename, function (error, data) {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('Error 404, not found!');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8000);