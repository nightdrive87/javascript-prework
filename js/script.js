const playGame = function(playerInput) {
  clearMessages();
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const getMoveName = function(argMoveId) {
    if (argMoveId == 1) {
      console.log('wybrano liczbe 1');
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nozyce';
    } else {
      return 'nieznany ruch';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  const displayResult = function(argComputerMove, argPlayerMove) {

    console.log('moves:', argComputerMove, argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      return 'Ty wygrywasz!';
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
      return 'Ja wygrywam!';
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      return 'Remis!';
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
      return 'Błąd gracza - wybierz liczbę 1, 2 lub 3';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return 'Ja wygrywam!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
      return 'Ty wygrywasz!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      return 'Remis!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
      return 'Błąd gracza - wybierz liczbę 1, 2 lub 3';
    }
    else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
      return 'Ja wygrywam!';
    }
    else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywsz!';
    }
    else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce') {
      return 'Remis!';
    }
    else if (argComputerMove == 'nozyce' && argPlayerMove == 'nieznany ruch') {
      return 'Błąd gracza - wybierz liczbę 1, 2 lub 3';
    }
    else {
      return 'Krytyczny błąd';
    }
  }

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  const result = displayResult(computerMove, playerMove);
  printMessage(result);
}
const buttonRock = document.getElementById('play-rock');
const buttonScissors = document.getElementById('play-scissors');
const buttonPaper = document.getElementById('play-paper');

buttonRock.addEventListener('click', function () {
  playGame(1);
}
);
buttonScissors.addEventListener('click', function () {
  playGame(3);
}
);
buttonPaper.addEventListener('click', function () {
  playGame(2);
}
);
