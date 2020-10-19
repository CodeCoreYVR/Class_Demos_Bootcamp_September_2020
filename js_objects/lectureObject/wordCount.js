function wordCount(str){
    // "this is this and that")
    let arrStr=str.split(" ");
    // arrStr=["this","is","this","and","that"]
    let wordMap={};

    for (let i=0;i<arrStr.length;i++){
        if(wordMap[arrStr[i]]){
            wordMap[arrStr[i]]++; //wordMap[arrStr[i]]=wordMap[arrStr[i]] + 1
        }else{
            wordMap[arrStr[i]]=1
            // wordMap["this"]=1
        }
    }
    return wordMap;
}

console.log(wordCount("this is this and that"));