const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
 res.writeHead('200',{'Content-Type': 'Text/Plain'});
 const readStream = fs.createReadStream(process.argv[3]);
 readStream.pipe(res);
})
server.listen(process.argv[2]);