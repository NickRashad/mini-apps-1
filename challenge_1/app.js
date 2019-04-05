// Model
// Current Player Turn
let currentTurn = true;
const move = () => currentTurn ? 0 : 1;
const swap = () => {
  currentTurn = ! currentTurn;
  displayMsg();
};
let players = {
  0: 'X',
  1: 'O',
};
// Keep track of board
let board = { '0': [], '1': [] };
const newBoard = () => {
  board = { '0': [], '1': [] }
  gameOn = true;
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
// Keep track of wins
let totalWins = { '0': 0, '1': 0 };
let gameOn = true;
const isWinner = (winner) => {
  totalWins[winner] += 1;
  document.getElementById('player0-score').innerHTML = totalWins[0];
  document.getElementById('player1-score').innerHTML = totalWins[1];
};

const isWin = (curr) => {
  let winningMoves = [ [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];
  for (let arr of winningMoves) {
    if (arr.every(val => board[curr].includes(val))) {
      gameOn = false;
      console.log(typeof curr);
      displayMsg(curr);
      return true;
    } else if (board['0'].length + board['1'].length === 9) {
      gameOn = false;
      displayMsg('tie');
    } else {
      displayMsg()
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
