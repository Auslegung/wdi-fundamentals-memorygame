console.log("JS file is connected to HTML! Woo!")

var numOfCards = 4;
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var gameBoard = document.getElementById("game-board");

// creates numOfCards cards, assigns them class "card", element "div", and data "queen" or "king". Adds each card to gameBoard
function createBoard() {
	for (var i = 0; i < cards.length; i += 1) {
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		cardElement.setAttribute( "data-card", cards[i] );
		cardElement.addEventListener("click", isTwoCards);
		//document.getElementById("game-board")  This follows the directions to the letter, but the below line is better I think
		gameBoard.appendChild(cardElement);
		gameBoard.appendChild(cardElement);
	} // end for loop
} // end createBoard function

// adds the clicked card to cardsInPlay. Once 2 cards have been clicked, calls isMatch
function isTwoCards () {
	cardsInPlay.push(this.getAttribute("data-card"));
	console.log ( this.getAttribute ( "data-card" ) );
	this.getAttribute === "king" ? "<img src = "KingPlayingCard.png" alt = "King" />" : "<img src = "QueenPlayingCard.png" alt = "Queen" />";
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay)
		cardsInPlay = [];
	} // end if
} // end isTwoCards function

// tests if contents of cardsInPlay are equal, then calls resetCards. Is called by isTwoCards.
function isMatch ( x ) {
	x[0] === x[1] ? alert( "You found a match!" ) : alert( "Sorry, try again.");
	resetCards();
} // end isMatch function

// removes all innerHTML of every card to reset the game board. Called by isMatch
function resetCards() {
	cardElement.innerHTML = "";
} // end resetCards function

createBoard();