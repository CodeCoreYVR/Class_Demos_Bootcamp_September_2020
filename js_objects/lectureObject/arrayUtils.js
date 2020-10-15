function returnFirstNElements(arr,n){
    return arr.slice(0,n);
}

const ArrayUtils={
    last:function(arr){
        return arr[arr.length-1];
    },
    first(arr){
        return arr[0];
    },
    take:returnFirstNElements
}

let array=["a","b","c"]

console.log(ArrayUtils.last(array));
console.log(ArrayUtils.first(array));
console.log(ArrayUtils.take(array,1));