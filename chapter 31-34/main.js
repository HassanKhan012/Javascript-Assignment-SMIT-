// // ================================================================================
// // 1. Write a program that displays current date and time in
// // your browser.

// var currentTimeAndDate = new Date();

// document.write(currentTimeAndDate)

// // ================================================================================

// // // 2. Write a program that alerts the current month in words.
// // // For example December.

// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// document.write(currentMonth)


// var currentDate = new Date();

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var currentMonthIndex = currentDate.getMonth();

// var currentMonth = months[currentMonthIndex];

// document.write("Current month: " + currentMonth);

// // ================================================================================

// // 3. Write a program that alerts the first 3 letters of the current
// // day, for example if today is Sunday then alert will show
// // Sun.

// var currentDate = new Date();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayIndex = currentDate.getDay();
// var currentDay = days[currentDayIndex];
// document.write("Today is ", currentDay)

// // ================================================================================

// // 4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.

// var currentDate = new Date();

// var currentDayIndex = currentDate.getDay();

// if (currentDayIndex === 0 || currentDayIndex === 6) {
//     alert("It’s Fun day");
// } else {
//     alert("If it's not Saturday or Sunday, do nothing")
// }

// // ================================================================================

// // 5. Write a program that shows the message “First fifteen
// // days of the month” if the date is less than 16th of the month
// // else shows “Last days of the month”.

// var currentDate = new Date();

// var currentDayOfMonth = currentDate.getDate();

// if (currentDayOfMonth < 16) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }

// // ================================================================================

// // 6. Write a program that determines the minutes since
// // midnight, Jan. 1, 1970 and assigns it to a variable that
// // hasn't been declared beforehand. Use any variable you like
// // to represent the Date object.

// var currentDate = new Date();

// var millisecondsSince1970 = currentDate.getTime();

// var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

// var elapsedTimeMilliseconds = millisecondsSince1970 - (new Date("1970-01-01")).getTime();

// var elapsedTimeMinutes = elapsedTimeMilliseconds / (1000 * 60);

// document.write("Current Date:", currentDate, "<br>")
// document.write("Elapsed time in milliseconds since Jan. 1, 1970:", elapsedTimeMilliseconds, "<br>");
// document.write("Elapsed time in minutes since Jan. 1, 1970:", elapsedTimeMinutes);

// // ================================================================================

// // 7. Write a program that tests whether it's before noon and
// // alert “Its AM” else “its PM”.

// var currentDate = new Date();

// var currentHour = currentDate.getHours();

// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// // ================================================================================

// // 8. Write a program that creates a Date object for the last day
// // of the last month of 2020 and assigns it to variable named
// // laterDate.


// var laterDate = new Date(2020, 11, 31);

// document.write("Later Date:", laterDate);

// // ================================================================================

// // 9. Create a date object of the starting date of this Ramadan
// // and alert the number of days past since 1st Ramadan?
// // Note: 1st Ramadan was on June 18, 2015

// var ramadanStartDate = new Date(2015, 5, 18)

// var currentDate = new Date();

// var timeDiff = currentDate.getTime() - ramadanStartDate.getTime();

// var daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

// alert("Number of days passed since 1st Ramadan:" + daysPassed);

// // ================================================================================

// // 10. Write a program that displays in your browser the
// // seconds that elapsed between the reference date and the
// // beginning of 2015.

// // ================================================================================

// // 11. Create a Date object for the current date and time.
// // Extract the hours, reset the date object an hour ahead and
// // finally display the date object in your browser.

// // ================================================================================

// // 12. Write a program that creates a date object and show the
// // date in an alert box that is reset to 100 years back


// let currentDate = new Date();

// document.write("<p>Current date and time: " + currentDate + "</p>");

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// document.write("<p>Date 100 years back: " + currentDate + "</p>");

// // ================================================================================

// // 13. Write a program to ask the user about his age. Calculate
// // and show his birth year in your browser.

// let age = prompt("Please enter your age:");

// let currentYear = new Date().getFullYear();

// let birthYear = currentYear - parseInt(age);

// alert("Your birth year is: " + birthYear);

// // ================================================================================

// // 14. Write a program to generate your K-Electric bill in your
// // browser. All the amounts should be rounded off to 2
// // decimal places. Display the following fields:
// // a. Customer Name
// // b. Current Month
// // c. Number of units
// // d. Charges per unit
// // e. Net Amount Payable (within Due Date)
// // f. Late Payment Surcharge
// // g. Gross Amount Payable (after Due Date)
// // Where, 

// function generateBill() {
//     var customerName = prompt("Enter Customer Name:");
//     var currentMonth = prompt("Enter Current Month:");
//     var numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
//     var chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));

//     var netAmountPayable = numberOfUnits * chargesPerUnit;
//     var latePaymentSurcharge = netAmountPayable * 0.05; // 5% late payment surcharge
//     var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

//     alert("Electric Bill\n\n" +
//         "Customer Name: " + customerName + "\n" +
//         "Current Month: " + currentMonth + "\n" +
//         "Number of Units: " + numberOfUnits + "\n" +
//         "Charges per Unit: $" + chargesPerUnit.toFixed(2) + "\n" +
//         "Net Amount Payable (within Due Date): $" + netAmountPayable.toFixed(2) + "\n" +
//         "Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + "\n" +
//         "Gross Amount Payable (after Due Date): $" + grossAmountPayable.toFixed(2));
// }

// generateBill();