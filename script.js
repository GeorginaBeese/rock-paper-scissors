let getHumanChoice = document.querySelector("#choice");

var humanScore = 0;
var computerScore = 0;

getHumanChoice.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock': {
              const humanChoice = 1;
              playRound(humanChoice, getComputerChoice())
              break;
            }
            case 'paper': {
              const humanChoice = 2;
              playRound(humanChoice, getComputerChoice())
              break;
            }
            case 'scissors': {
              const humanChoice = 3;
              playRound(humanChoice, getComputerChoice())
              break;
            }
        }      
    });
    

function getComputerChoice() {
      const minCeiled = Math.ceil(1);
      const maxFloored = Math.floor(3);
      number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
      return number
      }


function playRound(humanChoice, computerChoice) {
  
  let results = document.querySelector("#results");

  function readableChoice(choice) {
      return choice === 1 ? "Rock"
      : choice === 2 ? "Paper"
      : choice === 3 ? "Scissors"
      : undefined;
    }

      if (humanChoice === computerChoice) {
        //alert(`Its a draw! You both selected ${readableChoice(humanChoice)}! The score is you ${humanScore}, the computer ${computerScore}`);
        results.textContent = `Its a draw! You both selected ${readableChoice(humanChoice)}! The score is you ${humanScore}, the computer ${computerScore}`
      }
      else if (humanChoice === 1 && computerChoice === 3 || humanChoice === 2 && computerChoice === 1 || humanChoice === 3 && computerChoice === 2) {
        humanScore = ++humanScore;
        if (humanScore == 5) {
          results.textContent = `Game Over! The final score is you ${humanScore}, the computer ${computerScore} `
          humanScore = 0
          computerScore = 0
        }
        else {
          results.textContent = `You WIN! ${readableChoice(humanChoice)} beats ${readableChoice(computerChoice)}! The score is you ${humanScore}, the computer ${computerScore}`
        } 
      }
      else {
        computerScore = ++computerScore;
        if (computerScore == 5) {
          results.textContent = `Game Over! The final score is you ${humanScore}, the computer ${computerScore} `
          humanScore = 0 
          computerScore = 0
        }
        else {
          results.textContent = `You LOOSE! ${readableChoice(computerChoice)} beats ${readableChoice(humanChoice)}! The score is you ${humanScore}, the computer ${computerScore}`
        }
      }
    }

