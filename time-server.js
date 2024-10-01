const net = require('net')
function getCurentDate() {
    const date =  new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}-${month}-${day} ${hour}:${minute}`;
}
const server = net.createServer(function (socket) {
    socket.end(getCurentDate() + '\n');
})
server.listen(process.argv[2])