// // 1. Write a program that takes two user inputs for first and
// // last name using prompt and merge them in a new variable
// // titled fullName. Greet the user using his full name.


// let firstName = prompt("Enter your first name:");

// let lastName = prompt("Enter your last name:");

// let fullName = firstName + " " + lastName;

// alert("Hello your fullName is" + fullName);

// =============================================================

// // 2. Write a program to take a user input about his favorite
// // mobile phone model. Find and display the length of user
// // input in your browser

// let phoneModel = prompt("Enter your favorite mobile phone model:");

// let inputLength = phoneModel.length;

// document.write("The length of your favorite mobile phone model is: " + inputLength);


// =============================================================

// // 3. Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser .

// let word = "Pakistani";

// let index = word.indexOf("n");

// document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);

// =============================================================

// // 4. Write a program to find the last index of letter “l” in the
// // word “Hello World” and display the result in your browser.


// let word = "Hello World:";

// let lastIndex = word.lastIndexOf("l");

// document.write( word  + " <br>" + "last index of 'l':" + lastIndex);

// =============================================================

// // 5. Write a program to find the character at 3rd index in the
// // word “Pakistani” and display the result in your browser.


// let word = "Pakistani";

// let character = word.charAt(3);

// document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

// =============================================================

// // 6. Repeat Q1 using string concat() method.


// let user1 = prompt("Enter Your First Name");
// let user2 = prompt("Enter Your Last Name");
// let fullName = user1 + " " + user2;
// document.write("Your Full Name is: " + fullName)

// =============================================================

// // 7. Write a program to replace the “Hyder” to “Islam” in the
// // word “Hyderabad” and display the result in your browser.

// let word = "Hyderabad";

// let replacedWord = word.replace("Hyder", "Islam");

// document.write("Original word: " + word + "<br>");
// document.write("After replacement: " + replacedWord);

// =============================================================

// // 8. Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.
// // var message = “Ali and Sami are best friends. They play cricket and
// // football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replacedMessage = message.replace(/and/g, "&");

// document.write("Original message: " + message + "<br>");
// document.write("After replacement: " + replacedMessage);

// =============================================================

// // 9. Write a program that converts a string “472” to a number
// // 472. Display the values & types in your browser.


// let str = "472";

// let num = Number(str);

// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);

// =============================================================

// // 10. Write a program that takes user input. Convert and
// // show the input in capital letters.

// let userInput = prompt("Enter your input:");

// let capitalizedInput = userInput.toUpperCase();

// document.write("Original input: " + userInput + "<br>");
// document.write("Capitalized input: " + capitalizedInput);

// =============================================================

// // 11. Write a program that takes user input. Convert and
// // show the input in title case.

// let userInput = prompt("Enter your input:");
// let titleCaseInp = userInput.charAt(0).toUpperCase() + userInput.slice(1);
// document.write("User input: " + userInput + "<br>");
// document.write("Title Case: " + titleCaseInp);

// =============================================================

// // 12. Write a program that converts the variable num to
// // string.
// // var num = 35.36 ;
// // Remove the dot to display “3536” display in your browser.

// var num = 35.36;

// var strNum = num.toString().replace(".", "");

// document.write("Original number: " + num + "<br>");
// document.write("Type: " + typeof num + "<br>")
// document.write("Number as string without dot: " + strNum + "<br>");
// document.write("Type: " + typeof strNum)

// =============================================================

// // 13. Write a program to take user input and store username
// // in a variable. If the username contains any special symbol
// // among [@ . , !], prompt the user to enter a valid username.
// // For character codes of [@ .

// // Note:
// // ASCII code of ! is 33
// // ASCII code of , is 44
// // ASCII code of . is 46
// // ASCII code of @ is 64


// let username = prompt("Enter your username:");
// if (username.includes(64) || username.includes(46) || username.includes(44) || username.includes(33)) {
//     alert("Invalid username. Please enter a valid username.");
// } else {
//     alert("Username is valid. Welcome, " + username + "!");
// }

// =============================================================

// // 14. You have an array
// // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an
// // array. After searching, prompt the user whether the given
// // item is found in the list or not.
// // Note: Perform case insensitive search. Whether the user
// // enters cookie, Cookie, COOKIE or coOkIE, program
// // should inform about its availability. Example:


// let foodArr = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userSearch = prompt("Enter item to search:");

// userSearch = userSearch.toLowerCase();

// let found = false;
// for (let i = 0; i <foodArr.length; i++) {
//     if (foodArr[i].toLowerCase() === userSearch) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("Yes, '" + userSearch + "' is found in the list.");
// } else {
//     alert("No, '" + userSearch + "' is not found in the list.");
// }

// =============================================================

// // 16. Write a program to convert the following string to an
// // array using string split method.
// // var university = “University of Karachi”;
// // Display the elements of array in your browser.

// var university = "University of Karachi";
// var universityArray = university.split(' ');

// for (let i = 0; i < universityArray.length; i++) {
//     var word = universityArray[i]
//     for (let j = 0; j < word.length; j++) {
//         document.write(word[j] + "<br>");
//     }
// }

// =============================================================

// // 17. Write a program to display the last character of a user
// // input.

// var userInput = prompt("Enter a string:");

// if (userInput !== null && userInput !== "") {
//     var inputLength = userInput.length;
//     var lastCharacter = userInput.charAt(inputLength - 1);

//     alert("The last character of the input is: " + lastCharacter);
// } else {
//     alert("You did not enter any input.");
// }

// =============================================================

// // 18. You have a string “The quick brown fox jumps over the
// // lazy dog”. Write a program to count number of
// // occurrences of word “the” in given string.


// var str = "The quick brown fox jumps over the lazy dog";
// var wordToFind = "the";

// str = str.toLowerCase();
// var wordsArray = str.split(' ');

// var count = 0;

// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === wordToFind) {
//         count++;
//     }
// }

// console.log("Number of occurrences of '" + wordToFind + "': " + count);