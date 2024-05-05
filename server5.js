let http = require('http');
let url = require('url'); // Learn more about url module
let fs = require('fs');

let addr = "http://localhost:8000/default.html?date=05&month=05&year=2024";
let q = url.parse(addr, true);

console.log(q.host);
console.log(q.pathname); // /default.html
console.log(q.search);
console.log(q.query);

let qdata = q.query;
console.log(qdata.date + "/" + qdata.month + "/" + qdata.year);