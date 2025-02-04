console.log("Hello World")


function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  console.log(getComputerChoice())
