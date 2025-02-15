let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  if (Math.floor(Math.random() * 3) == 0) {
    console.log(rock);
    return rock;
  } else if (Math.floor(Math.random() * 3) == 1) {
    console.log(paper);
    return paper;
  } else {
    console.log(scissors);
    return scissors;
  }
}

function getHumanChoice() {
  let userChoice = String(prompt("Choose rock or paper or scissors"));
  console.log(userChoice);
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  console.log("this is user = " + humanChoice + "  and this is computer " + computerChoice);
  console.log();
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    console.log("you lose! paper beats rock");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
    console.log("you lose! scissors beats paper");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
    console.log("you lose! rock beats scissors");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    console.log("you win! rock beats scissors");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    console.log("you win! paper beats rock");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    console.log("you win! scissors beats paper");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else {
    console.log("It's a Draw");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
