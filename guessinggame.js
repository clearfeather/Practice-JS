//Guessing Game **********************

//Prompt User to enter a number, which is the maximum set. Is parsed from letters/numbers to just numbers
let maximum = parseInt(prompt("Enter the maximum number!"));
//While the Maximum number is not yet set (user didn't enter a (valid) number)
while (!maximum) {
    //Ask the user again
    maximum = parseInt(prompt("Enter a valid number!"));
 }

//Set a new variable to a random number, based on the maximum the user input
 const targetNum = Math.floor(Math.random() * maximum) +1;
 //Display the maximum number in the console
 console.log(`The maximum number is ${maximum}.`)

 //Set guess variable to user's first guess input
 let guess = parseInt(prompt("Enter your first guess (type q to quit):"));
 //New attempts variable to keep track
 let attempts = 1;
 //While the user is guessing and it's NOT the correct number..
 while (parseInt(guess) !== targetNum) {
     //Allow q to be used to quit the game
     if(guess === 'q') break;
     //Add an attempt to attempt variable for tracking
     attempts++;
     //If the guess is greater than the correct number..
    if(guess > targetNum) {
        //Console log the user's guess
        console.log(`Your last guess was ${guess} (too high).`)
        //And say it was too high in a prompt
        guess = prompt("Too high! Enter a new guess (type q to quit):");
        //Otheriwise (assume less than)
    } else {
        //Console log user's guess
        console.log(`Your last guess was ${guess} (too low).`)
        //And say it was too low in a prompt
        guess = prompt("Too low! Enter a new guess (type q to quit):");
    }
 }

 //End game and display message if user enters q
 if(guess === 'q') {
     console.log('You gave up.')
 } else {
 //Display the winning message and number in the console, as well as the number of attempts tried
 console.log(`Winner! Correct number was ${targetNum}. You guessed ${attempts} times.`);
}