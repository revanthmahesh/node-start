const fs = require('fs');
const path = require('path');

//file system read ans write
fs.readFile(path.join(__dirname,'README.md'),function (error,data) {
    if(error){return console.error(error)}
    console.log(data);
})

fs.writeFile(__dirname+'/assets/magic.txt','magic happen in node!!',function(error, data){
  if(error){return console.error(error)};
  console.log(data)
})