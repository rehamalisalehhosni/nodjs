var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
module.exports = staticPge = function (req, res, filePath) {
    if (filePath == './')
        filePath = './index.html';
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    fs.readFile(filePath, function (error, content) {
        if (error) {
            res.writeHead(404);
            res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    });
}