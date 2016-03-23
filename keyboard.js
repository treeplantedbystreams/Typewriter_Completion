var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
                    'Too ato too nOt enot one totA not anot tOO aNot', 
                    'oat itain oat tain nate eate tea anne inant nean', 
                    'itant eate anot eat nato inate eat anot tain eat', 
                    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var currentSentence = sentences[0]; 
$(document).ready(function(){
    $('#keyboard-upper-container').hide();
    $('#words').text(currentSentence);
});

$(document).on('keydown', function(e){
   if (e.shiftKey){
       $('#keyboard-lower-container').hide();
       $('#keyboard-upper-container').show();
   }
});

$(document).on('keyup', function(e){
   if (!e.shiftKey){
       $('#keyboard-upper-container').hide();
       $('#keyboard-lower-container').show();
   }
   $('.key').css({'background-color': '#f5f5f5', 'color': '#000'});
});

function highlightKey(e){
    var selector= ('#' + e.keyCode);
    $(selector).css({'background-color': '#38B0DE', 'color': '#fff'});
}

function checksForCorrectLetter(e){
    var currentLetter = currentSentence[0];
    var currentLetterCode = currentLetter.charCodeAt();
    var typedLetterCode = e.keyCode;
    
    // alert(currentLetter);  
    // alert(currentLetterCode);  
    // alert(typedLetterCode); 
    
    if(currentLetterCode == typedLetterCode){
        $('#words-typed').append($('<span class="glyphicon glyphicon-ok"></span>'));
    //     alert("it matches");
    } else {
        $('#words-typed').append($('<span class="glyphicon glyphicon-remove"></span>'));
    //     alert('negative!')
    }
     
};

function removeCurrentLetter()
{
    currentSentence = currentSentence.slice(1);
    // if first letter is space then print &nbsp;
     $('#words').text(currentSentence);
}

$(document).on('keypress', function(e){
    highlightKey(e);
    checksForCorrectLetter(e);
    removeCurrentLetter();
});





































// $(document).ready(function(){
//     //elements to declare upon doc loading
//     $('#keyboard-upper-container').hide();//not sure why this is located here
// 	var sentence, time, errors = [];	
// 	var monkeyText = ['ten ate neite ate nee enet ite ate inet ent eate', 
//     'Too ato too nOt enot one totA not anot tOO aNot', 
//     'oat itain oat tain nate eate tea anne inant nean', 
//     'itant eate anot eat nato inate eat anot tain eat', 
//     'nee ene ate ite tent tiet ent ine ene ete ene ate'];
// 	function setWordText(event) {
// 		if(monkeyText.length > 0){  //function of the text spanning across the top
//             sentence = monkeyText.shift();
// 			$('#words').text(sentence);
// 			errors.push($( "#words-typed" ).stop( "span.glyphicon-remove" ).length);
// 			$('#words-typed').empty();
// 			$( "#block" ).stop(true, true).animate({ "left": "15px" });
// 		} else {
// 			calculateWPM(event);
// 		}
// 	};
	
// 	setWordText();
	
	
	
// 	function playAgain() {
// 		setTimeout(function() {
// 			if(confirm('Would you like to play again?')) {
// 				location.reload(true);
// 			}
// 		}, 5000);
// 	}
	
// 	function correctLetter(event) {
// 		var typed = event.keyCode;
// 		if(typed === sentence[0].charCodeAt()) {
// 			$('#words-typed').append($('<span class="glyphicon glyphicon-ok"></span>'));	
// 		} else {
// 			$('#words-typed').append($('<span class="glyphicon glyphicon-remove"></span>'));	
// 		}
// 		sentence = sentence.slice(1); // Remove the first letter from the sentence, so that the next time around, when we check the first letter, it's different.
// 		if (sentence.length === 0) {
// 			setWordText(event); // Finishing things up for this sentence
// 		} else {
// 			highlight();
// 		} 
		
// 		nextLetterToDOM (sentence[0]);
// 	}
	
// 	function nextLetterToDOM(letter) {
// 		$('#next-letter').text(letter);	
// 	}
	
// 	function highlight() {
// 		$( "#block" ).animate({ "left": "+=17.5px" }, 'fast');
//     }
	
// 	function showShiftKeys(event) {
// 		if(event.shiftKey) {
// 			$('#keyboard-upper-container').show();
// 			$('#keyboard-lower-container').hide();
// 		}
// 	};
	
// 	function hideShiftKeys(event) {
// 		if(!event.shiftKey) {
// 			$('#keyboard-upper-container').hide();
// 			$('#keyboard-lower-container').show();
// 		}
// 	};
	
// 	$(document).on('keydown', function(e) {
// 		showShiftKeys(e);
// 	});
	
	
// 	$(document).on('keypress', function(e) {
// 		if(!time) {
// 			time = e.timeStamp;
// 			console.log(time);
// 		}
		
// 		correctLetter(e);
		
// 		var selector = '#' + e.keyCode;
		
// 		$(selector).css({'background-color': '#38B0DE', 'color': '#fff'});
// 	});
	
// 	$(document).on('keyup', function(e) {
// 		hideShiftKeys(e);
// 		$('.key').css({'background-color': '#f5f5f5', 'color': '#000'});
// 	});
	
// });