let http = require('http');
let url = require('url');
let fs = require('fs'); // To call file system module
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('append.txt was removed!')
    res.end();
}).listen(8000);

fs.unlink('append.txt', function (err) {
    if (err) throw err;
    console.log('append.txt was removed already!');
})