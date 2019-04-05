console.log('Yep!');

// Model
// Current Player Turn
let currentTurn = true;
const move = () => currentTurn ? "X" : "O";
const swap = () => currentTurn = ! currentTurn;

// Keep track of board
let board = { 'X': [], 'O': [] };
const newBoard = () => {
  for(let player in board) { board[player] = []; }
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
    message.innerHTML = `New Game. It is ${move()}'s turn`;
  } else if (decision === 'tie') {
    message.innerHTML = 'Tie Game! Please start a new game if you wish to continue';
  } else {
    message.innerHTML = `Winner! Congratulations player ${decision}!
    Please start a new game if you wish to continue`;
  }
};
// Keep track of wins
let totalWins = { 'X': 0, 'O': 0 };
let gameOn = true;
const isWinner = (winner) => totalWins[winner] += 1;
const isWin = (curr) => {
  let winningMoves = [ [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];
  for (let arr of winningMoves) {
    if (arr.every(val => board[curr].includes(val))) {
      gameOn = false;
      displayMsg(curr);
      return true;
    } else if (board['X'].length + board['O'].length === 9) {
      displayMsg('tie');
    }
  }
};

// View
// Player's X & O display indicator and score
// Session Storage ~ https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage


// Controller
let squares = document.querySelectorAll("th");
squares.forEach((elem) => {
  elem.addEventListener("click", () => {
    let curr = move();
    let pos = Number(elem.className);
    if (canAdd(pos) && gameOn) {
      board[curr].push(pos);
      elem.innerHTML= curr;
      isWin(curr) ? isWinner(curr.toString()) : swap();
    }
  });
});
let newGame = document.getElementById("newGame");
newGame.addEventListener("click", () => {
  squares.forEach((elem) => elem.innerHTML = "");
  newBoard();
  displayMsg('new');
});
