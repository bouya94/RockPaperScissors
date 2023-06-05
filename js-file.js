
let winner;
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let para = document.querySelector('p');
para.textContent ='Click to start!'

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}
function getPlayerChoice(choice){
  playerChoice = choice;
  return playerChoice ;
}
let rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    oneRound(getComputerChoice(), getPlayerChoice('rock'));
    result();
    gameResult();
    
});
let paper = document.getElementById('paper');
paper.addEventListener('click',() =>{
    oneRound(getComputerChoice(), getPlayerChoice('paper'));
    result();
    gameResult();
    
});
let scissors = document.getElementById('scissors');
  scissors.addEventListener('click',()=>{
    oneRound(getComputerChoice(), getPlayerChoice('scissors'));
    result();
    gameResult();
    
});





function oneRound(playerSelection, computerSelection,) {

  if (playerSelection == computerSelection) {
      return winner = 0;
  }else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
  (playerSelection == 'paper' && computerSelection == 'rock') ||
  (playerSelection == 'scissors' && computerSelection == 'paper')){
   return winner = 'player';
    
  }else{
   return winner = 'pc';
  }
}
function result(){
  if(winner == 'player' && playerScore <= 4){
    para.textContent = `Player : ${++playerScore} PC: ${computerScore}`;
  } else if (winner == 'pc' && computerScore <= 4) {
    para.textContent = `Player : ${playerScore} PC: ${++computerScore}`;
  } else {
    para.textContent =`Player : ${playerScore} PC: ${computerScore}`;
  }
}
function gameResult() {
  if (playerScore == 4){
    para.textContent = 'You win!';
  }else if(computerScore == 4) {
    para.textContent = 'Skynet wins!';
  }
}

