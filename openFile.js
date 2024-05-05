let http = require('http');
let url = require('url');
let fs = require('fs'); // To call file system module
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('open.txt was updated!')
    res.end();
}).listen(8000);

fs.open('open.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('open.txt was created already or ready to write down your data!');
})