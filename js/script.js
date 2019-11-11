let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2) {
    computerMove = 'nozyce';
} else {
    computerMove = 'papier';
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1){
    playerMove = 'kamień';
  } else if(playerInput == 2) {
      playerMove = 'nozyce';
  } else if(playerInput == 3) {
      playerMove = 'papier';
  }

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } 
else if(computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Ja wygrywam!');
  }
else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
  else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Błąd gracza - wybierz liczbę 1, 2 lub 3');
  }
  else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam!');
  }
  else if(computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  }
  else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }
  else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Błąd gracza - wybierz liczbę 1, 2 lub 3');
  }
  else if(computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!'); 
  }
  else if(computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywsz!'); 
  }
  else if(computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('Remis!'); 
  }
  else if(computerMove == 'nozyce' && playerMove == 'nieznany ruch'){
    printMessage('Błąd gracza - wybierz liczbę 1, 2 lub 3');
  }
  else {
      printMessage('Krytyczny błąd');
  }