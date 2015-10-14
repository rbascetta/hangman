console.log("main.js loaded");


var words = ['flower', 'beach', 'planet', 'city', 'starfish', 'sleep', 'traffic', 'candle', 'water', 'random', 'yacht'];

var randomWord;

function chooseWord() {
	randomWord = words[Math.floor(Math.random() * words.length)];
}


function blanksFromAnswer() {
	var result = ""; 
		for(var i = 0; i < randomWord.length; i++) {
		$('#playerWord').append("_ ");
		//result += "_ " ;
	}
}


var start = function() {
	chooseWord();
	blanksFromAnswer();
	$('#start').hide("slow");
	$('body').removeClass("bimage").addClass("bimage2");
};

 $('#start').click(start); 

 var keyUp = function () {
 	$(document).keyup(function (key){
 		switch(key.which){
 			case 65:
 				console.log("a");
 			break;

 			case 66:
 				console.log("b");
 			break;

 			case 67:
 				console.log("c");
 			break;

 			case 68:
 				console.log("d");
 			break;

 			case 69:
 				console.log("e");
 			break;

 			case 70:
 				console.log("f");
 			break;

 			case 71:
 				console.log("g");
 			break;

 			case 72:
 				console.log("h");
 			break;

 			case 73:
 				console.log("i");
 			break;

 			case 74:
 				console.log("j");
 			break;

 			case 75:
 				console.log("k");
 			break;

 			case 76:
 				console.log("l");
 			break;

 			case 77:
 				console.log("m");
 			break;

 			case 78:
 				console.log("n");
 			break;

 			case 79:
 				console.log("o");
 			break;

 			case 80:
 				console.log("p");
 			break;

 			case 81:
 				console.log("q");
 			break;

 			case 82:
 				console.log("r");
 			break;

 			case 83:
 				console.log("s");
 			break;

 			case 84:
 				console.log("t");
 			break;

 			case 85:
 				console.log("u");
 			break;

 			case 86:
 				console.log("v");
 			break;

 			case 87:
 				console.log("w");
 			break;

 			case 88:
 				console.log("x");
 			break;

 			case 89:
 				console.log("y");
 			break;

 			case 90:
 				console.log("z");
 			break;

 		




 		}
 	}
 }




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




