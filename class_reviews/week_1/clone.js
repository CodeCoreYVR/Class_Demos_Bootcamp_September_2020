const objA = {a: 1, b: 2}
const objB = objA

objA === objB // true

objA.a = 3
objA // {a: 3, b: 2}
objB // {a: 3, b: 2}

// Shallow clone

// When using object literal {} you create a new object in memory
objC = {...objA}
objD = Object.assign({}, ObjA) // returns target object which is a new {} we define

function clone(obj) {
  const clonedObj = {}
  for (let key in obj) {
    clonedObj[key] = obj[key]
  }
  
  return clonedObj
}

// Deep clone
objD.e = { f: "I'm nested" } // Add a nested object to objD
objE = {...objD} // create a shallow copy
objD.e // { f: "I'm nested" }
objE.e // { f: "I'm nested" }

// objE is a shallow copy of objD, but the e property on both is 
// pointing to the same object in memory
objD === objE // false
objD.e === objE.e // true

// Ways to clone:
objF = JSON.parse(JSON.stringify(objE))

// lodash cloneDeep method:
// https://www.npmjs.com/package/lodash.clonedeep


