// pick a random word from list
var list = ["afford", "auction", "bailout", "balance","bankrupt","bargain","borrowed","business","capital", "collateral", "commodity", "compound", "credit", "currency", "deficit", "deposit", "depression", "diversify", "dividend", "payment", "economist", "financial", "mortgage", "monopoly", "nickel", "payment", "receipt", "rebate", "risky", "security", "swap", "treasury", "withdraw", "yield"];

var word = list[Math.floor(Math.random()*list.length)];

// use underscores to show how many letters there are in the word.
var answer = $("#underscore");

$(document).ready(function(){
    
    // Get underscore value for answer
    var answerUnderscore = [];

    for (var i = 0; i < word.length; i++){
        answerUnderscore.push("_");
    }

    answer.html(answerUnderscore.join(" "));

    //Core gameplay loop

    var remainingLetters = word.length;

    $("#recentGuess").on("keydown", function(event){
        var guess = event.which;
        console.log(guess);
        // if (guess == null){
        //     break;
        // }
        // else if (guess.length !== 1){
        //     alert("Enter a single letter.")
        // }
        // else{
        //     for (var j = 0; j < word.length; j++){
        //         if (word[j] === guess){
        //             answerArray[j] = guess;
        //             remainingLetters--;
        //         }
        //     }
        // }
    });

});

// initial value
// var remainingLetters = word.length;


// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);
