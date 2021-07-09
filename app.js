// let random = Math.random();
// if (random > 0.5) {
//     console.log("WINNER!!!!");
// }
// else {
//     console.log("SORRY TRY AGAIN");
// }
// console.log(`Your number was ${random}`);

// let age = prompt('Please enter your age');

// if (age >= 0 && age < 5) { //0-4
//     console.log("You are a baby, free entry");
// } else if (age >= 5 && age < 10) { //5-9
//     console.log("You are a child, $10");
// } else if (age >= 10 && age < 65) { //10-64
//     console.log("You are an adult, $20");
// } else if (age > 65) { //65+
//     console.log("You are a senior, $10");
// } else {
//     console.log("Invalid Entry, please check age entry");
// }
// console.log(`You are ${age} years old`);

// const password = prompt('Please enter a new password');

// if (password.length >= 6 && password.indexOf(' ') === -1) { //Checking password length & spacing
//         console.log('All good, nice password!'); //Password good
// } else {
//     console.log('check the requirements');
// }

// const firstName = prompt("enter yo first name");

// if (!firstName) {
//     console.log("no name entered")
// }

// let day = 5;
// switch (day) {
//     case 1: console.log("Day is one"); break;
//     case 2: console.log("Day is two"); break;
//     case 3: console.log("Day is three"); break;
//     case 4: console.log("Day is four"); break;
//     default: console.log("Not sure what's going on");
// }

// for (let i=25; i>=0; i-=5) {
//     console.log(i);
// }

// const animals = [
//     "Lion", "Tiger", "Bear"
// ]


// for (let i = animals.length -1; i >= 0; i--) {
//     console.log(animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 0; i <= people.length -1; i ++) {
//     console.log(people[i].toUpperCase());
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is ${i}`)
//     for (let j = 1; j <= 3; j++) {
//         console.log(`     j is ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     document.write(`ROW #${i + 1}<br>`)
//     for (let j = 0; j < seatingChart[i].length; j++) {
//         document.write(row[j] + '<br>')
//     }
//     document.write('<br>')
// }

// let count = 0;
// while(count < 10){
//     count++;
//     document.write(`WHILE: ${count}<br>`);
    
// }

// const SECRET = "PASSWORD";

// let guess = prompt("Enter PASSWORD");
// while(guess !== SECRET) {
//     guess = prompt("Enter PASSWORD");
// }
// document.write('Your in 007');

// //Guessing Game **********************

// //Prompt User to enter a number, which is the maximum set. Is parsed from letters/numbers to just numbers
// let maximum = parseInt(prompt("Enter the maximum number!"));
// //While the Maximum number is not yet set (user didn't enter a (valid) number)
// while (!maximum) {
//     //Ask the user again
//     maximum = parseInt(prompt("Enter a valid number!"));
//  }

// //Set a new variable to a random number, based on the maximum the user input
//  const targetNum = Math.floor(Math.random() * maximum) +1;
//  //Display the maximum number in the console
//  console.log(`The maximum number is ${maximum}.`)

//  //Set guess variable to user's first guess input
//  let guess = parseInt(prompt("Enter your first guess (type q to quit):"));
//  //New attempts variable to keep track
//  let attempts = 1;
//  //While the user is guessing and it's NOT the correct number..
//  while (parseInt(guess) !== targetNum) {
//      //Allow q to be used to quit the game
//      if(guess === 'q') break;
//      //Add an attempt to attempt variable for tracking
//      attempts++;
//      //If the guess is greater than the correct number..
//     if(guess > targetNum) {
//         //Console log the user's guess
//         console.log(`Your last guess was ${guess} (too high).`)
//         //And say it was too high in a prompt
//         guess = prompt("Too high! Enter a new guess (type q to quit):");
//         //Otheriwise (assume less than)
//     } else {
//         //Console log user's guess
//         console.log(`Your last guess was ${guess} (too low).`)
//         //And say it was too low in a prompt
//         guess = prompt("Too low! Enter a new guess (type q to quit):");
//     }
//  }

//  //End game and display message if user enters q
//  if(guess === 'q') {
//      console.log('You gave up.')
//  } else {
//  //Display the winning message and number in the console, as well as the number of attempts tried
//  console.log(`Winner! Correct number was ${targetNum}. You guessed ${attempts} times.`);
// }

// const subreddits = [
//     'cringe', 'books', 'funny', 'ps5'
// ]

// for (let i = 0; i < subreddits.length; i++ ) {
//     console.log(subreddits[i])
// }

// for (let i of subreddits) {
//     console.log(i)
// }

// const testScores = {
//     blaise: 5,
//     robin: 99,
//     raelyn: 80,
//     roscore: 23
// }

// let total = 0;
// let scores = Object.values(testScores);

// for (let score of scores) {
//     total += score;
// }

// console.log(`Average score was ${Math.round(total / scores.length)}`);

// const students = {
//     john: 90,
//     billy: 57,
//     jaon: 49,
//     mike: 99
// }

// scores = Object.values(students);

// for (let i of scores) {
//     console.log();
// }

//FUNCTIONS

// function greet(firstName, lastName) {
//     console.log(`Hi ${firstName} ${lastName[0]}., how are you?`)
// };

// greet('Tim', 'Jones');

// function rant(message) {
//     for (i = 0; i < 3; i++) {
//     console.log(message.toUpperCase());
//     }
// }

// rant('I hate beets');

//Repeat function

// function repeat(str, numTimes) {
//     let result = '';
//     for (i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// repeat('I am cool', 10);

//RETURN = Export value out of the function (output), can save to a variable and used for further tasks

// function add(x,y) {
//     let sum = x + y;
//     return sum;
// }

// console.log(add(7,9));

// function lastElement (array) {
//     if (array.length === 0) {
//         return null;
//     } return array[array.length -1];
// } 

// function capitalize (string) {
//     return string[0].toUpperCase() + string.slice(1);
// }

// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Spiderman'];
//     function cryForHelp() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`Please help us ${hero}!`)
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }

// console.log(bankRobbery());

// function logit(i) {
//     for (let i = 0; i < 10; i++) {
//         i();
//     }
    
// }

// function ten() {
//     console.log('something here');
// }

// ten(logit);

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num ** 2;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// for (i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) console.log('Odd Number', i);
// };

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// let i = 9;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);


//For in loop
// const person = {
//     name: 'John',
//     age: 25,
//     interests: 'hiking',
//     height: "5'10"
// };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// const animal = {
//     type: 'Jaguar',
//     color: 'brown',
//     level: 'aggressive'
// };

// for (let key in animal) {
//     console.log(key, animal[key]);
// }

// for (let key in person) {
//     document.write(key)
// }

// const colors = ['red', 'green', 'blue'];

// for (let index in colors) {
//     console.log(index, colors[index]);
// }

// for (let color of colors) {
//     console.log(color);
// }

// let i = 1;
// while (i <= 1000) {
//     // if (i === 6) break;
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }

// function maxOf (num1, num2) {
//     if (num1 > num2) return num1;
//     return num2;

// function maxOf (num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }

// function isLandscape(width,height) {
//     return (width > height);
// }

