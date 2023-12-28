let player={
    name: "per",
    chips:145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $  " + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else
    return randomNumber
}


function startGame(){
    isAlive = true
    let FirstCard = getRandomCard()
    let SecondCard = getRandomCard()
    cards = [FirstCard, SecondCard]
    sum = FirstCard + SecondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++){
        cardEl.innerHTML += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}