const http = require('http');
const map = require('through2-map');
const server = http.createServer(function (req, res) {
    if(req.method == 'POST') {
        req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
    }
    else{
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        return res.end('POST Req Only\n');
    }
})
server.listen(process.argv[2]);