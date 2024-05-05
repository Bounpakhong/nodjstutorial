let http = require('http');
let url = require('url');
let fs = require('fs'); // To call file system module
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('open.txt was renamed to append.txt!')
    res.end();
}).listen(8000);

fs.rename('open.txt', 'append.txt', function (err) {
    if (err) throw err;
    console.log('open.txt was renamed to append.txt already!');
})