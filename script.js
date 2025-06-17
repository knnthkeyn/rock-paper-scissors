function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock Paper Scissors?").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    //rock
    if (humanChoice == "rock" && computerChoice == "rock") {
      return "Draw!";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      return "You Lose! Paper covers Rock!";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      return "You Win! Rock crushes Scissors!";
    }
    //paper
    else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      return "You Win! Paper covers Rock!";
    } else if (humanChoice == "paper" && computerChoice == "paper") {
      return "Draw!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      return "You Lose! Scissors cuts Paper";
    }
    //scissors
    else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      return "You Lose! Rock crushes Scissors!";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      return "You Win! Scissors cuts Paper!";
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
      return "Draw!";
    }
  }

  for (let i = 0; i < 5; i++) {
    let player = getHumanChoice();
    let computer = getComputerChoice();
    console.log(playRound(player, computer));
  }

  return humanScore > computerScore
    ? console.log(
        `Player Score: ${humanScore}\nComputer Score: ${computerScore}\nYou Win!`
      )
    : console.log(
        `Player Score: ${humanScore}\nComputer Score: ${computerScore}\nYou Lose!`
      );
}

playGame();
