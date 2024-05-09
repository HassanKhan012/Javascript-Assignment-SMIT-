// // ================================================================================
// // 1. Write a program that takes a positive integer from user &
// // display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var userInput = prompt("Enter a positive integer");

// if (userInput === null || userInput === "") {
//     document.write("You didn't enter anything. Please refresh the page and try again.");
// } else {

//     var num = parseInt(userInput);


//     if (isNaN(num) || num <= 0) {
//         document.write("Invalid input. Please enter a valid positive integer.");
//     } else {

//         var rndOf = Math.round(num);
//         var floorValue = Math.floor(num);
//         var ceilValue = Math.ceil(num);

//         document.write("Number: " + num + "<br>" +
//             "Round off value: " + rndOf + "<br>" +
//             "Floor Value: " + floorValue + "<br>" +
//             "Ceil Value: " + ceilValue);
//     }
// }

// // ================================================================================

// //  2. Write a program that takes a negative floating point
// //  number from user & display the following in your browser.
// //  a. number
// //  b. round off value of the number
// //  c. floor value of the number
// //  d. ceil value of the number


// var number = parseFloat(prompt("Enter a negative floating point number:"));

// if (isNaN(number) || number >= 0) {
//     document.write("Please enter a valid negative floating point number.");
// } else {
//     var roundOff = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     document.write("Number: " + number + "<br>");
//     document.write("Round off value: " + roundOff + "<br>");
//     document.write("Floor value: " + floorValue + "<br>");
//     document.write("Ceil value: " + ceilValue + "<br>");
// }

// // ================================================================================

// // 3. Write a program that displays the absolute value of a
// // number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var userInput = parseFloat(prompt("Enter the Number"));

// var absoluteValue = Math.abs(userInput)

// document.write("The absolute value of " + number + " is " + absoluteValue);

// // ================================================================================

// // 4. Write a program that simulates a dice using random()
// // method of JS Math class. Display the value of dice in your
// // browser.:

// var diceValue = Math.floor(Math.random() * 6) + 1;

// document.write("The value of the dice is: " + diceValue);

// // ================================================================================

// // 5. Write a program that simulates a coin toss using random()
// // method of JS Math class. Display the value of coin in your
// // browser

// var randomValue = Math.random();

// var result = (randomValue < 0.5) ? "Heads" : "Tails";

// document.write("The result of the coin toss is: " + result);

// // ================================================================================

// // 6. Write a program that shows a random number between 1
// // and 100 in your browser.

// let randomValue = Math.random();

// var result = (Math.floor(Math.random() * 100) + 1)

// document.write("random number between 1 and 100 :" + " " + result)

// // ================================================================================

// // 7. Write a program that asks the user about his weight. Parse
// // the user input and display his weight in your browser.
// // Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

// var userInput = prompt("Enter your weight:");
// var weight = parseFloat(userInput);
// document.write("Your weight is: " + weight + " kilograms");

// // ================================================================================

// // 8. Write a program that stores a random secret number from
// // 1 to 10 in a variable. Ask the user to input a number
// // between 1 and 10. If the user input equals the secret
// // number, congratulate the user.

// let gameNum = 5;
// let userInput = prompt("Enter the number");

// while (gameNum != userInput) {
//     userInput = prompt("you entered the wrong number please enter the right number");
//     alert("Congratulation you win")
// }