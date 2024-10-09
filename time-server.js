const net = require('net');

function zeroFill(number) {
    return number < 10 ? '0' + number : number;
}

const server = net.createServer((socket) => {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = zeroFill(now.getMonth() + 1);
    const day = zeroFill(now.getDate());
    const hours = zeroFill(now.getHours());
    const minutes = zeroFill(now.getMinutes());

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`;

    socket.end(formattedDate);
});

server.listen(process.argv[2]);
