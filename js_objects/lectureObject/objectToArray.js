// {a:1 ,b:2, c:3}
function toArray(obj){
    let arrayBuffer=[];
    for( let key in obj){
        arrayBuffer.push([key,obj[key]]);
    }
    return arrayBuffer;
}
console.log(toArray({a:1 ,b:2, c:3}));