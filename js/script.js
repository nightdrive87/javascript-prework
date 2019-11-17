function playGame(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  function getMoveName(argMoveId) {
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

  function displayResult(argComputerMove, argPlayerMove) {

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

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  let result = displayResult(computerMove, playerMove);
  printMessage(result);
}
let buttonRock = document.getElementById('play-rock');
let buttonScissors = document.getElementById('play-scissors');
let buttonPaper = document.getElementById('play-paper');

buttonRock.addEventListener('click', function () {
  printMessage('Zagrałeś kamień');
}
);
buttonScissors.addEventListener('click', function () {
  printMessage('Zagrałeś nozyce');
}
);
buttonPaper.addEventListener('click', function () {
  printMessage('Zagrałeś papier');
}
);
