console.log("main.js loaded");


var words = ['flower', 'beach', 'planet', 'city', 'starfish', 'sleep', 'traffic', 'candle', 'water', 'random', 'yacht'];
var parts;

var randomWord;
var choosenLetters;
var hangingParts;

var $playerWord = $("#playerWord");
var $choosenLetters = $("#choosenLetters");


function chooseWord() {
	randomWord = words[Math.floor(Math.random() * words.length)];
}


function blanksFromAnswer() {
	var result = ""; 
		for(var i = 0; i < randomWord.length; i++) {
		$('#playerWord').append($("div").html("_ ").addClass("letterSpaces"));
		
		}
}

function render(){

	// render the word
	var displayWord = "";
	for (var i = 0; i < randomWord.length; i++) {
		if ( choosenLetters.indexOf(randomWord[i]) === -1) {
			displayWord += "_";
		} else {
			displayWord += randomWord[i];
		}
	}
	$playerWord.html(displayWord);

	// render choosen letters
	$choosenLetters.html(choosenLetters);


	// render hangings
	console.log(hangingParts);	



	// render remaining blanks

	// render score?, tries?

	
}


var start = function() {
	chooseWord();
	choosenLetters = "";
	loosingCount = 0;
	hangingParts = [];
	parts = ['head', 'torso', 'left arm', 'right arm', 'left leg', 'right leg'];
	$('#start').hide("slow");
	$('body').removeClass("bimage").addClass("bimage2");
};

$('#start').click(start); 

var fillInTheBlank = function(letter, index){
	$('#playerWord:nth-child(' + index + ")").html(letter);
}

// var checkForLetter = function(letter){
// 	for (var i = 0; i < randomWord.length; i++) {
// 		if (randomWord.charAt(i) === letter){
// 			fillInTheBlank(letter, i);
// 		}
// 	}
// }

function letterPressed(letter){
	if (choosenLetters.indexOf(letter) === -1) {
		choosenLetters += letter;
		if (randomWord.indexOf(letter) === -1) {
			hangingParts.push(parts.shift());
		}
	}
	render();
}


$(document).keyup(function (key){
	switch(key.which){
		case 65:
			letterPressed("a");
		break;

		case 66:
			letterPressed("b");
		break;

		case 67:
			letterPressed("c");
		break;

		case 68:
			letterPressed("d");
		break;

		case 69:
			letterPressed("e");
		break;

		case 70:
			letterPressed("f");
		break;

		case 71:
			letterPressed("g");
		break;

		case 72:
			letterPressed("h");
		break;

		case 73:
			letterPressed("i");
		break;

		case 74:
			letterPressed("j");
		break;

		case 75:
			letterPressed("k");
		break;

		case 76:
			letterPressed("l");
		break;

		case 77:
			letterPressed("m");
		break;

		case 78:
			letterPressed("n");
		break;

		case 79:
			letterPressed("o");
		break;

		case 80:
			letterPressed("p");
		break;

		case 81:
			letterPressed("q");
		break;

		case 82:
			letterPressed("r");
		break;

		case 83:
			letterPressed("s");
		break;

		case 84:
			letterPressed("t");
		break;

		case 85:
			letterPressed("u");
		break;

		case 86:
			letterPressed("v");
		break;

		case 87:
			letterPressed("w");
		break;

		case 88:
			letterPressed("x");
		break;

		case 89:
			letterPressed("y");
		break;

		case 90:
			letterPressed("z");
		break;
	}
});




/* add click listener in jquery, once it hears the click begin the game/get random word (test with console.log fuck yeah)

1. intro page with a play button 
-play button written in JS which doesn't bring you to a new page but rather hides elements and brings out new ones to the official game board.

2. 
-play button initiates word so a function that starts game = choose word

3. 
-word choosen with my randomizer and is shown via underscores using my loop

4. Main page
-shows a hanging platform and an alphabet on the bottom of the page and a blank word and a box for the player to enter a letter.

5. 
-everytime the player inputs a letter that letter dissapears

6.
-if the letter is correct then fill in the blank

7.
-if the letter is incorrect add a body part
-function = if words is wrong then add head etc.

8. 
-if word is complete then player wins and game ends

9.
-if all bodyparts are hanged before word is complete then game ends and player looses

10.
-play again button starts game over and chooses another random word

*/




