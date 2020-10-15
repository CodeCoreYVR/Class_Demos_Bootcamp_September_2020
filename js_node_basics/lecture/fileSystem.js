const fs=require('fs');

fs.readdir("./",(err,data)=>{
    if(err){
        process.exit(-1);
    }
    console.log(data);
})