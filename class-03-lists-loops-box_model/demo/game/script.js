/*
    (A FEW) USER STORIES
    - As Player 1, I want to provide answers that Player two will have to guess.
    - As a developer, I want to take Player 1's input and use them in the game.
    - As a developer, I want to work with an array and its methods for the first question.
    - As Player 2, I want to know how many guesses I have left for each question.
*/

// collect answers from Player 1
alert( 'Hi Player 1! Ready to give the answers you want Player 2 to guess?' );
var busLineAnswer = prompt( 'Give multiple correct answers for the following question: What bus lines do I ride? Separate your answers with a comma: 5, 15, 8' );
var commitAnswer = prompt( 'Great! Next question: How many commits did I make yesterday?' );
var numGuesses = prompt( 'Last question! How many guesses do they have for each question?' );

alert( '********************* \n \n PLAYER 2\'s TURN \n \n *********************' );

// ask Player 2 the questions
// TODO turn busLineAnswer into an array
// TODO give Player 2 multiple guesses

var busLineGuess = prompt( 'What bus line does Player 1 ride? There are multiple correct answers.' +
     'Guess one to move on. You have ' + numGuesses + ' guesses.' );
console.log( 'player 2 guessed bus line: ', busLineGuess );
if ( busLineGuess === busLineAnswer ) {
	alert( 'You got it dude!' );
} else {
	alert( 'Are you sure??' );
}

var commitGuess = prompt( 'How many commits did Player 1 make yesterday?' +
     'You have ' + numGuesses + ' guesses.' );
console.log( 'player 2 guessed ', commitGuess, ' commits' );
if ( commitGuess === commitAnswer ) {
	alert( 'You got it dude!' );
} else {
	alert( 'Nope, sorry.' );
}