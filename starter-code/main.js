console.log("JS file is connected to HTML! Woo!")

//declaring variables for 4 cards
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var numOfCards = 4;

/* if (cardOne ===cardThree) {
	alert( "You found a match!" );
}
	else {
		alert( "Sorry, try again.");
	} */

var gameBoard = document.getElementById("game-board");

function createBoard() {
	for (var i = 0; i < numOfCards; i += 1) {
		var card = 	document.createElement("div");
		card.className = "card";
		/*document.getElementById("game-board")*/gameBoard.appendChild(card);
	} // end for loop
} // end createBoard function

createBoard();