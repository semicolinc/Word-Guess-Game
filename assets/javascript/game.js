// pick a random word from list
var list = ["afford", "auction", "bailout", "balance","bankrupt","bargain","borrowed","business","capital", "collateral", "commodity", "compound", "credit", "currency", "deficit", "deposit", "depression", "diversify", "dividend", "payment", "economist", "financial", "mortgage", "monopoly", "nickel", "payment", "receipt", "rebate", "risky", "security", "swap", "treasury", "withdraw", "yield"];

var word = list[Math.floor(Math.random()*list.length)];

// use underscores to show how many letters there are in the word.
var answer = $("#underscore");
var wrong = $("#wrongGuess");

$(document).ready(function(){
    
    // Get underscore value for answer
    var answerUnderscore = [];

    for (var i = 0; i < word.length; i++){
        answerUnderscore.push("_");
    }

    answer.html(answerUnderscore.join(" "));

    //Core gameplay loop

    var wrongAnswers = [];

    //On keypress on input box and pressing enter

    $("#recentGuess").on("keypress", function(event){

        if(event.which === 13){

            var guess = $("#recentGuess").val();

            // Checking for incorrect values
            if (guess == null){
                alert("Enter a letter.")
            }
            else if (guess.length !== 1){
                alert("Enter a single letter.")
            }
            // Checking if the letter fit in the word
            else{
                for (var j = 0; j < word.length; j++){
                    var rightBool = 0;
                    if (word[j] === guess){
                        
                        answerUnderscore[j] = guess;
                        answer.html(answerUnderscore.join(" "));
                        var remainingLetters = word.length;

                        for(var k = 0; k < answerUnderscore.length; k++){
                            if(answerUnderscore[k] !== "_")
                                remainingLetters--;
                        }
                        rightBool = 1
                    }
                }
                // Appending wrong letters onto list
                if (rightBool === 0){
                    wrongAnswers.push(guess);
                    wrong.html(wrongAnswers.join(", "))
                }
                // Checking if the game is over
                if (remainingLetters === 0){
                    alert("Congratulations, for you have won! Refresh to play again.");
                    
                }
            }
        }
    });

});
