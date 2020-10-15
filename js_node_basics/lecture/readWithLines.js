const fs=require('fs');

const fileName=process.argv[2];

fs.readFile(fileName,(err,data)=>{
    const fileContents=data.toString();
    console.log(fileContents)
    const lineArray=fileContents.split('\n');
    console.log(lineArray)
    lineArray.forEach((line,index)=>{
        console.log(`${index+1} | ${line}`)
    });
});