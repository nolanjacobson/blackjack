const deck = []
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']
const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

const userHand = []
const dealerHand = []
let userSum = 0
let dealerSum = 0

// hide the backs of the cards on page load since they are displayed in the html file

const main = () => {
  document.querySelector('.backOfCards').classList.add('hide')
  document.querySelector('.backOfCards1').classList.add('hide')
}

const deal = () => {

  createDeck()
  shuffleDeck()
  dealUserHand()
  dealDealerHand()
}

const getCardValue = ranks => {
  if (ranks === 'Ace') {
    return 11
  } else if (ranks === 'King' || ranks === 'Queen' || ranks === 'Jack') {
    return 10
  } else {
    return parseInt(ranks)
  }
}

const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let m = 0; m < ranks.length; m++) {
      const card = {
        rank: ranks[m],
        suit: suits[i],
        value: getCardValue(ranks[m]),
        imageUrl: ranks[m] + '_of_' + suits[i] + '.svg'
      }
      deck.push(card)
    }
  }
}
const shuffleDeck = () => {
  for (let z = 51; z >= 1; z--) {
    const j = Math.floor(Math.random() * z)

    const swapper = deck[j]
    deck[j] = deck[z]
    deck[z] = swapper
  }
  console.log(deck)
}

const dealDealerHand = () => {
  for (let i = 0; i < 2; i++) {
    document.querySelector('.backOfCards').classList.remove('hide')
    document.querySelector('.backOfCards1').classList.remove('hide')
  }
}

const dealUserHand = () => {

  for (let i = 0; i < 2; i++) {
    const drawnUserCard = deck.pop()
    userHand.push(drawnUserCard)
    const userHandLi = document.createElement('li')
    const img = document.createElement('img')
    img.src = './images/' + drawnUserCard.imageUrl
    userHandLi.appendChild(img)
    document.querySelector('.playerCards').appendChild(userHandLi)
    userSum += userHand[i].value
    document.querySelector('.userSum').textContent = userSum
  }

  if (userSum > 21) {

    document.querySelector('#userCards').textContent = 'BUST'
    document.querySelector('#dealerCards').textContent = 'WINNER'
    document.querySelector('button.hitMe').disabled = true
    document.querySelector('.stand').disabled = true
    document.querySelector('.deal').disabled = true
}

  else if (userSum === 21) {
  document.querySelector('#userCards').textContent = 'WINNER'
  document.querySelector('#dealerCards').textContent = 'BUST'
  document.querySelector('.hitMe').disabled = true
  document.querySelector('.stand').disabled = true
  document.querySelector('.deal').disabled = true
}

}

const hitMe = () => {

  for (let n = 0; n < 1; n++) {
    const hitUserCard = deck.pop()
    userHand.push(hitUserCard)
    const userHandLiTwo = document.createElement('li')
    const imgTwo = document.createElement('img')
    imgTwo.src = './images/' + hitUserCard.imageUrl
    userHandLiTwo.appendChild(imgTwo)
    document.querySelector('.playerCards').appendChild(userHandLiTwo)
    userSum += hitUserCard.value
    document.querySelector('.userSum').textContent = userSum
  }
  if (userSum > 21) {

    document.querySelector('#userCards').textContent = 'BUST'
    document.querySelector('#dealerCards').textContent = 'WINNER'
    document.querySelector('button.hitMe').disabled = true
    document.querySelector('.stand').disabled = true
    document.querySelector('.deal').disabled = true
}

  else if (userSum === 21) {
  document.querySelector('#userCards').textContent = 'WINNER'
  document.querySelector('#dealerCards').textContent = 'BUST'
  document.querySelector('.hitMe').disabled = true
  document.querySelector('.stand').disabled = true
  document.querySelector('.deal').disabled = true
}
}


const hitDealer = () => {
  let i = 0
  while (dealerSum <= 17) {
    document.querySelector('.backOfCards').classList.add('hide')
    document.querySelector('.backOfCards1').classList.add('hide')
    const drawnDealerCard = deck.pop()
    dealerHand.push(drawnDealerCard)
    const dealerHandLi = document.createElement('li')
    const img = document.createElement('img')
    img.src = './images/' + drawnDealerCard.imageUrl
    dealerHandLi.appendChild(img)
    document.querySelector('.dealerCards').appendChild(dealerHandLi)
    dealerSum += dealerHand[i].value
    document.querySelector('.dealerSum').textContent = dealerSum
    i++
  }
  if (dealerSum > 21) {
    document.querySelector('#userCards').textContent = 'WINNER'
    document.querySelector('#dealerCards').textContent = 'BUST'
    document.querySelector('button.hitMe').disabled = true
    document.querySelector('.stand').disabled = true
    document.querySelector('.deal').disabled = true
  }
  else if (dealerSum === 21) {
    document.querySelector('#userCards').textContent = 'BUST'
    document.querySelector('#dealerCards').textContent = 'WINNER'
    document.querySelector('button.hitMe').disabled = true
    document.querySelector('.stand').disabled = true
    document.querySelector('.deal').disabled = true
  }
  else if (dealerSum > userSum) {
    document.querySelector('#userCards').textContent = 'BUST'
    document.querySelector('#dealerCards').textContent = 'WINNER'
    document.querySelector('button.hitMe').disabled = true
    document.querySelector('.stand').disabled = true
    document.querySelector('.deal').disabled = true
  }
}


const reset = () => {
  location.reload()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deal').addEventListener('click', deal)
document.querySelector('.stand').addEventListener('click', hitDealer)
document.querySelector('.hitMe').addEventListener('click', hitMe)
document.querySelector('.reset').addEventListener('click', reset)

//How can I add within a scope and not have it reset to 0 when I leave the scope?