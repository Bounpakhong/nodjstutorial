let http = require('http');
let url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true).query; // Create query string
    let txt = q.date + "/" + q.month + "/" + q.year;
    res.end(txt);
}).listen(8000);