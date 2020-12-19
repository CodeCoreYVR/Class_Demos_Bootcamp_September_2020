const state = {
  one: "a",
  two: "b",
  three: {
    four: "c"
  },
  products: ["d", "e", "f"],
}

// The variables hold pointers to the object in memory
const reference = state
reference === state // -> true
reference.one = "g"
state.one // -> "g"

// Shallow copy
// Whenever we define an object or array literal using {} or [],
// we are creating a new object in memory

const copy1 = { ...state }

// copy all properties from the source object (2nd arg) into the target (1st arg)
// If the target object is a newly created empty object {}, we are 
// essentially shallow copying the source object
// The target object is return
const copy2 = Object.assign({}, state)

copy1 === state // -> false
copy1.one = "h"
state.one // -> "g"

copy2 === state // -> false
copy2.two = "i"
state.two // -> "b"

state.three // -> {four: "c"}
copy1.three === state.three && copy2.three === state.three // -> true

copy1.products.push("g")
state.products // -> ["d", "e", "f", "g"]

// Deep copy
// This method might have performance issues
const deepCopy = JSON.parse(JSON.stringify(state))
deepCopy === state // -> false
deepCopy.three.four = "m"
state.three // -> {four: "c"}

// You can use a function to deepClone found on Google or 
// use libraries such as lodash's "cloneDeep"

