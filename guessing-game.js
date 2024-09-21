const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//rl.close();

let secretNumber;
let numAttempts;

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

function randomInRange(min, max) {
    min = Number(min);
    max = Number(max);
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function askGuess() {
    if (numAttempts === 0) {
        console.log("You lose!");
        rl.close();
        return;
    }

    console.log(`Number of attempts remaining: ${numAttempts}`);
    numAttempts--;

    rl.question("Enter a guess: ", answer => {
        checkGuess(answer);

    });
};

function askLimit() {
    rl.question("How many guesses will be allowed for this game? ", handleInput1);
    function handleInput1(response) {
        numAttempts = Number(response);
        askRange();
    }
}

function askRange() {
    let maximum = 0;
    let minimum = 0;

    console.clear();

    rl.question("Enter a max number: ", handle1);
    function handle1(answer) {
        maximum = answer;
        rl.question("Enter a min number: ", handle2);
    }

    function handle2(answer) {
        minimum = answer;
        console.clear();
        console.log(`I'm thinking of a number between ${minimum} and ${maximum}... `);
        secretNumber = randomInRange(maximum, minimum);
        askGuess();
    }
}




askLimit();
