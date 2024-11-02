let firstCard = 3
let secondCard = 0
let sum = firstCard + secondCard
let hasBlkJack = false
let isAlive = true
let message = ""

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Draw new card?"
    } else if (sum === 21) {
        message = "Black JK"
        hasBlkJack = true
    } else {
        message = "Out of game"
        isAlive = false
    }
    messageEl.innerHTML = message
    sumEl.textContent = 'Sum: ' + sum
    cardEl.textContent = (`Cards: ${firstCard} + ${secondCard}`)
}

function newCard() {
    let addCard = Number(prompt("Enter a card number"))
    sum += addCard
    renderGame()
}