const fs = require('fs')

fs.readdir(process.argv[2], function readExt(err, files){
    if(err) console.log('Error Reading directory: ', err);
    files.forEach(file => {
        if(file.toString().split('.')[1] == process.argv[3].toString()) console.log(file);
    });
})