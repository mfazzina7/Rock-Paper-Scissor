let computerSelection = computerPlay();
let playerSelection = "Rock";
let computerScore = 0;
let playerScore = 0;

game();

function computerPlay() {
  let number = Math.floor(Math.random() * 3);

  if (number === 0) {
    return "Rock";
  } else if (number === 1) {
    return "Paper";
  } else if (number === 2) {
    return "Scissors";
  } else {
    return "Error";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      return "Tie game rock n rock";
    } else if (computerSelection === "Paper") {
      computerScore += 1;
      return "Computer wins";
    } else if (computerSelection === "Scissors") {
      playerScore += 1;
      return "Player Wins";
    } else {
      return error;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore += 1;
      return "Player Wins";
    } else if (computerSelection === "Paper") {
      return "Tie game";
    } else if (computerSelection === "Scissors") {
      computerScore += 1;
      return "Computer wins";
    } else {
      return error;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      computerScore += 1;
      return "Computer Wins";
    } else if (computerSelection === "Paper") {
      playerScore += 1;
      return "Player Wins";
    } else if (computerSelection === "Scissors") {
      return "Tie game";
    } else {
      return error;
    }
  } else {
    return "error";
  }
}

function game() {
  while (playerScore < 3 && computerScore < 3) {
    computerSelection = computerPlay();
    //   console.log(playerSelection);
    console.log(playRound(playerSelection, computerSelection));
    //   console.log(
    //     "Player is " + playerSelection + " Computer is " + computerSelection
    //   );
    console.log("Computer: " + computerScore + " - Player: " + playerScore);
  }
}
