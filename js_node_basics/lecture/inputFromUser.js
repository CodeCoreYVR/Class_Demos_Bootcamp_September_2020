const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('What did you have for breakfast?\n', (answer)=>{
    console.log(`I like ${answer}`)
    rl.close();
})