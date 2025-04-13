"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Levi Boardman
      Date:   4/12/2025

      Filename: project06-01.js
*/

// get reference to the "Save" button
let submitButton = document.getElementById("submitButton");  // stores reference to the submit button

// get reference to the first password input
let pwd = document.getElementById("pwd");                     // stores reference to password field

// get reference to the second password input
let pwd2 = document.getElementById("pwd2");                   // stores reference to confirm password field

// add event listener to validate form when button is clicked
submitButton.addEventListener("click", function(event) {      // runs anonymous function when button is clicked

   // check if password matches required pattern
   let pwdValid = pwd.checkValidity();                        // uses built-in pattern validation

   if (!pwdValid) {                                           // if pattern not matched
      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
                                                              // custom validation message for invalid pattern
   } else if (pwd.value !== pwd2.value) {                     // check if both passwords match
      pwd.setCustomValidity("Your passwords must match");     // custom message if passwords do not match
   } else {
      pwd.setCustomValidity("");                              // clear any custom messages if valid
   }

   // prevent form from submitting if password is invalid
   if (!pwd.checkValidity()) {                                // double check before submission
      event.preventDefault();                                 // stop form from submitting
   }
});
