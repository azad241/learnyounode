const fs = require('fs') ;
fs.readFile(process.argv[2], 'utf8', function CountNL(err, content){
    if(err) console.log('error reading file: ', err)
    console.log(content.toString().split('\n').length - 1);
})
