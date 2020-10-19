const fs=require("fs");
const { stdin } = require("process");
// const fileName=process.argv[2];
const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('What is the name of output file?\n',(fileName)=>{
    fs.readFile(fileName,(err,data)=>{
        const fileContents=data.toString();
        const linesArray=fileContents.split('\n');
        linesArray.forEach((line,index)=>{
            console.log(`${index+1} | ${line}`);
        })
    })
    rl.close();
});

