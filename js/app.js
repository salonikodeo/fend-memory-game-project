/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//display card's symbol to the user
const displayCard = function(e){
	e.target.classList.add('open','show');
}

//add the clicked card to openCardsArray
var openCards = [];
const addToOpenCards = function(e){
	openCards.push(e.target);
}

//check whether cards match or not
let matchCheck = function(e){
	let firstCard = openCards[0].firstElementChild.className;
	let secondCard = openCards[1].firstElementChild.className;
	if(firstCard === secondCard){
   		return 1;
	}
	else {
    	return 0;
	}
};

//if cards match
const matchCards = [];
let matching = function(e){
	matchCards = [...matchCards,...openCards];
	openCards[0].classList.add('match');
	openCards[1].classList.add('match');	
}

//if cards not match
function notMatching(e){
	openCards[0].classList.remove('open','show');
	openCards[1].classList.remove('open','show');
	openCards.splice(0,2);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//events when card is clicked
document.body.addEventListener('click',function(e){
	e.preventDefault();
	//to check whether target is card only
	if(e.target.className === "card"){
		displayCard(e); //display card to the user
		addToOpenCards(e);
		let match = matchCheck(e);
		if(match){
			matching(e);
		}
		else{
			notMatching(e);
		}
	}
});