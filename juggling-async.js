const http = require('http');
function getContent(url) {
    return new Promise((resolve, reject) => {
        let data = '';
        http.get(url, (response) => {
            response.setEncoding('utf-8');
            response.on('data', (line) => {
                data += line;
            });
            response.on('end', () => {
                resolve(data);
            });
            response.on('error', (err) => {
                reject(err);
            });
        });
    });
}


let list = ['', '', ''];
async function printResults() {
    const a_v = [2, 3, 4];
    for (let i=0;i<a_v.length; i++) {
        try {
            const data = await getContent(process.argv[a_v[i]]);
            list[i] = data;
        } catch (error) {
            console.log(error);
        }
    }
    list.forEach(content => {
        console.log(content);
    });
}

printResults();
