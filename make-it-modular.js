const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (err, data) => {
  if (err) console.log('Error Reading Directory: ', err);
  data.forEach(file => {
    console.log(file);
  });
});
