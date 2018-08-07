/*

      snoot.js
      Form Validation Functions for snoot.html
      
      Author: Tabitha Siclovan
      Date: 6 August 2018
      
*/

"use strict";

// Function to turn off select list defaults
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("Select Lists: " + emptyBoxes.length);
}

//Enable load event handlers
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}