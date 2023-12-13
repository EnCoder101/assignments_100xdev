// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
let content = "inside write-to-file.js"
fs.writeFile("b.txt",content,(err)=>{
    if(err) throw err;
    console.log("saved");
})