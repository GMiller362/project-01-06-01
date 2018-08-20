//
// Project 01_06_01

// Author: Grace Wood-Miller
// Date: 8.17.18

// Filename: index.html
//

"use strict";
var formValidity = true;

// function to validate forms
function validateForm(evt) {
    //prevent form default behavior - submit
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
    formValidity = true;

    validateRequired();

        if (formValidity === true ) { // form is valid 
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    }
    else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        scroll(0,0);
    }
}

// making validation required
function validateRequired() {
    var inputField = document.querySelectorAll("#contactinfo" + " input");
    var fieldsetValidity = true;
    var currentElement;


    try {
        // loop through the fields for validity
        for (var i = 0; i < inputField.length; i++) {
            currentElement = inputField[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255, 233, 233)";
                formValidity = false;
            }
            else {
                currentElement.style.background = "white";
            }
            
        }
    }
    catch (error) {

    }
}


// creating event listeners
function setUpPage() {
        if (window.addEventListener) {
           window.addEventListener("submit", validateForm, false);
     }
     else if (window.attachEvent){
        window.attachEvent("onsubmit", validateForm, false);
   }
}

// page load event handlers 
if (window.addEventListener) {
    window.addEventListener("load", setUpPage);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

