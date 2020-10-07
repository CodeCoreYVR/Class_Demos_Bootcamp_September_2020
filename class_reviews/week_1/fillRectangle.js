function fillRectangle(width, height, chr) {

  // creates inner array with length of the width
  const row = []
  for (let i = 1; i <= width; i++) row.push(chr)

  // creates outer array, adding the inner array height times
  const rectangle = []
  for (let i = 1; i <= height; i++) rectangle.push(row)

  return rectangle
}

const rectangle1 = fillRectangle(5, 4, '🔥')
console.log(rectangle1)

function rectangleToString(rectangle) {
  let string = ''
  for (let row of rectangle) {
    // join() is an array method that joins each element together with
    // the argument string that you pass in and it returns a string

    string += row.join('') + '\n'
  }

  return string
}

console.log(rectangleToString(rectangle1))
