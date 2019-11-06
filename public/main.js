const deck = []
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let j = 0
let card

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let m = 0; m < values.length; m++) {
      card = values[m] + ' of ' + suits[i]
      deck.push(card)
    }
  }
  console.log(deck)

  for (i = 52; i >= 1; i--) {
    j = Math.floor(Math.random() * i)

    const swapper = deck[j]
    deck[j] = deck[i]
    deck[i] = swapper
  }
}

const clickTheDeck = () => {
  document.querySelector('.cardResult').textContent = deck.pop()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deck').addEventListener('click', clickTheDeck)
