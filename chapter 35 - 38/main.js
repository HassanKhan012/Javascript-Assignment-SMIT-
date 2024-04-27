// // 1. Write a function that displays current date & time in your
// // browser.

// function displayDateTime() {
//     var currentDate = new Date();
//     var date = currentDate.toDateString();
//     var time = currentDate.toLocaleTimeString();
//     console.log("Current Date: " + date);
//     console.log("Current Time: " + time);
// }

// displayDateTime();


// // 2. Write a function that takes first & last name and then it
// // greets the user using his full name.


// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     console.log("Hello, " + fullName );
// }

// greetUser("Hassan", "Khan");


// // 3. Write a function that adds two numbers (input by user)
// // and returns the sum of two numbers.


// let a = +prompt("Enter the first number")
// let b = +prompt("Enter the second number");
// function sumFunc(a,b) {
//     return a+b
// }

// let result = sumFunc(a,b)
// console.log(result);

// // 4. Calculator:
// // Write a function that takes three arguments num1, num2
// // & operator & compute the desired operation. Return and
// // show the desired result in your browser.

// let num1 = +prompt("Enter the first number");
// let num2 = +prompt("Enter the second number");
// let operation = prompt("Enter the operation", "+", "-", "*", "/");

// function calculator(num1, num2, operation) {
//     if (operation === "+") {
//         return num1 + num2;
//     } else if (operation === "-") {
//         return num1 - num2;
//     } else if (operation === "*") {
//         return num1 * num2;
//     } else if (operation === "/") {
//         return num1 / num2;
//     } else {
//         return "Please select the correct operator.";
//     }
// }

// var result = calculator(num1, num2, operation);
// alert("Result: " + result);


// // 5. Write a function that squares its argument.


// function square(number) {
//     return number * number;
// }

// var num = 8;
// var result = square(num);
// console.log("Square of " + num + " is: " + result);


// // 6. Write a function that computes factorial of a number.


// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// }

// let num = 5;
// let result = factorial(num);
// console.log("Factorial of " + num + " is: " + result);




// // 7. Write a function that take start and end number as inputs
// // & display counting in your browser.


// function counting(s,e) {
// for (let i = s; i <= e; i++) {
//     console.log(i);
// }    
// }

// counting(1,10)

// // 8. Write a nested function that computes hypotenuse of a
// // right angle triangle.
// // Hypotenuse2 = Base2 + Perpendicular2
// // function | JAVASCRIPT
// // Take base and perpendicular as inputs.
// // Outer function : calculateHypotenuse()



// // Chat Gpt code 
// function calculateHypotenuse(base, perpendicular) {
//     // Inner function to calculate square of a number
//     function square(number) {
//         return number * number;
//     }

//     // Calculate hypotenuse using the Pythagorean theorem
//     var hypotenuseSquared = square(base) + square(perpendicular);
//     var hypotenuse = Math.sqrt(hypotenuseSquared);

//     return hypotenuse;
// }

// // Example usage:
// var base = 3;
// var perpendicular = 4;
// var result = calculateHypotenuse(base, perpendicular);
// console.log("Hypotenuse of the right angle triangle is: " + result);



// // 9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables

// function calculateRectangleArea(width, height) {
//     return width * height;
// }

// var area1 = calculateRectangleArea(5, 10);
// console.log("Area of rectangle with width 5 and height 10 is: " + area1);

// // =============================================

// function calculateRectangleArea(width, height) {
//     return width * height;
// }


// var width = 5;
// var height = 10;
// var area2 = calculateRectangleArea(width, height);
// console.log("Area of rectangle with width " + width + " and height " + height + " is: " + area2);


// // 10. Write a JavaScript function that checks whether a passed
// // string is palindrome or not?
// // A palindrome is word, phrase, or sequence that reads the same backward as
// // forward, e.g., madam.


// var p = prompt("enter the word you want to check this is that a palindrome or not.")

// function isPalindrome(str) {
//     var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     var reversedStr = cleanStr.split('').reverse().join('');
    
//     return cleanStr === reversedStr;
// }

// var inputString = p;
// if (isPalindrome(inputString)) {
//     console.log(inputString + " is a palindrome.");
// } else {
//     console.log(inputString + " is not a palindrome.");
// }



// // 11. Write a JavaScript function that accepts a string as a
// // parameter and converts the first letter of each word of the
// // string in upper case.
// // EXAMPLE STRING : 'the quick brown fox'
// // EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalizeFirstLetter(str) {
//     var wordsArray = str.split(' ');

//     for (var i = 0; i < wordsArray.length; i++) {
//         wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
//     }

//     var capitalizedString = wordsArray.join(' ');

//     return capitalizedString;
// }

// var inputString = 'the quick brown fox';
// var result = capitalizeFirstLetter(inputString);
// console.log("Original String: " + inputString);
// console.log("Capitalized String: " + result);


// // 12. Write a JavaScript function that accepts a string as a
// // parameter and find the longest word within the string.
// // EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development'


// let inputString = "Web Development Course"

// function findLongestWord(inputString) {
//     let wordsArray = inputString.split(' ')

//     let longestWord = '';

//     for (let i = 0; i < wordsArray.length; i++) {
//         if (wordsArray[i].length > longestWord.length) {
//             longestWord = wordsArray [i];
//         }
        
//     }

//     return longestWord
// }

// let result = findLongestWord(inputString);
// console.log("Longest word in the string: " + result);


// // 13. Write a JavaScript function that accepts two arguments, a
// // string and a letter and the function will count the number of
// // occurrences of the specified letter within the string.
// // Sample arguments : 'JSResourceS.com', 'o'

// function countOccurrences(str, letter) {
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// var inputString = 'JSResourceS.com';
// var targetLetter = 'm';
// var result = countOccurrences(inputString, targetLetter);
// console.log("Number of occurrences of '" + targetLetter + "' in the string: " + result);
