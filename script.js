
function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    return number
  }

//console.log(getComputerChoice())


function getHumanChoice() {
  let choice = prompt("Select Rock, Paper or Scissors");
  return choice.toLowerCase() === "rock" ? 1
  : choice.toLowerCase() === "paper" ? 2
  : choice.toLowerCase() === "scissors" ? 3
  : undefined;
}



function playRound(humanChoice, computerChoice) {
  console.log(humanChoice)
  console.log(computerChoice)

  function readableChoice(choice) {
    return choice === 1 ? "Rock"
    : choice === 2 ? "Paper"
    : choice === 3 ? "Scissors"
    : undefined;
  }

  var humanScore = 0;
  var computerScore = 0;

  if (humanChoice === computerChoice) {
    alert(`Its a draw! You both selected ${readableChoice(humanChoice)}!`);
  }
  else if (humanChoice === 1 && computerChoice === 3 || humanChoice === 2 && computerChoice === 1 || humanChoice === 3 && computerChoice === 2) {
  humanScore = ++humanScore;
    alert(`You WIN! ${readableChoice(humanChoice)} beats ${readableChoice(computerChoice)}!`);
  }
  else {
    computerScore = ++computerScore;
    alert(`You LOOSE! ${readableChoice(computerChoice)} beats ${readableChoice(humanChoice)}!`);
  }
  return humanScore
}

console.log(playRound( getHumanChoice(), getComputerChoice()))
