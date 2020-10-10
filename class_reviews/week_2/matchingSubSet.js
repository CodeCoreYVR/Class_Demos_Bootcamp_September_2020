function matchingSet(arr1, arr2) {
  let matches = [] // initialize the output array

  // Push all matches to the output
  // for (let val1 of arr1) {
  //   for (let val2 of arr2) {
  //     if (val1 === val2) matches.push(val1)
  //   }
  // }

  // the solution below has less iterations than above
  const obj = {}
  for (let val of arr1) {
    // initialize a key of obj from the value from arr1 to true
    // keys in objects have to unique
    // if there are duplicates in arr1, it's fine because you can 
    // reassign the same key to a different value in objects
    // if the value exists in arr1, then the key will exist in obj
    obj[val] = true
  }
  for (let val of arr2) {
    // obj[val] will return true if the value existed in arr1
    // or undefined if it didn't (which is falsy)
    if (obj[val]) matches.push(val)
  }

  // remove duplicate from matches
  // if the cb in filter() returns false, it filters out the element in the array
  matches = matches.filter((val, i) => {
    // if the value already existed earlier in the array, indexOf() will
    // return that earlier index and not the current index
    // then the comparsion will return false
    return i === matches.indexOf(val)
  })

  return matches
}

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]))
console.log(matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y']))
