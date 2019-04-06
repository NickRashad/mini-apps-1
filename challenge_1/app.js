// Model
/** Current Players
 *  @players - Holds the names of two different competitors. It can later be changed
 *  @currentTurn - Binary true/false value to indicate whose turn it is
 *  @move - Reveals whose turn it is X or O
 * */
let players = { 0: 'X', 1: 'O'};
let currentTurn = sessionStorage.getItem('currentTurn') ? JSON.parse(sessionStorage.getItem('currentTurn')) : true;
const move = () => currentTurn ? 0 : 1;

/** Board & Wins
 *  @board - Holds all the board positions for both Player1 and Player2
 *  @totalWins - Holds total # of wins for both Player1 and Player2
 *  @gameOn - Boolean value activated upon finding a winner in order to indicate a new game needs to be started
 * */
let board = {
  '0': JSON.parse(sessionStorage.getItem('board0')) || [],
  '1': JSON.parse(sessionStorage.getItem('board1')) || [],
};
// Keep track of wins
let totalWins = {
  '0': JSON.parse(sessionStorage.getItem('score0')) || 0,
  '1': JSON.parse(sessionStorage.getItem('score1')) || 0,
};
let gameOn = sessionStorage.getItem('gameOn') ? JSON.parse(sessionStorage.getItem('gameOn')) : true;

// View
// Player's X & O display indicator and score
// Session Storage ~ https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
document.getElementById('player0-score').innerHTML = sessionStorage.getItem('score0') || 0;
document.getElementById('player1-score').innerHTML = sessionStorage.getItem('score1') || 0;
{
  let board0 = JSON.parse(sessionStorage.getItem('board0'));
  let board1 = JSON.parse(sessionStorage.getItem('board1'));
  for(let pos in board0) {
    var className = board0[pos].toString();
    document.getElementById(className).innerHTML = 'X';
  }
  for(let pos in board1) {
    var className = board1[pos].toString();
    document.getElementById(className).innerHTML = 'O';
  }
}

// Controller
/**
 * @Swap
 * @isWinner
 * @isWin
 * @addToBoard
 * @newBoard
 * @canAdd
 * @displayMsg
 * @squares
 * @newGame
 */
const swap = () => {
  currentTurn = ! currentTurn;
  sessionStorage.setItem('currentTurn', JSON.stringify(currentTurn));
  displayMsg();
};
const isWinner = (winner) => {
  totalWins[winner] += 1;
  sessionStorage.setItem(`score${winner}`, totalWins[winner])
  document.getElementById(`player${winner}-score`).innerHTML = totalWins[winner];
};
const isWin = (curr) => {
  let winningMoves = [ [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];
  for (let arr of winningMoves) {
    if (arr.every(val => board[curr].includes(val))) {
      sessionStorage.setItem('gameOn', JSON.stringify(false));
      gameOn = false;
      displayMsg(curr);
      return true;
    } else if (board['0'].length + board['1'].length === 9) {
      sessionStorage.setItem('gameOn', JSON.stringify(false));
      gameOn = false;
      displayMsg('tie');
    } else {
      displayMsg()
    }
  }
};
const addToBoard = (pos) => {
  let curr = move();
  board[curr].push(pos);
  sessionStorage.setItem(`board${curr}`,JSON.stringify(board[curr]));
}
const newBoard = () => {
  board = { '0': [], '1': [] };
  sessionStorage.setItem('board0', JSON.stringify([]));
  sessionStorage.setItem('board1', JSON.stringify([]));
  gameOn = true;
  sessionStorage.setItem('gameOn', JSON.stringify(true));
  displayMsg('new');
};
const canAdd = (position) => {
  for (let curr in board) {
    if (board[curr].includes(position)) { return false; };
  }
  return true;
};
const displayMsg = (decision) => {
  var message = document.getElementById('UserMessage');
  if (decision === 'new') {
    message.innerHTML = `New Game. It is ${players[move()]}'s turn`;
  } else if (decision === 'tie') {
    message.innerHTML = 'Tie Game! Please start a new game if you wish to continue';
  } else if (decision !== undefined) {
    message.innerHTML = `Winner! Congratulations player ${players[decision]}!
    Please start a new game if you wish to continue`;
  } else if (gameOn) {
    message.innerHTML = `It is ${players[move()]}'s turn`;
  }
};
let squares = document.querySelectorAll("th");
squares.forEach((elem) => {
  elem.addEventListener("click", () => {
    let curr = move();
    let pos = Number(elem.id);
    if (canAdd(pos) && gameOn) {
      console.log('Position', pos);
      // board[curr].push(pos);
      addToBoard(pos);
      elem.innerHTML= curr ? 'O' : 'X';
      isWin(curr) ? isWinner(curr.toString()) : swap();
    }
  });
});

let newGame = document.getElementById("newGame");
newGame.addEventListener("click", () => {
  squares.forEach((elem) => elem.innerHTML = "");
  newBoard();
});