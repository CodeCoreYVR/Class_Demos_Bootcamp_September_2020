let count=5;

const intervalId=setInterval(()=>{
    if(count<=0){
        console.log("Go!");
        clearInterval(intervalId);
    }else{
        console.log( count + "....");
        count -=1
    }
},1000);

console.log("interval ID : ", intervalId)