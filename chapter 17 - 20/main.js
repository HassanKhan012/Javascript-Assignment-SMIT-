// // 1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)

//  var fruitArr  = ["banana" , "apple" , "mango"]

// =============================================================

// // 2. Declare and initialize a multidimensional array
// // representing the following matrix:


// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// // ];

// document.write("<h1>" + matrix[0].join(" ") + "</h1>")
// document.write("<h1>" + matrix[1].join(" ") + "</h1>")
// document.write("<h1>" + matrix[2].join(" ") + "</h1>")

// =============================================================

// // 3. Write a program to print numeric counting from 1 to 10.

// for (let i = 0; i < 10; i++) {
//     document.write("<h1>" , i)
// }

// =============================================================

// // 4. Write a program to print multiplication table of any
// // number using for loop. Table number & length should be
// // taken as an input from user.


// var userInp = prompt("Enter the number for which you want the table.");
// var length = prompt("Enter the length up to which you want the table to be multiplied.")

// for (let i = userInp; i <= userInp; i++) {
//     for (let j = 1; j <= length; j++) {
//         document.write(`${i} * ${j} = ${i * j} </br>`);
//     }
// }

// =============================================================

// // 5. Write a program to print items of the following array
// // using for loop:
// // fruits = [“apple”, “banana”, “mango”, “orange”,
// // “strawberry”]


// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] , "</br>");
// }

// =============================================================

// // 6. Generate the following series in your browser. See
// // example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// // Counting: 1, 2, 3, ..., 15

// document.write("<b>Counting:</b> <br>");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// // Reverse counting: 10, 9, 8, ..., 1

// document.write("<b>Reverse counting:</b> <br> ");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// // Even: 0, 2, 4, ..., 20

// document.write("<b>Even:</b> <br>");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// // Odd: 1, 3, 5, ..., 19

// document.write("<b>Odd:</b> <br>");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// // Series: 2k, 4k, 6k, ..., 20k

// document.write("<b>Series:</b> <br>");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

// =============================================================

// // 7. You have an array
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an
// // array.
// // After searching, prompt the user whether the given item is
// // found in the list or not.Example:


// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter the food name you want to search:");

// userInput = userInput.toLowerCase();

// let found = false;

// for (let i = 0; i < A.length; i++) {
//     let currentItem = A[i].toLowerCase();
//     if (currentItem === userInput) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("Yes, the item is found in the list.");
// } else {
//     alert("No, the item is not found in the list.");
// }

// =============================================================

// // 8. Write a program to identify the largest number in the
// // given array.
// // A = [24, 53, 78, 91, 12].



// let numArr = [24, 53, 78, 91, 12];
// let largest = numArr[0];

// for (let i = 1; i < numArr.length; i++) {
//     if (numArr[i] > largest) {
//         largest = numArr[i];
//     }
// }

// document.write("Array:", numArr, "<br>");

// document.write("The Largest number in the array is: " + Largest);

// =============================================================

// // 9. Write a program to identify the smallest number in the
// // given array.
// // A = [24, 53, 78, 91, 12]


// let numArr = [24, 53, 78, 91, 12];
// let smallest = numArr[0];

// for (let i = 1; i < numArr.length; i++) {
//     if (numArr[i] < smallest) {
//         smallest = numArr[i];
//     }
// }


// document.write("Array: [" + numArr.join(", ") + "]<br>");
// document.write("The smallest number in the array is: " + smallest);

// =============================================================

// // 10. Write a program to print multiples of 5 ranging 1 to
// // 100.


// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + " ");
//     }
// }