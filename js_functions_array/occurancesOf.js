function occurencesOf(char, words) {
  let countArr = [];
  let count = 0;
  for(let i = 0; i < words.length; i++) { // iterates over the array
    for(let j = 0; j < words[i].length; j++) { // iterates over the characters of the element
      if (char === words[i][j]) { // if char is the letter increment `count`
        count += 1;
      }
    }
    countArr.push(count); // when we finish looping over a word we push count to countArr
    count = 0;
  }
  return countArr;
}

const result = occurencesOf('l', ['hello', 'world', 'lllll', 'help']); // [2, 1]
console.log(result);
