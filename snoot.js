/*

      snoot.js
      Form Validation Functions for snoot.html
      
      Author: Tabitha Siclovan
      Date: 6 August 2018
      
*/

"use strict";

var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

// Function to turn off select list defaults
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

//Function to set up document fragments for days of month
function setUpDays() {
    //Get the days option text
    var dates = document.getElementById("delivDy").getElementsByTagName("option");
    twentyNine.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true));
}

//Function to update the days select list
function updateDays() {
    var deliveryDay = document.getElementById("delivDy");
    var dates = deliveryDay.getElementsByTagName("option");
    var deliveryMonth = document.getElementById("delivMo");
    var deliveryYear = document.getElementById("delivYr");
    while (dates[28]) {
        deliveryDay.removeChild(dates[28]);
    }
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;
    if (deliveryMonth.selectedIndex === -1) {
        deliveryMonth.selectedIndex = 0;
    }
    //If Feb and 2020 - leap year - twentyNine
    
    //else 30 day month - thirty
    
    //else 31 month - thirtyOne
}

//Functions to run on page load
function setUpPage() {
    removeSelectDefaults();
}

//Enable load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}