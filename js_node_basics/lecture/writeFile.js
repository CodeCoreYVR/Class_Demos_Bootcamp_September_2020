const fs=require("fs");

const text="My random text";
// Create a file
fs.writeFile("myfile.txt",text, err=>{
    console.log("File Created!");
})

fs.stat("myfile.txt",(err,stat)=>{
    console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
})

