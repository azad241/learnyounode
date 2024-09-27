const fs = require('fs')
function FileReader(directory, file_ext, callback ){
    fs.readdir(directory, function readExt(err, files){
        if(err) return callback(err);
        return callback(null, files.filter(file => file.toString().split('.')[1] == file_ext.toString()))
    })
}

module.exports = FileReader;