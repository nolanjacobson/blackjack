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
  console.log(deck)
}

// const deckImages = () => {
//   document.querySelector('.deckImages').textContent = '';
//   for (let i = 0; i < deck.length; i++){
//     const pic = document.createElement('div')
//     const icon = ''
//     if (deck[i].suits == 'Hearts') {
//       icon='?'
//     } 
//     else if (deck[i].suits == 'Spades') {
//     icon = '?'
//     }
//     else if (deck[i].suits =='Diamonds') {
//     icon = '?'
//     }
//     else {
//       icon = '?'
    
//     }
//     pic.textContent = deck[i].values + '' + icon;
//     pic.className = 'card'
//     document.querySelector('.deckImages').appendChild(pic)

// }
// 

const clickTheDeck = () => {
  document.querySelector('.cardResult').textContent = deck.pop()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deal').addEventListener('click', clickTheDeck)