function listToArr(list) {
  const values = []

  // push the first value to the array
  // because we reassign the list to the next object in the list 
  // in the first iteration of the while loop
  if (list.value) values.push(list.value)

  while (list.next) { // if next is null it's the end of the list and exit the loop
    list = list.next // get the next object in line
    values.push(list.value) // push that value to the array
  }

  return values
}

console.log(listToArr({value: 1, next: null}))
console.log(listToArr({value: 2, next: {value: 3, next: {value: 4, next: null}}}))
console.log(listToArr({}))

function arrToList(arr) {
  const list = { 
    value: arr[0],
    next: null,
  }
  
  arr = arr.slice(1)

  let currentObj = list
  for (let value of arr) {
    currentObj.next = {
      value: value,
      next: null,
    }

    // sets currentObj in the next iteration to be the most 
    // deeply nested object, which is the same reference to the object  
    // that's part of the linked list:
    currentObj = currentObj.next
    
    console.log("List:", list)
    console.log("currentObj:", currentObj)
  }

  return list
}

console.log(arrToList([4]))
console.log(arrToList([4, 3, 2, 1]))
