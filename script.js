
function playGame() {
  function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    return number
    }

function getHumanChoice() {
  let choice = prompt("Select Rock, Paper or Scissors");
  return choice.toLowerCase() === "rock" ? 1
  : choice.toLowerCase() === "paper" ? 2
  : choice.toLowerCase() === "scissors" ? 3
  : undefined;
  }

  var humanScore = 0;
  var computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    function readableChoice(choice) {
      return choice === 1 ? "Rock"
      : choice === 2 ? "Paper"
      : choice === 3 ? "Scissors"
      : undefined;
    }

    if (humanChoice === computerChoice) {
      alert(`Its a draw! You both selected ${readableChoice(humanChoice)}! The score is you ${humanScore}, the computer ${computerScore}`);
    }
    else if (humanChoice === 1 && computerChoice === 3 || humanChoice === 2 && computerChoice === 1 || humanChoice === 3 && computerChoice === 2) {
    humanScore = ++humanScore;
      alert(`You WIN! ${readableChoice(humanChoice)} beats ${readableChoice(computerChoice)}! The score is you ${humanScore}, the computer ${computerScore}`);
    }
    else {
      computerScore = ++computerScore;
      alert(`You LOOSE! ${readableChoice(computerChoice)} beats ${readableChoice(humanChoice)}! The score is you ${humanScore}, the computer ${computerScore}`);
    }
    
  }

  if (window.confirm("Do you want to play rock paper scissors?")) {
    let round = 0;
    while (round < 5) {
      round++;
      playRound(getHumanChoice(), getComputerChoice())
    }
  }
  else (alert("Maybe next time!"))
}

playGame()
