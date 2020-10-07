function printMulti(multiArr) {
  for (let i = 0; i < multiArr.length; i++) {
    const innerArray = multiArr[i]; // [1,2,3] or ['hello world', true 5] depending on where we are in the iteration
    for (let j = 0; j < innerArray.length; j++) {
      // const element = multiArr[i][j];
      const element = innerArray[j];
      console.log(element);
    }
  }
}

printMulti([[1, 2, 3], ['Helllo World', true, 5]]); // should log out: 1 2 3 hello world true 5
