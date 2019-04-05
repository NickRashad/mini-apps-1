console.log('Yep!');

// Model
// Player's X & O score & startfirst
// Current Player Turn
var currentTurn = true;
var move = () => {
  return currentTurn ? "X" : "O";
};
// View
// Player's X & O display indicator and score
// Session Storage ~ https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage


// Controller
var squares = document.querySelectorAll("th");
squares.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.innerHTML.length < 1) {
      elem.innerHTML= move();
      currentTurn = ! currentTurn;
    }
  });
});

// console.log(squares);

