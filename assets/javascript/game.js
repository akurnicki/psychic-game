var winsVal = document.querySelector("#wins");
var lossesVal = document.querySelector("#losses");
var guessesLeftVal = document.querySelector("#guessesLeft");
var guessesSoFarVal = document.querySelector("#guessesSoFar");
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];


function computerChoice() {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var cc = alphabet[Math.floor(Math.random() * alphabet.length)];
    return cc
}


function play() {
    if (event.key == pickedLetter) {
        wins++;
        winsVal.innerHTML = wins;
        reset();
    }

    else if (guessesSoFar.indexOf(event.key) > -1) {
        console.log("already guessed");
        return
    }

    else if (guessesSoFar.length == 0) {
        guessesSoFar = guessesSoFar + event.key;
    }

    else if (guessesLeft == 0) {
        losses++;
        lossesVal.innerHTML = losses;
        reset();
    }

    else {
        guessesSoFar = guessesSoFar + ", " + event.key;
    }

    guessesSoFarVal.innerHTML = guessesSoFar;
    guessesLeft = guessesLeft - 1;
    guessesLeftVal.innerHTML = guessesLeft;
}

function reset() {
    guessesLeft = 10;
    guessesSoFar = "";
    guessesLeftVal.innerHTML = guessesLeft;
    guessesSoFarVal.innerHTML = guessesSoFar;
    pickedLetter = computerChoice();
}


function boot() {
    winsVal.innerHTML = wins;
    lossesVal.innerHTML = losses;
    guessesLeftVal.innerHTML = guessesLeft;
    guessesSoFarVal.innerHTML = guessesSoFar;
}
boot()

var pickedLetter = computerChoice();
document.onkeyup = play;