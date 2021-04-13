function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

/* Computer Move */

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + ComputerMove);

/* Player Move*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName(playerInput);

/* if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} else {
    playerMove == 'ruch nieprawidłowy!';
} */

printMessage('Twój ruch to: ' + PlayerMove);

/* Result */

function displayResult (argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove, ComputerMove, PlayerMove);
    
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ty przegrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty przegrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ty przegrywasz!');
    } else if (argComputerMove == argPlayerMove){
        printMessage('Remis!');
    } else {
        printMessage('Ruch nieprawidłowy - przegrywasz walkowerem!');
    }   
}

displayResult(ComputerMove, PlayerMove);
