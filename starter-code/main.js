console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var createBoard = function(){
	var gameBoard = document.getElementById('game-board');
	for(var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards)
		gameBoard.appendChild(newCard);
	}
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }  
  var totalCards = document.getElementsByClassName('card');
  for (var i = 0; i < totalCards.length; i++) {
  	totalCards[i].innerHTML = "";
  }
}


var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; 
	} else {
		this.innerHTML = "<img src='queen.png'>";
	}
  
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createBoard();


/*
if (cardOne === cardTwo) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}

if (cardThree === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}

if (cardOne === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}

if (cardTwo === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}

if (cardThree === cardOne) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}

if (cardThree === cardTwo) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
} */
