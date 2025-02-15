let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  if (Math.floor(Math.random() * 3) == 0) {
    console.log(rock);
  } else if (Math.floor(Math.random() * 3) == 1) {
    console.log(paper);
  } else {
    console.log(scissors);
  }
}

function getHumanChoice() {
  let userChoice = String(prompt("Choose rock or paper or scissors"));
  console.log(userChoice);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += computerScore;
    console.log("you lose! paper beats rock");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore += computerScore;
    console.log("you lose! scissors beats paper");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore += computerScore;
    console.log("you lose! rock beats scissors");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    computerScore += computerScore;
    console.log("you win! rock beats scissors");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    computerScore += computerScore;
    console.log("you win! paper beats rock");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  } else {
    computerScore += computerScore;
    console.log("you win! paper beats rock");
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  }
}
