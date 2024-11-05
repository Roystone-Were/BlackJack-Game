// Define player object with initial name and chip amount
let player = {
    name: "Roy",
    chips: 150
}

// Initialize game variables
let sum = 0               // Stores the current sum of cards
let cards = []            // Array to hold the player's cards
let hasBlkJack = false    // Flag to check if player has blackjack
let isAlive = false       // Flag to check if player is still in the game
let message = ""          // Message to be displayed to the player

// Select DOM elements to display game messages, sum, and cards
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

// Display player's name and chips
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": KES " + player.chips

// Function to get a random card between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    // Adjust card values to Blackjack rules
    if (randomNumber > 10) {
        return 10    // Cards 11, 12, 13 are worth 10 points
    } else if (randomNumber === 1) {
        return 11    // Ace can be worth 11
    } else {
        return randomNumber
    }
}

// Start game by setting initial state and dealing two cards
function startGame() {
    isAlive = true                 // Player is now active in the game
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] // Initialize cards with the first two drawn
    sum = firstCard + secondCard    // Calculate initial sum of cards
    renderGame()                    // Call render to update the UI
}

// Function to render game state to the screen
function renderGame() {
    // Display all drawn cards
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    // Display the sum of cards
    sumEl.textContent = 'Sum: ' + sum

    // Set message based on the sum of cards
    if (sum <= 20) {
        message = "Draw new card?"
    } else if (sum === 21) {
        message = "BlackJack!"    // Player hits blackjack
        hasBlkJack = true
    } else {
        message = "Out of game"   // Player loses if sum exceeds 21
        isAlive = false
    }

    // Display the message to the player
    messageEl.textContent = message
}

// Function to draw a new card if player is still in the game
function newCard() {
    if (isAlive === true && hasBlkJack === false) {
        let addCard = getRandomCard() // Draw a new card
        sum += addCard                // Add card value to the sum
        cards.push(addCard)           // Add card to the array
        renderGame()                  // Re-render game state
    } else {
        messageEl.textContent = "Play Again"
        alert("PLAY AGAIN!!!")// Prompt to start a new game
    }
}
