// select the two input boxes

var billAmountInput = document.querySelector("#bill-amount-input");  // bill amount input
var cashGivenInput = document.querySelector("#cash-given-input"); // cash given input

// Bill amount div
var billAmountDiv = document.querySelector("#bill-amount-div");

// Cash given div
var cashGivenDiv = document.querySelector("#cash-given-div");

// return change div
var returnChangeDiv = document.querySelector("#return-change-div");

// Errors 
var billAmountError = document.querySelector("#bill-amount-error");
var cashLessThanBillError = document.querySelector("#cash-given-error-1")
var noReturnChangeError = document.querySelector("#cash-given-error-2");
var noInputCashGivenError = document.querySelector("#cash-given-error-3");

// available notes
var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

// no of notes
var noOfNotes = document.querySelectorAll(".no-of-notes");

// return change value
var totalChange = document.querySelector("#return-change");

// select the billAmountButton
var billAmountButton = document.querySelector("#bill-amount-button");

billAmountButton.addEventListener("click", billAmountNextClickHandler);

function billAmountNextClickHandler() {
    var billAmount = Number(billAmountInput.value);
    if(billAmount < 1) {
        billAmountDiv.style.display = "block";
    } else if(billAmount === 0) {
        billAmountError.style.display = "block";
    }
    else {
        billAmountDiv.style.display = "none";
        cashGivenDiv.style.display = "block";
        billAmountButton.style.display = "none";
        billAmountError.style.display = "none";
    }
    console.log(billAmount);
    console.log('clicked!');
}

// select the cashGivenButton
var cashGivenButton = document.querySelector("#cash-given-button");

cashGivenButton.addEventListener("click", cashGivenNextClickHandler);

function cashGivenNextClickHandler() {
    var cashGiven = Number(cashGivenInput.value);
    var billAmount = Number(billAmountInput.value);
    var returnChange = Number(cashGiven - billAmount);

    if(cashGiven === billAmount) {
        noReturnChangeError.style.display = "block";
        cashLessThanBillError.style.display = "none";
        returnChangeDiv.style.display = "none";
    } else if (cashGiven < billAmount) {
        noReturnChangeError.style.display = "none";
        cashLessThanBillError.style.display = "block";
        returnChangeDiv.style.display = "none";
    } else if (cashGiven < 1) {
        noInputCashGivenError.style.display = "block";
    } else {
        totalChange.innerText = returnChange;
        noReturnChangeError.style.display = "none";
        cashLessThanBillError.style.display = "none";
        returnChangeDiv.style.display = "block";
        
        calculateChange(returnChange);

    }
}
 
function calculateChange(returnChange) {
    for(var i=0;i<availableNotes.length;i++) {
        var numberOfNotes = Math.floor(returnChange/availableNotes[i]);
        returnChange = returnChange % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}