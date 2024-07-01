const fs = require('fs');


//create the text file
fs.writeFile("welcome.txt","hello Node",(err)=>{
    if(err) throw err;
    console.log('welcome.txt has been created with "Hello Node"');
});


// read the text file
fs.readFile('welcome.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log("text file content : "+data);
});