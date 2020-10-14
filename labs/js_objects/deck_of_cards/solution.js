const deck = {
  // will set the property of cards to the return value of `createCards`
  // defined at the end of this file
  cards: createCards(),

  shuffle: function() {
    let currentIndex = this.cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  },

  draw: function() {
    return this.cards.shift();
  },

  reset: function() {
    this.cards = createCards();
  }
}

function createCards(){
  let cards = [];
  const suits = ['♠', '♥', '♣', '♦'];
  const values = ['Ace', 2,3,4,5,6,7,8,9,10, 'Jack', 'Queen', 'King'];
  for (const value of values) {
    for (const suit of suits) {
      cards.push({suit, value})
    }
  }
  return cards;
}

