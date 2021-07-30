// // Random Number ***************************************

// let random = Math.random();
// if (random > 0.5) {
//     console.log("WINNER!!!!");
// }
// else {
//     console.log("SORRY TRY AGAIN");
// }
// console.log(`Your number was ${random}`);

// // Age ***************************************

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

// // Password Length ***************************************

// const password = prompt('Please enter a new password');

// if (password.length >= 6 && password.indexOf(' ') === -1) { //Checking password length & spacing
//         console.log('All good, nice password!'); //Password good
// } else {
//     console.log('check the requirements');
// }

// // Name Prompt ***************************************

// const firstName = prompt("enter yo first name");

// if (!firstName) {
//     console.log("no name entered")
// }

// // Switch ***************************************

// let day = 5;
// switch (day) {
//     case 1: console.log("Day is one"); break;
//     case 2: console.log("Day is two"); break;
//     case 3: console.log("Day is three"); break;
//     case 4: console.log("Day is four"); break;
//     default: console.log("Not sure what's going on");
// }

// // For loops ***************************************

// for (let i=25; i>=0; i-=5) {
//     console.log(i);
// }

// const animals = [
//     "Lion", "Tiger", "Bear"
// ]

// for (let i = animals.length -1; i >= 0; i--) {
//     console.log(animals[i]);
// }

// // For loop excercise***************************************

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

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

// showNumbers(10);

// function showNumbers(limit) {
//     for (i = 0; i <= limit; i++) {
//         // if (i % 2 === 0) console.log(i, 'Even Number');
//         // else console.log(i, 'Odd Number');
//         const message = (i % 2 === 0) ? 'Even Number' : 'Odd Number';
//         console.log(i, message);
//     } 
// }

// const array = ['hello', null, undefined, 0, 1, 2, 3, 'string'];

// function countTruthy(array) {
//     let count = 0;
//     for (let item of array) 
//         if (item)
//         count++;
//     return count;
// }

// console.log(countTruthy(array));

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// //Show string only typeof properties
// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string') {
//             console.log(key, obj[key]);
//         }
//     }
// }

// console.log(sum(10));

// //sum of all multiples of 3 and 5 up to the limit
// function sum(limit) {
//     let total = 0;
//     for (i = 0; i <= limit; i++) 
//         if (limit % 3 === 0 || limit % 5 === 0) 
//             total += i;
//     return total;
// }

// showStars(10);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//             pattern += '*';
//         console.log(pattern);
//     }
// }

// emojis(10);

// function emojis(qty) {
//     for (let i = 1; i <= qty; i++) {
//         let pattern = '';
//         for (let j = 0; j < i; j++) {
//             pattern += '👍';
//         }
//         console.log(pattern);
//     }
// }

// const cat = {
//     name: 'Grover',
//     color: 'grey',
//     breed: 'long hair',
//     meow(){
//         console.log(`meow function is ${this.breed}`)
//     }
// }

// console.log(cat.meow());

// TRY / CATCH

// try {
//     hello.toUpperCase(); //this is incorrect code
// } catch {
//     console.log("Error");
// }

// // For Each (old version of For Of)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // function print(element) {
// //     console.log(element);
// // }

// numbers.forEach(function(el){
//     if (el % 2 === 0) {
//     console.log('for each', el)
//     }
// });

// for (let el of numbers) {
//     if (el % 2 === 0) {
//     console.log('for of', el)
//     }
// }

// // map - constructs new array from existing array

// const doubles = numbers.map(function(num) {
//     return num * 2;
// })
// console.log(doubles);

// my map practice / arrow function

// const movies = [
//     {
//         title: 'The last of us',
//         score: 100
//     },
//     {
//         title: 'The road',
//         score: 90
//     }
// ]

// const titles = movies.map(function(movie) {
//     return movie.title;
// })

// const titles = movies.map(movie => movie.title);

// for (title of titles) {
//     console.log(title);
// }

// Arrow Functions

// const add = function (x,y) {
//     return x + y;
// }

// const add = (x,y) => {
//     return x + y;
// }

// function add (x,y) {
//     return x + y;
// }

// let add = (x, y) => x + y;

// // rollDie = () => {
// //     return Math.floor(Math.random() * 6) + 1
// // }

// rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const rollDie1 = function() {
//     return Math.floor(Math.random() * 6) + 1
// }

// //Shrinking from normal function to arrow function

// const isEven = function (num) {
//     return num %2 === 0;
// }

// const isEven = (num) => {
//     return num %2 === 0;
// }

// const isEven = num => {
//     return num %2 === 0;
// }

// const isEven = num => (
//     num % 2 === 0
// );

// const isEven = num => num % 2 === 0;

// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// // More Arrow Function practice

// function sum(a,b) {
//     return a + b;
// }

// let sum2 = (a,b) => a + b;

// function isPositive(number) {
//     return number >= 0;
// }

// let isPositive2 = number => number >= 0;

// function randomNumber() {
//     return Math.random;
// }

// let randomNumber2 = () => Math.random;

// document.addEventListener('click', function() {
//     console.log('click');
// })

// document.addEventListener('click', () => console.log('click');)

// Map & Filter ***************************************

let movies = [
    {
        title: 'The Last of Us',
        score: 99,
        release: 2015
    }, 
    {
        title: 'Waterworld',
        score: 60,
        release: 1999
    }
]

// console.log(movies[0].title);

// console.log(movies[0].title);

// for (let key in movies) {
//     console.log(key);
// }

// const topMovies = movies.filter(movie => {
//     return movie.score > 80;
// })

// const topMovies = movies.filter(movie => movie.score > 80);

// console.log(topMovies);

// // Filter Excercise

// function validUserNames(usernames){
//     return usernames.filter(function(username){
//          return username.length < 10;
//      });
//  }

//  // converted to shortened arrow functions

//  let validUserNames = (usernames) => usernames.filter((username) => username.length < 10);

// // Some & Every

// function newMovies(movies) {
//     return movies.some(function(movie){
//         return movie.release > 2000;
//     });
// };
// console.log(newMovies(movies));

// // converted to arrow function

// console.log(
//     movies.some(movie => movie.release > 2000)
//     );

// Reduce Method

// const prices = [4.49, 9.99, 21.99, 5.50, 17.99];

// //Standard (total)
// let total = 0;
// for (let price of prices) {
//     total += price;
// }

// //Reduce (total)
// const total2 = prices.reduce((total, price) => {
//     return total + price;
// });

// const lowCost = prices.reduce((min, price) => {
//     if(price < min) {
//         return price;
//     }
//     return min;
// })

// const topMovie = movies.reduce((top,currMovie) => {
//     if(currMovie.score > top.score) {
//         return currMovie;
//     }
//     return top;
// })

// // This & Arrow Function Scope

// const person = {
//     firstName: 'Blake',
//     lastName: 'Johnson',
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// // Spread

// console.log(...'splitting letters apart');

// //Add properties onto new copied array
// const newUser = {...person, id: 12345, isAdmin: false};

// const {firstName: fName, lastName:lName} = person;

// convert F to C
let toC = (f) => (5/9) * (f-32);