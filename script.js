
function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    return number
  }

  console.log(getComputerChoice())


function getHumanChoice () {
  let choice = prompt("Select Rock, Paper or Scissors");
  return choice.toLowerCase() === "rock" ? 1
  : choice.toLowerCase() === "paper" ? 2
  : choice.toLowerCase() === "scissors" ? 3
  : undefined
}

console.log(getHumanChoice ())
