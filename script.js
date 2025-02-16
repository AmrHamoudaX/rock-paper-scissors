function getComputerChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  if (Math.floor(Math.random() * 3) == 0) {
    return rock;
  } else if (Math.floor(Math.random() * 3) == 1) {
    return paper;
  } else {
    return scissors;
  }
}

function getHumanChoice() {
  let userChoice = String(prompt("Choose rock or paper or scissors"));
  return userChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
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

  for (i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (i === 4 && humanScore > computerScore) {
      console.log("Congratulations you win!!");
    } else if (i === 4 && humanScore < computerScore) {
      console.log("Hard luck! you lose");
    } else if (i === 4 && humanScore == computerScore) {
      console.log("No winner");
    }
  }
}
playGame();
