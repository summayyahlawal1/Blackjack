/* 
Lesson 16: Object intro

1. Create a paragraph with an id of "player-el"
2. Create the player object. Give it two keys, name and chips and set their values.
3. Grab ahold of player-el paragraph and store it in a variable called playerEl
4. Render the player's name and chips in playerEl
*/

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

// let playerName = "Fridaws"
// let playerChips = 195
let player = {
    name: "Summayyah",
    chips: 195,
    contry: "Canada"
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " :" + player.chips + " " + player.contry
console.log(cards);




function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?😥  ";
    } else if (sum === 21) {
        message = "You've got Balckjack!💰💴💵💸 ";
        hasBlackjack = true
    } else {
        message = "You're out of the game! 😭 ";
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    
if (isAlive === true && hasBlackjack === false){
     let card =  getRandomCard()
    sum += card
    
    cards.push(card)
    // console.log(cards);
    
    renderGame()
   }
}