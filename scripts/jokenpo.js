//JOKENPO - PEDRA, PAPEL, TESOURA

const options = [
  { name: 'rock', wins: 'scissors', loses: 'paper' },
  { name: 'paper', wins: 'rock', loses: 'scissors' },
  { name: 'scissors', wins: 'paper', loses: 'rock' },
];

const setPlayerChoice = (choice) => {
  clearChoices();
  playerChoice = choice;
  choiceDiv = document.getElementById(options[playerChoice].name);
  choiceDiv.classList.remove('border-2', 'border-slate-900');
  choiceDiv.classList.add('border-4', 'border-green-700');
  messageBox = document.getElementById('message-box');
  messageBox.innerHTML = `YOUR CHOICE: ${options[
    playerChoice
  ].name.toUpperCase()}`;
};

const setCompChoice = () => {
  compChoice = Math.floor(Math.random() * 3);
  compChoiceDiv = document.getElementById(options[compChoice].name);
  compChoiceDiv.classList.remove('border-2', 'border-slate-900');
  compChoiceDiv.classList.add(
    'outline-4',
    'outline-orange-700',
    'outline-offset-2',
    'outline-dashed'
  );
};

const clearChoices = () => {
  optionsHTML = document.getElementsByClassName('option');
  for (var i = 0; i < optionsHTML.length; i++) {
    optionsHTML[i].classList.remove(
      'border-4',
      'border-green-700',
      'outline-4',
      'outline-orange-700',
      'outline-offset-2',
      'outline-dashed'
    );
    optionsHTML[i].classList.add('border-2', 'border-slate-900');
  }
};

const play = (playerChoice) => {
  setCompChoice();
  if (!playerChoice) {
    messageBox.innerHTML = `MAKE YOUR CHOICE: ROCK, PAPER OR SCISSORS?`;
  }

  let winner = '';

  if (options[playerChoice].name != options[compChoice].name) {
    if (options[playerChoice].wins === options[compChoice].name) {
      winner = 'player';
      messageBox.innerHTML = `YOU WON!`;
    } else {
      winner = 'comp';
      messageBox.innerHTML = `YOU LOST :(`;
    }
  } else {
    winner = 'draw';
    messageBox.innerHTML = `IT'S A DRAW, PLAY AGAIN!`;
  }
};
