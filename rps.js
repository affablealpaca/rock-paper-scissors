function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function getUserChoice() {
  let userInput = prompt(
    "Please input rock, paper, or scissors (or press Cancel or Esc to quit)"
  ).toUpperCase();

  if (userInput === null) {
    alert("Game canceled.");
    return "";
  }

  if (
    userInput === "ROCK" ||
    userInput === "PAPER" ||
    userInput === "SCISSORS"
  ) {
    return userInput;
  } else {
    alert("Error: please input rock, paper, or scissors");
    return getUserChoice();
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${i + 1}: ${result}`);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
