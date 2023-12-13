// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs');

// without promise

    // fs.readFile("c.txt",'utf8',(err,data)=>{
    //     fs.writeFile("c.txt",data.replace(/\s+/g, ' '),(err)=>{
    //         if(err) throw err;
    //         console.log("saved");
    //     })
    // })



// with promise

// const p = new Promise((resolve,reject)=>{
//     fs.readFile("c.txt",'utf8',(err,data)=>{
//         return resolve(data.replace(/\s+/g, ' '));
//     })
// }).then((data2)=>{
//     fs.writeFile("c.txt",data2,function(err){
//         if(err) throw err;
//         console.log("saved");
//     })
// })

//with async await
function readfile(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,'utf8',(err,data)=>{
            console.log("1")
            resolve(data.replace(/\s+/g, ' '));
            console.log("2")
        })
    })
}
const fileAddress = "c.txt";
async function changefile(){
    console.log("0");
    const change = await readfile(fileAddress);
    console.log("3");
    fs.writeFile(fileAddress,change,(err)=>{
        console.log("4")
        if(err) throw err;
        console.log("5");
    })
}
changefile();

// data = "hello     world    my    name   is       raman"
// console.log(data.replace(/\s+/g, ' '))