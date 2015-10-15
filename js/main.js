//console.log("main.js loaded");


var words = ['flower', 'beach', 'planet', 'city', 'starfish', 'sleep', 'traffic', 'candle', 'water', 'random', 'yacht'];

var	parts = ['noose', 'head', 'torso', 'pelvis', 'arms', 'legs', 'dead'];

var randomWord;
var choosenLetters;
var loosingCount;
var winner;

var $playerWord = $("#playerWord");
var $choosenLetters = $("#choosenLetters");
var $boy = $("#boy");
var $refresh = $('#refresh');

//randomizer
function chooseWord() {
	randomWord = words[Math.floor(Math.random() * words.length)];
}



function render(){
	var winCheck = true;

	// render the word
	var displayWord = "";
	for (var i = 0; i < randomWord.length; i++) {
		if ( choosenLetters.indexOf(randomWord[i]) === -1) {
			displayWord += "_";
			winCheck = false;
		} else {
			displayWord += randomWord[i];
		}
	}
	$playerWord.html(displayWord);

	// render choosen letters
	$choosenLetters.html(choosenLetters);


	// render hangings
	$boy.attr("class", "");	
	$boy.addClass(parts[loosingCount]);


	
	if (loosingCount === 6) {
		
		$('#msg').html('HANGED!').css('display', 'block');
		$('#reset').css('display', 'block');

	} else if (winCheck) {
		
		$('#msg').html('WINNER!').css('display', 'block');
		$('#reset').css('display', 'block');

	}

}

$("#reset").click(function(){
	window.location.reload()
	
})

var start = function() {
	chooseWord();
	choosenLetters = "";
	loosingCount = 0;
	winner = false;
	$('#start').hide("slow");
	$('body').removeClass("bimage");
	$('#guessLetter').css("display","block");
	$('#boy').css("display","block");

};

$('#start').click(start); 



function letterPressed(letter){
	if (choosenLetters.indexOf(letter) === -1) {
		choosenLetters += letter;
		if (randomWord.indexOf(letter) === -1) {
			loosingCount++;
		}
	}
	render();
}


$(document).keyup(function (key){
	if (winner || loosingCount === 6) {
		key.preventDefault();
		return;
	}
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

// 1. show word when loose
// 2. style
// 3. clean up code
// 4. fix userstory/icebox
