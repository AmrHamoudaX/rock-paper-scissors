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
