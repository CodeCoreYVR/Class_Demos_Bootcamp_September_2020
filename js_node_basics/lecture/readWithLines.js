const fs=require('fs');

const fileName=process.argv[2];
// const name=process.argv[3];
// console.log(name)
// const fileName="poem.txt"

fs.readFile(fileName,(err,data)=>{
    if(err){
        console.log('File Not found')
        process.exit(-1);
    }
    console.log(data);
    const fileContents=data.toString();
    console.log(fileContents)
    const lineArray=fileContents.split('\n');
    console.log(lineArray)
    lineArray.forEach((line,index)=>{
        console.log(`${index+1} | ${line}`)
    });
});