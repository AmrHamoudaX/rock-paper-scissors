const body = document.querySelector("body");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";
let userChoice = "";

rock.addEventListener("click", rockChoice)
paper.addEventListener("click", paperChoice)
scissors.addEventListener("click", scissorsChoice)

body.append(rock, paper, scissors);

function rockChoice() {
  userChoice = "rock";
  userChoice.toLowerCase();
  return playRound(userChoice, getComputerChoice());
}

function paperChoice() {
  userChoice = "paper";
  userChoice.toLowerCase();
  return playRound(userChoice, getComputerChoice());
}

function scissorsChoice() {
  userChoice = "scissors";
  userChoice.toLowerCase();
  return playRound(userChoice, getComputerChoice());
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

//function getHumanChoice(userChoice) {
//let userChoice = "";
//let userChoice = String(prompt("Choose rock or paper or scissors"));
//if (button == "rock") {
//userChoice = "rock";
//return userChoice.toLowerCase();
//} else if (button == "paper") {
//userChoice = "paper";
//return userChoice.toLowerCase();
//} else if (button == "scissors") {
//userChoice = "scissors";
//return userChoice.toLowerCase();
//}
//console.log(userChoice);
//return userChoice.toLowerCase()
//}

//function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  //rock.addEventListener("click", rockChoice);
  //paper.addEventListener("click", paperChoice);
  //scissors.addEventListener("click", scissorsChoice);

  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("you lose! paper beats rock");
    computerScore++;
    console.log("this is user = " + humanScore + "  and this is computer " + computerScore);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("you lose! scissors beats paper");
    computerScore++;
    console.log("this is user = " + humanScore + "  and this is computer " + computerScore);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("you lose! rock beats scissors");
    computerScore++;
    console.log("this is user = " + humanScore + "  and this is computer " + computerScore);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("you win! rock beats scissors");
    humanScore++;
    console.log("this is user = " + humanScore + "  and this is computer " + computerScore);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("you win! paper beats rock");
    humanScore++;
    console.log("this is user = " + humanScore + "  and this is computer " + computerScore);
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("you win! scissors beats paper");
    humanScore++;
    console.log("this is user = " + humanScore + "  and this is computer " + computerScore);
  } else {
    console.log(
      "It's a Draw! :(   you chose " + humanChoice + "and computer chose   " + computerChoice
    );
    console.log("The score is  human = " + humanScore + " and computer = " + computerScore);
  }
}
//}
//playGame();
