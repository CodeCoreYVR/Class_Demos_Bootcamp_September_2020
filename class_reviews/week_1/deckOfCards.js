const deck = {
  cards: generateCards(), // invoke generateCards() to return the cards array
  
  // pre-ES6 methods:
  shuffle: function() {
    // In this method definition, we don't know what `this` is until we invoke the method
    // If we invoke deck.shuffle(), `this` will implicitly bind to `deck`

    // The callback passed to sort() will return a number either greater or less than 0
    // More info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
    this.cards.sort(() => 0.5 - Math.random())
  },

  // ES6 method syntax
  draw() {
    // shift() removes the first element and returns it
    return this.cards.shift()
  }, 

  reset() {
    // set the cards property to a new array of cards by invoking generateCards()
    // no need to return unless we need a value when invoking reset()
    this.cards = generateCards()
  },
}

deck.shuffle()
console.log(deck.cards)
console.log(deck.draw())
console.log(deck.draw())
console.log(deck.draw())
console.log(deck.cards)
deck.reset()
console.log(deck.cards)

function generateCards() {
  const suits = ['diamonds', 'clubs', 'hearts', 'spades']

  // Setup numbers array from 1-13 to loop over
  const numbers = []
  for (let i = 1; i <= 13; i++) {
    numbers.push(i) // push an element to the end of the array
  }

  // Generate the cards array with 52 objects representing each card
  const cards = []
  for (let number of numbers) { // loop over each number from 1-13
    for (let suit of suits) { // for each number, loop through each suit
      cards.push({ suit: suit, number: number })

      // syntax sugar --> if key and value is the same name:
      // cards.push({ suit, number })
    }
  }

  return cards
}

