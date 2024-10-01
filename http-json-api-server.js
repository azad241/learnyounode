const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const servedURL = new URL(req.url, `http://localhost:${process.argv[2]}`);
    
    const date = new Date(servedURL.searchParams.get('iso'));
    let result;

    if (servedURL.pathname === '/api/parsetime') {
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    } else if (servedURL.pathname === '/api/unixtime') {
        result = {
            unixtime: date.getTime()
        };
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found!!!' }));
    }
});

server.listen(process.argv[2]);
