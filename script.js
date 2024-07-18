// 1. write a function that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
  let numberUpTo3 = Math.random();

  if (numberUpTo3 <= 0.3333333) {
    return "rock";
  } else if (numberUpTo3 > 0.3333333 && numberUpTo3 <= 0.666666) {
    return "paper";
  } else {
    return "scissors";
  }
}

// 2. write a function that takes the user choice and returns it.
function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors. Write it down.");
  humanChoice = humanChoice.toLowerCase();

  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    humanChoice = prompt(
      "You wrote something wrong. Try again. Choose rock, paper or scissors."
    );
  }
  console.log(humanChoice);
  return humanChoice;
}

// 5. write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

function playGame() {
  //3. write variables to keep track of the players score.
  let humanScore = 0,
    computerScore = 0;

  // 2. write a function that takes the user choice and returns it.
  function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors. Write it down.");
    humanChoice = humanChoice.toLowerCase();

    if (
      humanChoice != "rock" &&
      humanChoice != "paper" &&
      humanChoice != "scissors"
    ) {
      humanChoice = prompt(
        "You wrote something wrong. Try again. Choose rock, paper or scissors."
      );
    }
    return humanChoice;
  }

  //   4. write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    console.log(`${humanChoice} ${computerChoice}`);

    if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
    } else {
    }
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  }

  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log(`Player won!`);
  } else if (humanScore < computerScore) {
    console.log(`Computer won!`);
  } else if (humanScore == computerScore) {
    console.log(`Tie!`);
  }
}

// START GAME
playGame();
