const { stdin } = require("process");
const readline = require("readline");
const { gunzipSync } = require("zlib");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNumber = 5;

function checkGuess(guess) {
    guess = Number(guess);
    switch (true) {
        case (guess > secretNumber) :
            console.clear();
            console.log(guess);
            console.log("Too high");
            askGuess();
            return false;

        case (guess < secretNumber) :
            console.clear();
            console.log(guess);
            console.log("Too low");
            askGuess();
            return false;

        default:
            console.clear();
            console.log(guess);
            console.log("You win!");
            rl.close();
            return true;
    }
}

function askGuess() {
    rl.question("Enter a guess: ", answer => {
        checkGuess(answer);

    });
};



askGuess();

//code review, por favor
