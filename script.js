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

let computerSelection;
/////////////////////////////////////////////////////
let computerScore = 0,
  humanScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

paper.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

scissors.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});
/////////////////////////////////////////////////////

const result = document.querySelector("#result");
const score = document.querySelector("#score");

function playRound(humanChoice, computerChoice) {
  console.log(`${humanChoice} ${computerChoice}`);

  if (humanChoice == "rock" && computerChoice == "scissors") {
    result.textContent = "You won!";
    humanScore++;
    score.textContent = `SCORE. You: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    result.textContent = "Computer won!";
    computerScore++;
    score.textContent = `SCORE. You: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    result.textContent = "You won!";
    humanScore++;
    score.textContent = `SCORE. You: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    result.textContent = "Computer won!";
    computerScore++;
    score.textContent = `SCORE. You: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    result.textContent = "You won!";
    humanScore++;
    score.textContent = `SCORE. You: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    result.textContent = "Computer won!";
    computerScore++;
    score.textContent = `SCORE. You: ${humanScore}, Computer: ${computerScore}`;
  } else {
    result.textContent = "DRAW!";
    score.textContent = `SCORE. You: ${humanScore}, Computer: ${computerScore}`;
  }

  if (humanScore == 5) {
    score.textContent = "!YOU WON WHOLE GAME! CONGRATULATIONS!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    score.textContent = "!COMPUTER WON WHOLE GAME! SOLLY!";
    humanScore = 0;
    computerScore = 0;
  }
}
