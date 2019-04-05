console.log('Yep!');

// Model
// Player's X & O score & startfirst
// Current Player Turn
var currentTurn = true;
var board = { 'X': [], 'O': [] };
var totalWins = { 'X': 0, 'O': 0 };
var swap = () => currentTurn = ! currentTurn;
var move = () => currentTurn ? "X" : "O";
var isWinner = (winner) => totalWins[winner] += 1;
var canAdd = (position) => {
  for (let curr in board) {
    if (board[curr].includes(position)) { return false; };
  }
  return true;
};
var isWin = (curr) => {
  let winningMoves = [
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9],
    [1,5,9], [3,5,7]
  ];
  for (let arr of winningMoves){
    if(arr.every(val => board[curr].includes(val))) {
      return true;
    };
  }
};

// View
// Player's X & O display indicator and score
// Session Storage ~ https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage


// Controller
var squares = document.querySelectorAll("th");
squares.forEach((elem) => {
  elem.addEventListener("click", () => {
    var curr = move();
    let pos = Number(elem.className);
    if (canAdd(pos)) {
      board[curr].push(pos);
      elem.innerHTML= curr;
      isWin(curr) ? isWinner(curr.toString()) : swap();
    }
  });
});

// console.log(squares);

