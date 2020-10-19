const fs=require('fs');
const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Please Input width of Rectangle:\n",(width)=>{
    console.log("width:",width);
    rl.question("Please Input Height of Rectangle:\n",(height)=>{
        console.log("HEight:", height);
        rl.question("What is the output file name?\n",(filename)=>{
            console.log("filename:",filename);
            createFileWithStars(width,height,filename);
            rl.close();
        })
    })
})



function createFileWithStars(width, height, filename){
    let output='';

    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            output+= '* ';
        }
        output +='\n';
    }
    fs.writeFile(`${filename}.txt`,output,(err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log(`wrote ${filename} to disk`)
    })
}