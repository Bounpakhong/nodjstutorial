let http = require('http');
let url = require('url');
let fs = require('fs'); // To call file system module
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('append.txt was updated!')
    res.end();
}).listen(8000);

fs.appendFile('append.txt', 'This message will show in another line.\n', function (err) {
    if (err) throw err;
    console.log('append.txt was update already!');
})