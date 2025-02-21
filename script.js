//Dom manipulation
const body = document.querySelector("body");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const results = document.createElement("div");
const score = document.createElement("div");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);

body.append(rock, paper, scissors);
body.append(results, score);

//rock paper scissors game
let userChoice = "";
let humanScore = 0;
let computerScore = 0;

function gameOver() {
  if (humanScore == 5) {
    results.textContent = "Yayyy!!! You win!";
    score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
  } else if (computerScore == 5) {
    results.textContent = "Ouch!!! Hard luck you lose!";
    score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
  }
}

function rockChoice() {
  userChoice = "rock";
  userChoice.toLowerCase();
  playRound(userChoice, getComputerChoice());
  return gameOver();
}

function paperChoice() {
  userChoice = "paper";
  userChoice.toLowerCase();
  playRound(userChoice, getComputerChoice());
  return gameOver();
}

function scissorsChoice() {
  userChoice = "scissors";
  userChoice.toLowerCase();
  playRound(userChoice, getComputerChoice());
  gameOver();
}

function getComputerChoice() {
  if (Math.floor(Math.random() * 3) == 0) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanScore != 5 && computerScore != 5) {
    if (humanChoice == "rock" && computerChoice == "paper") {
      results.textContent = "you lose! paper beats rock <br> ";
      computerScore++;
      score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      results.textContent = "you lose! scissors beats paper";
      computerScore++;
      score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      results.textContent = "you lose! rock beats scissors";
      computerScore++;
      score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      results.textContent = "you win! rock beats scissors";
      humanScore++;
      score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      results.textContent = "you win! paper beats rock";
      humanScore++;
      score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      results.textContent = "you win! scissors beats paper";
      humanScore++;
      score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
    } else {
      results.textContent =
        "It's a Draw! :(   you chose " + humanChoice + "and computer chose   " + computerChoice;
      score.textContent = " user = " + humanScore + "  and computer = " + computerScore;
    }
  }
}
