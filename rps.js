const choiceButtons = document.querySelectorAll("[data-choice]");
const rpsChoices = ["Rock", "Paper", "Scissors"];
let results = document.getElementById("results");
let playerScoreboard = document.getElementById("player-score");
let computerScoreboard = document.getElementById("computer-score");
let resetButton = document.querySelector("#resetButton");
let playerScore = 0;
let computerScore = 0;
let round = 0;

//Remove/Add click events
function startGame() {
  // Remove existing event listeners when reset game even if game has not finished
  choiceButtons.forEach((choiceButton) => {
    choiceButton.removeEventListener("click", handleClick);
  });
  //
  choiceButtons.forEach((choiceButton) => {
    choiceButton.addEventListener("click", handleClick);
  });
}

//Computer chooses 1 of 3 options randomly
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * rpsChoices.length);
  return rpsChoices[randomChoice];
}

//This gets the player data choice
function handleClick(e) {
  const playerChoice = this.dataset.choice; // 'this' refers to the clicked button
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
}

//Starts the round
function playRound(playerChoice, computerChoice) {
  round++;

  // Convert choices to uppercase
  playerChoice = playerChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  // Determine the result of the round and update results and scores
  if (playerChoice === computerChoice) {
    results.textContent = "It's a tie round!";
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    results.textContent =
      "You Win!\nPlayer's " +
      playerChoice +
      " beats Computer's " +
      computerChoice;
    playerScore++;
  } else {
    results.textContent =
      "You Lose!\nComputer's " + computerChoice + " beats Your " + playerChoice;
    computerScore++;
  }

  // Update scoreboard with current scores
  playerScoreboard.textContent = "You: " + playerScore;
  computerScoreboard.textContent = "Computer: " + computerScore;

  // Check if either player or computer score reaches 5 to stop the game
  if (playerScore === 5 || computerScore === 5) {
    stopGame();
  }
}

//Ending words lol
function stopGame() {
  if (computerScore > playerScore) {
    results.textContent = "The computer wins the game!";
  } else {
    results.textContent = "You win the game!";
  }

  // Remove event listener from choice buttons
  choiceButtons.forEach((choiceButton) => {
    choiceButton.removeEventListener("click", handleClick);
  });
}

function resetGame() {
  // Reset scores to 0
  playerScore = 0;
  computerScore = 0;

  // Reset scoreboard
  playerScoreboard.textContent = "You: 0";
  computerScoreboard.textContent = "Computer: 0";

  // Reset the words
  results.textContent = "";

  //startGame all over again
  startGame();
}

// Add event listener to the reset button
resetButton.addEventListener("click", resetGame);

//call startGame when opens
startGame();
