let http = require('http');
let url = require('url');
let fs = require('fs'); // To call file system module
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('write.txt was updated!')
    res.end();
}).listen(8000);

fs.writeFile('write.txt', 'There is only one line message in this file.', function (err) {
    if (err) throw err;
    console.log('write.txt was created already!');
})